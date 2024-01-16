import { Rating } from "@/store/api/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
	globalAgeRating: Rating;
}

const initialState: InitialState = {
	globalAgeRating: (localStorage.getItem("age_rating") as Rating) || Rating.Safe,
};

export const userPreferensesSlice = createSlice({
	name: "userPreferenses",
	initialState,
	reducers: {
		setGlobalAgeRating: (state, action: PayloadAction<Rating>) => {
			state.globalAgeRating = action.payload;
		},
	},
});

export const { setGlobalAgeRating } = userPreferensesSlice.actions;
