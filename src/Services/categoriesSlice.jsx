// slices/productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  categories: [],
};

// Create async thunk to fetch products
export const fetchcategories = createAsyncThunk(
  "categories/fetchcategories",
  async () => {
    const response = await axios.get("http://localhost:8000/api/categories");
    return response.data;
  }
);

// Create the categories slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
