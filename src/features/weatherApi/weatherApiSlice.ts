import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OneCallData } from "../../types";

const weatherApi: string = import.meta.env.VITE_WEATHER_API_KEY;

export interface Coords {
  lat: string;
  lon: string;
  units: string;
}

export const weatherApiSlice = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://api.openweathermap.org/data/`,
  }),
  // tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getOneCall: builder.query<OneCallData, Coords>({
      query: (arg) => {
        const { lat, lon, units } = arg;
        return {
          url: `3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherApi}`,
          params: { lat, lon, units },
        };
      },
    }),
  }),
});

export const { useGetOneCallQuery } = weatherApiSlice;
