import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://api.nekosapi.com/v3/";

export const charactersApi = createApi({
	reducerPath: "characterApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getRandomCharacter: builder.query<void, void>({
			query: () => "",
		}),
	}),
});

export const { useGetRandomCharacterQuery } = charactersApi;
