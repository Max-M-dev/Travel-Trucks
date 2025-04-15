import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  name: '',
  location: '',
  form: '',
  transmission: '',
  equipment: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    changeFilter(state, action) {
      const { filter, value } = action.payload;
      state[filter] = value;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
