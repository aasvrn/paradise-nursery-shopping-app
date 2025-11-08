import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { ...plant, quantity: 1 };
      }
    },
    increment(state, action) {
      const id = action.payload;
      const item = state.items[id];
      if (item) {
        item.quantity += 1;
      }
    },
    decrement(state, action) {
      const id = action.payload;
      const item = state.items[id];
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          delete state.items[id];
        }
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      delete state.items[id];
    },
    clear(state) {
      state.items = {};
    }
  }
});

export const { addItem, increment, decrement, removeItem, clear } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItemsArray = (state) => Object.values(state.cart.items);
export const selectTotalCount = (state) =>
  selectCartItemsArray(state).reduce((sum, item) => sum + item.quantity, 0);
export const selectTotalCost = (state) =>
  selectCartItemsArray(state).reduce((sum, item) => sum + item.quantity * item.price, 0);