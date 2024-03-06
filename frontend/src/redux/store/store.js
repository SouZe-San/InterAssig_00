import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authentication.slice";

// Slice Reducers

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
