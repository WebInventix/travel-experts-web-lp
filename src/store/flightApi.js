import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flightApi = createApi({
  reducerPath: 'flightApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://trvlnxtgateway.parikshan.net/api',
  }),
  endpoints: (builder) => ({
    searchFlights: builder.mutation({
      query: (searchParams) => ({
        url: '/Availability',
        method: 'POST',
        body: searchParams,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useSearchFlightsMutation } = flightApi;
