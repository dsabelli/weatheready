import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherData, ForecastData } from "../../types";

const weatherApi: string = import.meta.env.VITE_WEATHER_API_KEY;

export interface Coords {
  lat: string;
  lon: string;
}
let units: string = "metric";

export const weatherApiSlice = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://api.openweathermap.org/data/2.5/`,
  }),
  // tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherData, Coords>({
      query: (arg) => {
        const { lat, lon } = arg;
        return {
          url: `weather?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherApi}`,
          params: { lat, lon },
          // providesTags: ["Weather"],
        };
      },
    }),
    getForecast: builder.query<ForecastData, Coords>({
      query: (arg) => {
        const { lat, lon } = arg;
        return {
          url: `forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherApi}`,
          params: { lat, lon },
          // providesTags: ["Weather"],
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery, useGetForecastQuery } = weatherApiSlice;
