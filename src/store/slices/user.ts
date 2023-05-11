/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState, User } from 'types';

const initialState: User = {
  user: {
    createdAt: '',
    updatedAt: '',
    userID: '',
    email: '',
    firstName: '',
    lastName: '',
    name: '',
    pilotGoals: [],
    gender: '',
    phone: '',
    thumbnail: '',
  },
  isAuthenticated: false,
};
// Set
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

    setUserEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
  },
});

export const { setUserAuth, setUserEmail } = userSlice.actions;
export default userSlice.reducer;
// Get
export const getUserAuth = (state: RootState) => state.auth.isAuthenticated;
// export const getGoogleSignStatus = (state: RootState) =>
//   state.auth.googleSignStatus;
// export const getEmail = (state: RootState) => state.auth.auth.email;
