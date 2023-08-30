// store.js
import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./categoriesSlice";
// import categoriesReducer from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});
export default store;
