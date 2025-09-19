import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],        // store all products
    selectedProduct: null,  // currently selected product
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload; // load all products once
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload; // set selected product
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { setAllProducts, setSelectedProduct, clearSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;



