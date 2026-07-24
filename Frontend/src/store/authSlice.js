import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isAuth: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
