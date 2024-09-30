import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { campersReducer } from "./campers/slice";
import { favouritesReducer } from "./favourite/slice";
import { filtersReducer } from "./filters/slice";

const vehiclesPersistConfig = {
    key: 'vehicles',
    storage,
    // whitelist: ['accessToken'],
};


export const store = configureStore({
    reducer: {
        vehicles: persistReducer(vehiclesPersistConfig, campersReducer),
        favourite: favouritesReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});



export const persistor = persistStore(store);