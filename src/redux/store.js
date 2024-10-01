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
import { favouritesReducer } from "./favourites/slice";
import { filtersReducer } from "./filters/slice";

const persistConfig = {
    key: 'root',
    storage,
};


export const store = configureStore({
    reducer: {
        vehicles: campersReducer,
        favourite: persistReducer(persistConfig, favouritesReducer),
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