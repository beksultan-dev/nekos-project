import { Rating } from "@/store/models/random-char-models";
import { UserModel } from "@/store/models/user-model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
	globalAgeRating: Rating;
	currentUser: UserModel | undefined;
}

const initialState: InitialState = {
	globalAgeRating: (localStorage.getItem("age_rating") as Rating) || Rating.Safe,
	currentUser: JSON.parse(localStorage.getItem("auth") as string) || undefined,
};

export const userPreferensesSlice = createSlice({
	name: "userPreferenses",
	initialState,
	reducers: {
		setGlobalAgeRating: (state, action: PayloadAction<Rating>) => {
			state.globalAgeRating = action.payload;
		},
		changeCurrentUser: (state, action: PayloadAction<UserModel | undefined>) => {
			state.currentUser = action.payload;
		},
	},
});

export const { setGlobalAgeRating, changeCurrentUser } = userPreferensesSlice.actions;
