
import { createSlice } from "@reduxjs/toolkit";

const favouriteInitialState = {
    favourites: [],
};

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: favouriteInitialState,
    reducers: {
        toggleFavourite: (state, action) => {
            const camperId = action.payload;

            if (state.favourites[camperId]) {
                delete state.favourites[camperId];
            } else {
                state.favourites[camperId] = true;
            }
        },
    }
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;