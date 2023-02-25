import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { darkModeReducer} from "./slice/darkModeSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['darkModeState']
}

const rootReducer = combineReducers({
    darkModeState: darkModeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store;