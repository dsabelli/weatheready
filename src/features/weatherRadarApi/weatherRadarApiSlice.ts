import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Radar {
  time: number;
  path: string;
}

export interface RadarData {
  generated: number;
  host: string;
  radar: {
    past: Radar[];
    nowcast: Radar[];
  };
  satellite: {
    infrared: Radar[];
  };
  version: string;
}

//returns weather map data for the entire map
export const weatherRadarApiSlice = createApi({
  reducerPath: "weatherRadarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.rainviewer.com/public/weather-maps.json`,
  }),
  // tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getRadar: builder.query<RadarData, any>({
      query: () => {
        return {
          url: "",
        };
      },
    }),
  }),
});

export const { useGetRadarQuery } = weatherRadarApiSlice;
