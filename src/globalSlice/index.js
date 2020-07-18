import { createSlice } from '@reduxjs/toolkit';
// main redux configuration
const mainSlice = createSlice({
  name: 'cookies',

  initialState: {
    loading: false,
    isAuthenticated: false,
    user: {},
  },

  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loading, setUser } = mainSlice.actions;
export default mainSlice.reducer;
