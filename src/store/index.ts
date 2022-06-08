import { configureStore } from "@reduxjs/toolkit";
import loginUser from "./loginUser/";

export const store = configureStore({
  reducer: {
    loginUser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
