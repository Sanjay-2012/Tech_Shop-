import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/Cartslice'; 
import productReducer from './Slices/Productslice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer, 
    product: productReducer,
  },
});

export default store;
