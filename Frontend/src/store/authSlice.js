import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: null,
    admin: null,
    isAuthenticated: false,
  },

  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.admin = action.payload.admin;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.token = null;
      state.admin = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
