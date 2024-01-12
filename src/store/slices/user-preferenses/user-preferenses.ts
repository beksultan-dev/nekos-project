import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
	isExplicit: boolean;
}

const initialState: InitialState = {
	isExplicit: false,
};

export const userPreferensesSlice = createSlice({
	name: "userPreferenses",
	initialState,
	reducers: {
		enableExplicitMode: (state, action: PayloadAction<boolean>) => {
			state.isExplicit = action.payload;
		},
	},
});

export const { enableExplicitMode } = userPreferensesSlice.actions;
