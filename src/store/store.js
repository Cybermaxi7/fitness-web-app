import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"
import exercisesReducer from "../store/exercisesSlice"


const persistConfig = {
    key: "root",
    storage,

}
const persistedReducer = persistReducer(persistConfig, exercisesReducer);
export const store = configureStore({
    reducer: {
        data: persistedReducer
    }
})
export const persistor = persistStore(store);