import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Session, SESSIONS } from "../dummy_sessions";

type SessionsState = {
  sessions: Session[];
  savedSessions: Session[];
};

const initialState: SessionsState = {
  sessions: SESSIONS,
  savedSessions: [],
};

export const sessionsSlice = createSlice({
  name: "sessions",
  initialState: initialState,
  reducers: {
    bookSession(state, action: PayloadAction<{ id: string }>) {
      const sessionIndex = state.savedSessions.findIndex(
        (session) => session.id === action.payload.id
      );

      if (sessionIndex >= 0) {
        return;
      }
      const session = state.sessions.find(
        (session) => session.id === action.payload.id
      );

      if (!session) {
        return;
      }

      state.savedSessions.push(session);
    },
    cancelSession(state, action: PayloadAction<{ id: string }>) {
      const sessionIndex = state.savedSessions.findIndex(
        (session) => session.id === action.payload.id
      );
      state.savedSessions.splice(sessionIndex, 1);
    },
  },
});

export const { bookSession, cancelSession } = sessionsSlice.actions;
