import { configureStore } from '@reduxjs/toolkit';
import flowReducer from './flowSlice.js';

export const store = configureStore({
  reducer: {
    flow: flowReducer,
  },
});

