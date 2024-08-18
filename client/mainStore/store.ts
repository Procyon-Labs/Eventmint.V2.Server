import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../component/features/profile/profileslice";
import { profile } from "console";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    // other reducers...
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
