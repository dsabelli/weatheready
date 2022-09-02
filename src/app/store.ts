import { configureStore } from "@reduxjs/toolkit";
import { weatherApiSlice } from "../features/weatherApi/weatherApiSlice";
import { autocompleteSlice } from "../features/autocompleteApi/autocompleteSlice";
import { reverseLocationSlice } from "../features/reverseLocationApi/reverseLocationSlice";
import locationReducer from "../features/location/locationSlice";
import previousLocationReducer from "../features/location/previousLocationSlice";
import storedLocationReducer from "../features/location/storedLocationSlice";
import settingsReducer from "../features/settings/settingsSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
    [autocompleteSlice.reducerPath]: autocompleteSlice.reducer,
    [reverseLocationSlice.reducerPath]: reverseLocationSlice.reducer,
    location: locationReducer,
    previousLocation: previousLocationReducer,
    storedLocation: storedLocationReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      weatherApiSlice.middleware,
      autocompleteSlice.middleware,
      reverseLocationSlice.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
