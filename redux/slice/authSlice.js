import { createSlice } from "@reduxjs/toolkit";

// Create a slice of state for authentication and authorization using email and password with Redux Toolkit
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    // check isLogged in or not by checking token
    checkAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

// Export actions
export const { login, logout, checkAuth } = authSlice.actions;

// Export selectors
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

// Export reducer
export default authSlice.reducer;
