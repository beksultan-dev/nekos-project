import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Main } from "./types";

export const charactersApi = createApi({
	reducerPath: "characterApi",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASEURL }),
	endpoints: (builder) => ({
		getRandomCharacter: builder.query<Main, void>({
			query: () => ({ url: "images/random?limit=1" }),
		}),
	}),
});

export const { useGetRandomCharacterQuery } = charactersApi;
