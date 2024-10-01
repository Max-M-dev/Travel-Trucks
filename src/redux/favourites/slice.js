
import { createSlice } from "@reduxjs/toolkit";

const favouriteInitialState = {
    favourites: [],
};

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: favouriteInitialState,
    reducers: {
        // toggleFavourite: (state, action) => {
        //     const camperId = action.payload;

        //     if (state.favourites.includes(camperId)) {
        //         state.favourites = state.favourites.filter(id => id !== camperId);
        //     } else {
        //         state.favourites.push(camperId);
        //     }
        // },
        toggleFavourite: (state, action) => {
            const camperId = action.payload;

            if (state.favourites[camperId]) {
                // Якщо кемпер вже в улюблених, видалити його
                delete state.favourites[camperId];
            } else {
                // Додати кемпер до улюблених
                state.favourites[camperId] = true;
            }
        },
    }
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;