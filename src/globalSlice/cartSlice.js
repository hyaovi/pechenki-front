import { createSlice } from '@reduxjs/toolkit';
import { setSession, getSession } from '../utils';

const initialState = getSession('orderList') || [];
const cartSlice = createSlice({
  name: 'cartSlice',

  initialState,

  reducers: {
    addProductToCart: (state, action) => {
      state.push(action.payload);
      setSession('orderList', state);
    },

    updateCart: (state, action) => {
      state = action.payload;
      setSession('orderList', action.payload);
    },
  },
});

export const {
  addProductToCart,
  UpdateProductToCart,
  deleteProductFromCart,
  updateCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectOrdersList = (state) => state.cart;
