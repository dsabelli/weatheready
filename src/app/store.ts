import { configureStore } from "@reduxjs/toolkit";
import { weatherApiSlice } from "../features/weatherApi/weatherApiSlice";
import { geoApiSlice } from "../features/geoApi/geoApiSlice";
import locationReducer from "../features/location/locationSlice";

export const store = configureStore({
  reducer: {
    [geoApiSlice.reducerPath]: geoApiSlice.reducer,
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      geoApiSlice.middleware,
      weatherApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
