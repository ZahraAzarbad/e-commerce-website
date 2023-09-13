import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./instances/CartSlice";
import categoriesReducer from "./categoriesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
  },
});

export default store;
