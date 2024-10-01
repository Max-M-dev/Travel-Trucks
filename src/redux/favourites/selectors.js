
import { createSelector } from '@reduxjs/toolkit';

export const selectFavoritesState = (state) => state.favourite;

export const selectFavoriteCampers = createSelector(
    selectFavoritesState,
    (favoritesState) => favoritesState.favourites
);

export const isCamperFavorite = (camperId) => createSelector(
    selectFavoritesState,
    (favoritesState) => favoritesState.favourite.includes(camperId)
);