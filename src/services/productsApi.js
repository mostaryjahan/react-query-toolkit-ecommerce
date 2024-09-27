import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
        query: () => 'products'
    })
  })
});
