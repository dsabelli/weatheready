import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Storage } from "redux-persist";

export interface Settings {
  metric: boolean;
  imperial: boolean;
  units: {
    temp: string;
    precip: string;
    wind: string;
  };
}
interface Config {
  key: string;
  storage: Storage;
}
const persistConfig: Config = {
  key: "root",
  storage,
};

const initialState: Settings = {
  metric: true,
  imperial: false,
  units: { temp: "°C", precip: "mm/h", wind: "km/h" },
};
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<boolean>) => {
      const payload = action.payload;
      state.metric = payload;
      state.imperial = !payload;
      state.metric
        ? (state.units = { temp: "°C", precip: "mm/h", wind: "km/h" })
        : (state.units = { temp: "°F", precip: "in/h", wind: "mph" });
    },
  },
});

export const { setSettings } = settingsSlice.actions;

export default persistReducer(persistConfig, settingsSlice.reducer);
