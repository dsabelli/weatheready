import { configureStore } from "@reduxjs/toolkit";
import { weatherApiSlice } from "../features/weatherApi/weatherApiSlice";
import { autocompleteSlice } from "../features/autocompleteApi/autocompleteSlice";
import { reverseLocationSlice } from "../features/reverseLocationApi/reverseLocationSlice";
import { weatherRadarApiSlice } from "../features/weatherRadarApi/weatherRadarApiSlice";
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
    [weatherRadarApiSlice.reducerPath]: weatherRadarApiSlice.reducer,
    [autocompleteSlice.reducerPath]: autocompleteSlice.reducer,
    [reverseLocationSlice.reducerPath]: reverseLocationSlice.reducer,
    location: locationReducer,
    previousLocation: previousLocationReducer,
    storedLocation: storedLocationReducer,
    settings: settingsReducer,
  },
  //set up middleware for slices, ignore actions for redux-persist as recommended by redux docs.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      weatherApiSlice.middleware,
      weatherRadarApiSlice.middleware,
      autocompleteSlice.middleware,
      reverseLocationSlice.middleware
    ),
});

//set up persistor for PersistGate wrapper
export const persistor = persistStore(store);

//infer types from store per redux docs
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
