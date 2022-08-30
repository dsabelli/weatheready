import { configureStore } from "@reduxjs/toolkit";
import { weatherApiSlice } from "../features/weatherApi/weatherApiSlice";
import { geoApiSlice } from "../features/geoApi/geoApiSlice";
import locationReducer from "../features/location/locationSlice";
import settingsReducer from "../features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    [geoApiSlice.reducerPath]: geoApiSlice.reducer,
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
    location: locationReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      geoApiSlice.middleware,
      weatherApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
