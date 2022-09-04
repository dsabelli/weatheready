import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AutocompleteData } from "../../types";

const geoApi: string = import.meta.env.VITE_GEO_API_KEY;

export const autocompleteSlice = createApi({
  reducerPath: "autocompleteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.geoapify.com/v1/geocode/`,
  }),
  endpoints: (builder) => ({
    getAutocomplete: builder.query<AutocompleteData, any>({
      query: (arg) => {
        const { input } = arg;
        return {
          url: `autocomplete?text=${input}&apiKey=${geoApi}`,
          params: { input },
        };
      },
    }),
  }),
});

export const { useGetAutocompleteQuery } = autocompleteSlice;
