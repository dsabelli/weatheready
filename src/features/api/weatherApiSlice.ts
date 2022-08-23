import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherData } from "../../types";

const weatherApi = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `api.openweathermap.org/data/2.5`,
  }),
  tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherData, void>({
      query: () =>
        `/forecast?lat=${42.0532}&lon=${82.5999}&appid=${weatherApi}`,
      providesTags: ["Weather"],
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApiSlice;
