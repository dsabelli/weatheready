import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherData } from "../../types";

const weatherApi: string = import.meta.env.VITE_WEATHER_API_KEY;

export interface Coords {
  lat: string;
  lon: string;
}

export const weatherApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://api.openweathermap.org/data/2.5/forecast`,
  }),
  tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherData, Coords>({
      query: (arg) => {
        const { lat, lon } = arg;
        return {
          url: `?lat=${lat}&lon=${lon}&appid=${weatherApi}`,
          params: { lat, lon },
          providesTags: ["Weather"],
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApiSlice;
