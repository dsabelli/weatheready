import { configureStore } from "@reduxjs/toolkit";
import { weatherApiSlice } from "../features/weatherApi/weatherApiSlice";
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
import previousLocationReducer from "../features/location/previousLocationSlice";
import settingsReducer from "../features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
    [autocompleteSlice.reducerPath]: autocompleteSlice.reducer,
    location: locationReducer,
    previousLocation: previousLocationReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(weatherApiSlice.middleware, autocompleteSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
