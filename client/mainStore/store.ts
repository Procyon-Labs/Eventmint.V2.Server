import { configureStore } from '@reduxjs/toolkit';
import { ticketSlice } from './reduxSlices/ticketDetailSlice';


export const store = configureStore({
  reducer: {
    ticketDetail:ticketSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
