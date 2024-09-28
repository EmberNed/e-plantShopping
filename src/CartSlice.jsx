import { createSlice } from '@reduxjs/toolkit';
// import {s} from "vite/dist/node/types.d-aGj9QkWt.js";
import {unstable_renderSubtreeIntoContainer} from "react-dom";

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost } = action.payload;
      const existItems = state.items.find(item=> item.name === name);
      if (existItems) {
        existItems.quantity++;
      }else {
        state.items.push({ name, image, cost, quantity:1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      console.log(action.payload)
      const {name, quantity } = action.payload;
      const existItem = state.items.find(item=> item.name === name);
      if (existItem) {
        existItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
