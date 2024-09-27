
import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
    name: '',
    location: '',
    form: '',
    ac: '',
    transmission: '',
    kitchen: '',
    tv: '',
    bathroom: '',
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
            state.location = action.payload;
            state.form = action.payload;
            state.ac = action.payload;
            state.transmission = action.payload;
            state.kitchen = action.payload;
            state.tv = action.payload;
            state.bathroom = action.payload;
        },
    },
});


export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;