import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./instances/CartSlice";
import categoriesReducer from "./categoriesSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    user: userSlice,
  },
});

export default store;
