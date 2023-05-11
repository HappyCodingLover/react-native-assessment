/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState, AuthState, User } from 'types';

const initialState: AuthState = {
  auth: {
    userID: '',
    createdAt: '',
    updatedAt: '',
    email: '',
    phone: '',
    name: '',
    firstName: '',
    lastName: '',
    gender: '',
    thumbnail: '',
  },
  loading: false,
  isAuthenticated: false,
  value: 0,
};
// Set
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

    setEmail: (state, action: PayloadAction<string>) => {
      state.auth.email = action.payload;
    },
  },
});

export const { setAuthenticated, setEmail } = authSlice.actions;
export default authSlice.reducer;
// Get
export const getAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
// export const getGoogleSignStatus = (state: RootState) =>
//   state.auth.googleSignStatus;
// export const getEmail = (state: RootState) => state.auth.auth.email;
