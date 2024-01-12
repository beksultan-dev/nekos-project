import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./api/characters-api";
import { userPreferensesSlice } from "./slices/user-preferenses/user-preferenses";

const RootReducer = combineReducers({
	[charactersApi.reducerPath]: charactersApi.reducer,
	userPreferenses: userPreferensesSlice.reducer,
});

export const store = configureStore({
	reducer: RootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
