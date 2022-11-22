import { createSlice } from "@reduxjs/toolkit";

export const catergories = createSlice({
  name: "categories",
  initialState: {
    value: {},
  },
  reducers: {
    handleCategories: (state, action) => {
      state.value = action.payload;
    },
    refreshCategories: (state) => {
      state.value = {};
    },
  },
});

export const { handleCategories, refreshCategories } = catergories.actions;

export default catergories.reducer;
