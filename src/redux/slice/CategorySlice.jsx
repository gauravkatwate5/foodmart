import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategorydata: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategorydata } = categorySlice.actions;

export default categorySlice.reducer;
