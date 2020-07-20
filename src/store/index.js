import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../globalSlice';
import cartReducer from '../globalSlice/cartSlice';
export default configureStore({
  reducer: {
    cookie: mainReducer,
    cart: cartReducer,
  },
});
