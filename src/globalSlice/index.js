import { createSlice } from '@reduxjs/toolkit';
import { removeSession } from '../utils';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: undefined,
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
      state = initialState;
    },
  },
});

export const { loading, setUser, logOut } = mainSlice.actions;
export default mainSlice.reducer;

export const selectLoading = (state) => state.cookie.isLoading;
export const selectIsAuthenticated = (state) => state.cookie.isAuthenticated;
