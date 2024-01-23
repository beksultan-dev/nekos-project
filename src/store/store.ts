import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/characters-api";
import { userPreferensesSlice } from "./slices/user-preferenses/user-preferenses";

const RootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	userPreferenses: userPreferensesSlice.reducer,
});

export const store = configureStore({
	reducer: RootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
