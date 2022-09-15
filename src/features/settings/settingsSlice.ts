import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Storage } from "redux-persist";

interface Preferences {
  runsCold: boolean;
  runsHot: boolean;
}

export interface Settings {
  metric: boolean;
  imperial: boolean;
  units: {
    temp: string;
    rain: string;
    snow: string;
    wind: string;
  };
  quizTaken: boolean;
  preferences: Preferences;
  theme: string;
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
  units: { temp: "°C", rain: "mm/hr", snow: "cm/hr", wind: "km/h" },
  quizTaken: false,
  preferences: {
    runsCold: false,
    runsHot: false,
  },
  theme: "light",
};

//set and persist user settings in local storage
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setUnits: (state, action: PayloadAction<boolean>) => {
      const payload = action.payload;
      state.metric = payload;
      state.imperial = !payload;
      state.metric
        ? (state.units = {
            temp: "°C",
            rain: "mm/hr",
            snow: "cm/hr",
            wind: "km/h",
          })
        : (state.units = {
            temp: "°F",
            rain: "in/hr",
            snow: "in/hr",
            wind: "mph",
          });
    },
    setQuiz: (state, action: PayloadAction<boolean>) => {
      state.quizTaken = action.payload;
    },
    setPreferences: (state, action: PayloadAction<Preferences>) => {
      const payload = action.payload;
      state.preferences = { ...payload };
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setUnits, setQuiz, setPreferences, setTheme } =
  settingsSlice.actions;

export default persistReducer(persistConfig, settingsSlice.reducer);
