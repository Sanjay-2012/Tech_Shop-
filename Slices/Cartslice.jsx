import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0
  },

  reducers: {
    additem: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(i => i.id === item.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.total += 1;
    },

    increment: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(i => i.id === item.id);

      if (exist) {
        exist.quantity += 1;
      }
      state.total += 1;
    },

    decrement: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(i => i.id === item.id);

      if (exist) {
        if (exist.quantity > 1) {
          exist.quantity -= 1;
          state.total -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== item.id);
          state.total -= 1;
        }
      }
    },



    removeitem: (state, action) => {
      const id = action.payload;
      const exist = state.items.find(i => i.id === id);

      if (exist) {
        state.total -= exist.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
  }
});

export const { additem, removeitem, clearCart, increment, decrement, total } = cartSlice.actions;
export default cartSlice.reducer;