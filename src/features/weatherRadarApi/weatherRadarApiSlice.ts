import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OneCallData } from "../../types";

const weatherApi: string = import.meta.env.VITE_WEATHER_API_KEY;
type Layer =
  | "clouds_new"
  | "precipitation_new"
  | "pressure_new"
  | "wind_new"
  | "temperature_new";

export interface Coords {
  lat: string;
  lon: string;
  layer: Layer;
}
const zoom = "13";

export const weatherRadarApiSlice = createApi({
  reducerPath: "weatherRadarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ` https://tile.openweathermap.org/map/`,
  }),
  // tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getRadar: builder.query<OneCallData, Coords>({
      query: (arg) => {
        const { lat, lon, layer } = arg;
        return {
          url: `${layer}/${zoom}/${lat}/${lon}.png?appid=${weatherApi}`,

          // providesTags: ["Weather"],
        };
      },
    }),
  }),
});

export const { useGetRadarQuery } = weatherRadarApiSlice;
