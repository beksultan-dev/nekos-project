import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Main, Rating } from "./types";

export const charactersApi = createApi({
	reducerPath: "characterApi",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASEURL }),
	endpoints: (builder) => ({
		getRandomCharacter: builder.query<Main, { limit: string; rating: Rating }>({
			query: ({ limit, rating }) => ({
				url: `images/random`,
				params: {
					limit: limit,
					rating: rating,
				},
			}),

			serializeQueryArgs: ({ endpointName }) => endpointName,

			merge: (current, newItems) => {
				current.items.push(...newItems.items);
			},

			forceRefetch: (params) => {
				return params.currentArg !== params.previousArg;
			},
		}),
	}),
});

export const { useGetRandomCharacterQuery, util } = charactersApi;
