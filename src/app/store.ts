import { configureStore } from "@reduxjs/toolkit";
import { weatherApiSlice } from "../features/api/weatherApiSlice";
import { geoApiSlice } from "../features/api/geoApiSlice";

export const store = configureStore({
  reducer: {
    [geoApiSlice.reducerPath]: geoApiSlice.reducer,
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
  //     .prepend(geoApiSlice.middleware)
  //     .concat(weatherApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
