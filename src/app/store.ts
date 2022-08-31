import { configureStore } from "@reduxjs/toolkit";
import { weatherApiSlice } from "../features/weatherApi/weatherApiSlice";
import { geoApiSlice } from "../features/geoApi/geoApiSlice";
import { autocompleteSlice } from "../features/autocompleteApi/autocompleteSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import locationReducer from "../features/location/locationSlice";
import settingsReducer from "../features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    [geoApiSlice.reducerPath]: geoApiSlice.reducer,
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
    [autocompleteSlice.reducerPath]: autocompleteSlice.reducer,
    location: locationReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      geoApiSlice.middleware,
      weatherApiSlice.middleware,
      autocompleteSlice.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
