import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCampers,
  fetchCampersById,
  fetchCampersLoadMore,
} from './operations';

const campersInitialState = {
  items: [],
  serverTotalItems: null,
  loading: false,
  error: null,
  page: 1,
  limit: 5,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.serverTotalItems = action.payload.total;
      })
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected)
      /* ============= */
      .addCase(fetchCampersLoadMore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload.items];
        state.serverTotalItems = action.payload.total;
      })
      .addCase(fetchCampersLoadMore.pending, handlePending)
      .addCase(fetchCampersLoadMore.rejected, handleRejected)
      /* ============= */
      .addCase(fetchCampersById.pending, handlePending)
      .addCase(fetchCampersById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const camperIndex = state.items.findIndex(
          item => item.id === action.payload.id
        );

        if (camperIndex !== -1) {
          state.items[camperIndex] = action.payload;
        } else {
          state.items.push(action.payload);
        }
      })
      .addCase(fetchCampersById.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
