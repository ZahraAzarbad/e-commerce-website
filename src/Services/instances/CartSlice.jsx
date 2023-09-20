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
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // console.log(action);
      const item = state.products.find((item) => item?._id === payload?._id);
      // console.log(state.products)
      // console.log(payload);
      if (!item) {
        console.log(payload);
        state.products.push(payload);
        // console.log([...state.products]);
        // localStorage.setItem("basket",JS)
        localStorage.setItem("basket", JSON.stringify([...state.products]));
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
        item.count++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.count--;
      }
    },

    cleanMessage: (state) => {
      state.message.status = "";
    },
  },
});

export const {
  addToCart,
  deleteProducts,
  increaseQuantity,
  drecreaseQuantity,
  cleanMessage,
} = cartSlice.actions;

export default cartSlice.reducer;
