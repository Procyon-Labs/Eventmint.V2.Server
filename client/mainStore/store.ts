import { configureStore } from "@reduxjs/toolkit";
import { ticketSlice } from "./reduxSlices/ticketDetailSlice";
import profileReducer from "../component/features/profile/profileslice";
import { eventSlice } from "@/component/features/eventstore/eventSlice";
import { profile } from "console";

export const store = configureStore({
  reducer: {
    ticketDetail: ticketSlice.reducer,
    profile: profileReducer,
    event: eventSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
