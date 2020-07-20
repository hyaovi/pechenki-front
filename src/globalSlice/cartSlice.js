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
    UpdateProductToCart: (state, action) => {
      const product = state.find(
        (product) => (product.productID = action.payload.id)
      );
      if (product) {
        product.amount = action.payload.amount;
      }
      // state[action.payload.index].amount = action.payload.amount;
    },
    deleteProductFromCart: (state, action) => {
      console.log(action.payload.id);
      const newState = state.filter(
        (product) => product.productID !== action.payload.id
      );
      state = newState;
      setSession('orderList', state);
    },
    updateCart: (state, action) => {
      state = [...action.payload];
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
