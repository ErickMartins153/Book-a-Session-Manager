import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Session, SESSIONS } from "../dummy_sessions";

type SessionsState = {
  sessions: Session[];
};

const initialState: SessionsState = {
  sessions: SESSIONS,
};

export const sessionsSlice = createSlice({
  name: "sessions",
  initialState: initialState,
  reducers: {
    bookSession(state, action: PayloadAction<Session>) {
      const sessionIndex = state.sessions.findIndex(
        (session) => session.id === action.payload.id
      );
      if (sessionIndex >= 0) {
        return;
      }
      state.sessions.push(action.payload);
    },
    removeSession(state, action: PayloadAction<{ id: string }>) {
      const sessionIndex = state.sessions.findIndex(
        (session) => session.id === action.payload.id
      );
      state.sessions.splice(sessionIndex, 1);
    },
  },
});
