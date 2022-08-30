import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Settings {
  metric: boolean;
  imperial: boolean;
  units: {
    temp: string;
    precip: string;
    wind: string;
  };
}

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

export default settingsSlice.reducer;
