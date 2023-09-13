import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
  message: {
    status: "",
  },
  deliveryDate: "",
  deliveryState: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.products.find((item) => item?._id === payload?._id);
      if (!item) {
        state.products.push(payload);
        // localStorage.setItem("cart", JSON.stringify(state.products));
        state.message.status = "success";
      } else {
        state.message.status = "error";
      }
    },

    deleteProducts: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => !payload.includes(product._id)
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    addDelivery: (state, { payload }) => {
      state.deliveryDate = payload.deliveryDate;
      state.deliveryState = payload.deliveryState;
      localStorage.setItem(
        "delivery",
        JSON.stringify({
          date: payload.deliveryDate,
          status: payload.deliveryState,
        })
      );
    },
    updateProduct: (state, { payload }) => {
      state.products = state.products.map((product) =>
        product._id === payload._id ? payload : product
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    initCart: (state, { payload }) => {
      state.products = payload;
      state.message.message = "";
      state.message.status = "";
      localStorage.setItem("cart", JSON.stringify([]));
    },
    cleanMessage: (state) => {
      state.message.status = "";
    },
  },
});

export const {
  addToCart,
  addDelivery,
  deleteProducts,
  increaseQuantity,
  drecreaseQuantity,
  updateProduct,
  initCart,
  cleanMessage,
} = cartSlice.actions;
export default cartSlice.reducer;
