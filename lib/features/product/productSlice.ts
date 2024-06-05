import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: true,
  },
  reducers: {
    loadProductData: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    }
  }
});

export const { loadProductData } = productSlice.actions;
export default productSlice.reducer;
