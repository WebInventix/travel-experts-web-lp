// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const flightApi = createApi({
//   reducerPath: "flightApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://proxy-backend-06d6.onrender.com/api",
//   }),
//   endpoints: (builder) => ({
//     searchFlights: builder.mutation({
//       query: (searchParams) => ({
//         url: "/Availability",
//         method: "POST",
//         body: searchParams,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }),
//     }),
//   }),
// });

// export const { useSearchFlightsMutation } = flightApi;

// export const flightApi = createApi({
//   reducerPath: "flightApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://trvlnxtgateway.parikshan.net/api",
//   }),
//   endpoints: (builder) => ({
//     searchFlights: builder.mutation({
//       query: (searchParams) => ({
//         url: "/Availability",
//         method: "POST",
//         body: searchParams,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }),
//     }),
//   }),
// });

// export const { useSearchFlightsMutation } = flightApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PHP_PROXY_URL = "https://webcraftpros.com/proxy_api";
const TARGET_API_BASE = "http://trvlnxtgateway.parikshan.net/api";
const API_KEY =
	"CUST01010101MqkRi0o1s5Qd0Fk6JGWoFxhMlbhjeGIeyhBTZBPLNkeQNOyd9acb";

// Custom base query to use PHP proxy
const phpProxyBaseQuery = fetchBaseQuery({
	baseUrl: PHP_PROXY_URL,
	prepareHeaders: (headers) => {
		headers.set("Content-Type", "application/x-www-form-urlencoded");
		return headers;
	},
});

// Transform request to PHP proxy format
const proxyQueryWrapper = async (args, api, extraOptions) => {
	const { url, method = "POST", body } = args;

	// Construct the full target URL
	const targetUrl = `${TARGET_API_BASE}${url}`;

	// Prepare headers for the actual API
	const targetHeaders = {
		"Content-Type": "application/json",
		Accept: "*/*",
		apikey: API_KEY,
	};

	// Create form data for PHP proxy
	const formData = new URLSearchParams();
	formData.append("url", targetUrl);
	formData.append("payloads", JSON.stringify(body));
	formData.append("headers", JSON.stringify(targetHeaders));

	// Make request through proxy
	const result = await phpProxyBaseQuery(
		{
			url: "",
			method: "POST",
			body: formData.toString(),
		},
		api,
		extraOptions
	);

	return result;
};

export const flightApi = createApi({
	reducerPath: "flightApi",
	baseQuery: proxyQueryWrapper,
	endpoints: (builder) => ({
		searchFlights: builder.mutation({
			query: (searchParams) => ({
				url: "/Availability",
				method: "POST",
				body: searchParams,
			}),
		}),
	}),
});

export const { useSearchFlightsMutation } = flightApi;
