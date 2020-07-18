import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../globalSlice';
export default configureStore({
  reducer: {
    cookie: mainReducer,
  },
});
