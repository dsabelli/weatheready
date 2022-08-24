import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeoData } from "../../types";

const weatherApi: string = import.meta.env.VITE_WEATHER_API_KEY;
const limit: number = 5;
export interface Location {
  city: string;
  state: string;
  country: string;
}

export const geoApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://api.openweathermap.org/geo/1.0/direct`,
  }),
  tagTypes: ["Geo"],
  endpoints: (builder) => ({
    getGeo: builder.query<GeoData, Location>({
      query: (arg) => {
        const { city, state, country } = arg;
        return {
          url: `?q=${city},${state},${country}&limit=${limit}&appid=${weatherApi}`,
          params: { city, state, country },
          providesTags: ["Geo"],
        };
      },
    }),
  }),
});

export const { useGetGeoQuery } = geoApiSlice;
