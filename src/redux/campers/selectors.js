import { selectEquipment, selectNameFilter } from '../filters/selectors';
import { selectLocationFilter } from '../filters/selectors';
import { selectFormFilter } from '../filters/selectors';
// import { selectACFilter } from "../filters/selectors";
// import { selectTransmissionFilter } from "../filters/selectors";
// import { selectKitchenFilter } from "../filters/selectors";
// import { selectTVFilter } from "../filters/selectors";
// import { selectBathroomFilter } from "../filters/selectors";

import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.vehicles.items;
export const selectCampersServerTotalItems = state =>
  state.vehicles.serverTotalItems;
export const selectCamperById = (state, id) => {
  return state.vehicles.items.find(item => String(item.id) === String(id));
};

export const selectError = state => state.vehicles.error;

export const selectFilteredCampers = createSelector(
  [
    selectCampers,
    selectNameFilter,
    selectLocationFilter,
    selectFormFilter,
    selectEquipment,
  ],
  campers => {
    if (!Array.isArray(campers)) {
      return [];
    }

    return campers;
  }
);
