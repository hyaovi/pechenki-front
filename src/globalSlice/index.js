import { createSlice } from '@reduxjs/toolkit';
import { removeSession, getSession } from '../utils';
import { productList } from '../constants/mockData';

const initialState = {
  isLoading: false,
  isAuthenticated: getSession('user') ? true : false,
  user: getSession('user') || undefined,
  productList: productList,
};

const mainSlice = createSlice({
  name: 'store',

  initialState,

  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload || true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = Boolean(action.payload);
    },
    logOut: (state) => {
      removeSession('user');
      removeSession('orderList');
      state = initialState;
    },
    setProducts: (state, action) => {
      state.storeProduct = action.payload;
    },
  },
});

export const {
  loading,
  setUser,
  logOut,
  setProducts,

  addProductToCart,
  UpdateProductToCart,
} = mainSlice.actions;
export default mainSlice.reducer;

export const selectLoading = (state) => state.cookie.isLoading;
export const selectIsAuthenticated = (state) => state.cookie.isAuthenticated;
export const selectOrdersList = (state) => state.cookie.ordersList;
export const selectProductList = (state) => state.cookie.productList;
