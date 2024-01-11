import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./services/characters";

const RootReducer = combineReducers({
	charactersApi: charactersApi.reducer,
});

export const store = configureStore({
	reducer: RootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
