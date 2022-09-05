import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Coords {
  lat: string;
  lon: string;
}

const initialState: Coords = { lat: "", lon: "" };

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Coords>) => {
      const coords = action.payload;
      state.lat = coords.lat;
      state.lon = coords.lon;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
