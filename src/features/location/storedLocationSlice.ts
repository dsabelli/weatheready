import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Storage } from "redux-persist";
import { Location } from "../../types";

interface Config {
  key: string;
  storage: Storage;
}
const persistConfig: Config = {
  key: "root",
  storage,
};

const initialState: Location = { lat: "0", lon: "0" };

const storedLocationSlice = createSlice({
  name: "storedLocation",
  initialState,
  reducers: {
    setStoredLocation: (state, action: PayloadAction<Location>) => {
      const coords = action.payload;
      state.lat = coords.lat;
      state.lon = coords.lon;
    },
  },
});

export const { setStoredLocation } = storedLocationSlice.actions;

export default persistReducer(persistConfig, storedLocationSlice.reducer);
