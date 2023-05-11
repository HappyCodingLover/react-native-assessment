import { configureStore } from '@reduxjs/toolkit';
import storage from 'reduxjs-toolkit-persist/lib/storage';

import { authReducer, userReducer } from './slices';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export * from './slices';

export default store;
