import { configureStore } from "@reduxjs/toolkit";
import { sessionsSlice } from "./sessions-slice";

export const store = configureStore({
  reducer: {
    upcommingSessions: sessionsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
