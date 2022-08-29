import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OneCallData } from "../../types";

const weatherApi: string = import.meta.env.VITE_WEATHER_API_KEY;

export interface Coords {
  lat: string;
  lon: string;
}
let units: string = "metric";

export const weatherApiSlice = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://api.openweathermap.org/data/`,
  }),
  // tagTypes: ["Weather"],
  endpoints: (builder) => ({
    // getWeather: builder.query<WeatherData, Coords>({
    //   query: (arg) => {
    //     const { lat, lon } = arg;
    //     return {
    //       url: `2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherApi}`,
    //       params: { lat, lon },
    //       // providesTags: ["Weather"],
    //     };
    //   },
    // }),
    // getForecast: builder.query<ForecastData, Coords>({
    //   query: (arg) => {
    //     const { lat, lon } = arg;
    //     return {
    //       url: `2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherApi}`,
    //       params: { lat, lon },
    //       // providesTags: ["Weather"],
    //     };
    //   },
    // }),
    getOneCall: builder.query<OneCallData, Coords>({
      query: (arg) => {
        const { lat, lon } = arg;
        return {
          url: `3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherApi}`,
          params: { lat, lon },
          // providesTags: ["Weather"],
        };
      },
    }),
  }),
});

export const { useGetOneCallQuery } = weatherApiSlice;
