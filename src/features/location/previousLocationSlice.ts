import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Storage } from "redux-persist";
import { Location } from "../../types";

export interface LocationInitialState {
  previousLocations: Location[];
}

interface Config {
  key: string;
  storage: Storage;
}
const persistConfig: Config = {
  key: "previousLocation",
  storage,
};

const initialState: LocationInitialState = {
  previousLocations: [],
};

const previousLocationSlice = createSlice({
  name: "previousLocation",
  initialState,
  reducers: {
    setPreviousLocation: (state, action: PayloadAction<Location>) => {
      const location = action.payload;
      state.previousLocations.unshift(location);
      if (state.previousLocations.length >= 5) state.previousLocations.pop();
    },
  },
});

export const { setPreviousLocation } = previousLocationSlice.actions;

export default persistReducer(persistConfig, previousLocationSlice.reducer);
