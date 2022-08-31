import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeoData } from "../../types";
import { Location } from "../../types";
import { nanoid } from "nanoid";

const autocompleteApi: string = import.meta.env.VITE_AUTOCOMPLETE_API_KEY;
const sessionToken: string = nanoid();

export const autocompleteSlice = createApi({
  reducerPath: "autocompleteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.geoapify.com/v1/geocode/autocomplete`,
  }),
  // tagTypes: ["Geo"],
  endpoints: (builder) => ({
    getAutocomplete: builder.query<any, any>({
      query: (arg) => {
        const { input } = arg;
        return {
          url: `?text=${input}&apiKey=${autocompleteApi}`,
          params: { input },
          // providesTags: ["Geo"],
        };
      },
    }),
  }),
});

export const { useGetAutocompleteQuery } = autocompleteSlice;
