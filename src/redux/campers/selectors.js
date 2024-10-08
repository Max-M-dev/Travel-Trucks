import { selectNameFilter } from "../filters/selectors";
import { selectLocationFilter } from '../filters/selectors';
import { selectFormFilter } from "../filters/selectors";
import { selectACFilter } from "../filters/selectors";
import { selectTransmissionFilter } from "../filters/selectors";
import { selectKitchenFilter } from "../filters/selectors";
import { selectTVFilter } from "../filters/selectors";
import { selectBathroomFilter } from "../filters/selectors";

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

        const FormEnum = {
            panelTruck: 'van',
            fullyIntegrated: 'fully integrated',
            alcove: 'alcove',

        }

        return campers.filter(camper => {
            const matchesName = typeof camper.name === 'string' && camper.name.toLowerCase().includes(nameFilter.toLowerCase());
            const matchesLocation = typeof camper.location === 'string' && camper.location.toLowerCase().includes(locationFilter.toLowerCase());
            const matchesForm = Object.values(FormEnum).includes(camper.form) && camper.form.includes(formFilter.toLowerCase().trim());
            const matchesAC = typeof camper.AC === "boolean" ? camper.AC === acFilter : true;
            const matchesTransmission = typeof camper.transmission === 'string' && camper.transmission.toLowerCase().includes(transmissionFilter.toLowerCase());
            const matchesKitchen = typeof camper.kitchen === "boolean" ? camper.kitchen === kitchenFilter : true;
            const matchesTV = typeof camper.TV === "boolean" ? camper.TV === tvFilter : true;
            const matchesBathroom = typeof camper.bathroom === "boolean" ? camper.bathroom === bathroomFilter : true;

            return matchesName || matchesLocation || matchesForm || matchesAC || matchesTransmission || matchesKitchen || matchesTV || matchesBathroom;
        });
    }
);