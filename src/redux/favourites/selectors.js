
import { createSelector } from '@reduxjs/toolkit';

export const selectFavoritesState = (state) => state.favorites;

export const selectFavoriteCampers = createSelector(
    selectFavoritesState,
    (favoritesState) => favoritesState.favorites
);

export const isCamperFavorite = (camperId) => createSelector(
    selectFavoritesState,
    (favoritesState) => favoritesState.favorites.includes(camperId)
);