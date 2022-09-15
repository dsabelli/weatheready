import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ReverseLocationData } from "../../types";

const geoApi: string = import.meta.env.VITE_GEO_API_KEY;

//gets the city and state or country based on the coordiantes
export const reverseLocationSlice = createApi({
  reducerPath: "reverseLocationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.geoapify.com/v1/geocode/`,
  }),
  endpoints: (builder) => ({
    getReverseLocation: builder.query<ReverseLocationData, any>({
      query: (arg) => {
        const { latitude, longitude } = arg;

        return {
          url: `reverse?lat=${latitude}&lon=${longitude}&apiKey=${geoApi}`,
          params: { latitude, longitude },
        };
      },
    }),
  }),
});

export const { useGetReverseLocationQuery } = reverseLocationSlice;
