
import { createSlice } from "@reduxjs/toolkit";

const favouriteInitialState = {
    favourites: [],
};

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: favouriteInitialState,
    reducers: {
        addFavourite: (state, action) => {
            const camperId = action.payload;
            if (!state.favourites.includes(camperId)) {
                state.favourites.push(camperId);
            }
        },
        removeFavourite: (state, action) => {
            const camperId = action.payload;
            state.favourites = state.favourites.filter((id) => id !== camperId);
        }
    }
})

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;