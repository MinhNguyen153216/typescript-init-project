import { configureStore } from "@reduxjs/toolkit";

import tempReducer from "./reducers/tempReducer";

export const store = configureStore({
  reducer: {
    tempReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
