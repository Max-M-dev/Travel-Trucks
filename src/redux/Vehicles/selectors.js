import { selectNameFilter } from "../filters/selectors";
import { selectLocationFilter } from '../filters/selectors';
import { selectFormFilter } from "../filters/selectors";
import { selectACFilter } from "../filters/selectors";
import { selectTransmissionFilter } from "../filters/selectors";
import { selectKitchenFilter } from "../filters/selectors";
import { selectTVFilter } from "../filters/selectors";
import { selectBathroomFilter } from "../filters/selectors";

import { createSelector } from "@reduxjs/toolkit";


export const selectCampers = state => state.campers.items;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;

export const selectFilteredContacts = createSelector(
    [selectCampers, selectNameFilter, selectLocationFilter, selectFormFilter, selectACFilter, selectTransmissionFilter, selectKitchenFilter, selectTVFilter, selectBathroomFilter], (campers, filter) => {
        if (!Array.isArray(campers)) {
            return [];
        }
        return campers.filter(camper =>
            (typeof camper.name === 'string' &&
                camper.name.toLowerCase().includes(filter.toLowerCase())) ||
            (typeof camper.location === "string" &&
                camper.location.includes(filter.toLowerCase())) &&
            (typeof camper.form === "string" &&
                camper.form.includes(filter.toLowerCase())) &&
            (typeof camper.ac === "boolean" &&
                camper.ac.includes(filter)) &&
            (typeof camper.transmission === "string" &&
                camper.transmission.includes(filter.toLowerCase())) &&
            (typeof camper.kitchen === "boolean" &&
                camper.kitchen.includes(filter)) &&
            (typeof camper.tv === "boolean" &&
                camper.tv.includes(filter)) &&
            (typeof camper.bathroom === "boolean" &&
                camper.bathroom.includes(filter))
        );
    }
);