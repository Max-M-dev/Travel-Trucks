import { selectNameFilter } from "../filter/selectors";
import { selectLocationFilter } from '../filter/selectors';
import { selectFormFilter } from "../filter/selectors";
import { selectACFilter } from "../filter/selectors";
import { selectTransmissionFilter } from "../filter/selectors";
import { selectKitchenFilter } from "../filter/selectors";
import { selectTVFilter } from "../filter/selectors";
import { selectBathroomFilter } from "../filter/selectors";

import { createSelector } from "@reduxjs/toolkit";


export const selectCampers = state => state.vehicles.items;
export const selectCamperById = (state, id) => {
    return state.vehicles.items.find(item => String(item.id) === String(id));
};
export const selectIsLoading = state => state.vehicles.isLoading;
export const selectError = state => state.vehicles.error;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectNameFilter, selectLocationFilter, selectFormFilter, selectACFilter, selectTransmissionFilter, selectKitchenFilter, selectTVFilter, selectBathroomFilter],
    (campers, nameFilter, locationFilter, formFilter, acFilter, transmissionFilter, kitchenFilter, tvFilter, bathroomFilter) => {
        if (!Array.isArray(campers)) {
            return [];
        }

        return campers.filter(camper => {
            const matchesName = typeof camper.name === 'string' && camper.name.toLowerCase().includes(nameFilter.toLowerCase());
            const matchesLocation = typeof camper.location === 'string' && camper.location.includes(locationFilter.toLowerCase());
            const matchesForm = typeof camper.form === 'string' && camper.form.includes(formFilter.toLowerCase());
            const matchesAC = typeof camper.AC === "boolean" ? camper.AC === acFilter : true;
            const matchesTransmission = typeof camper.transmission === 'string' && camper.transmission.includes(transmissionFilter.toLowerCase());
            const matchesKitchen = typeof camper.kitchen === "boolean" ? camper.kitchen === kitchenFilter : true;
            const matchesTV = typeof camper.TV === "boolean" ? camper.TV === tvFilter : true;
            const matchesBathroom = typeof camper.bathroom === "boolean" ? camper.bathroom === bathroomFilter : true;

            return matchesName || matchesLocation || matchesForm || matchesAC || matchesTransmission || matchesKitchen || matchesTV || matchesBathroom;
        });
    }
);