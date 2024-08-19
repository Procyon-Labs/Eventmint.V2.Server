import { configureStore } from '@reduxjs/toolkit';
import { ticketSlice } from './reduxSlices/ticketDetailSlice';
import profileReducer from "../component/features/profile/profileslice";
import { profile } from "console";

export const store = configureStore({
  reducer: {
    ticketDetail:ticketSlice.reducer,
    profile: profileReducer,
        // other reducers..
  }})

// const store = configureStore({
//   reducer: {
   
// .
//   },
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
