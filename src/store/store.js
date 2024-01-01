import {combineReducers, configureStore} from "@reduxjs/toolkit"
import themeReducer from "./slices/themeSlice"
import cartReducer from  "./slices/cartSlice"
import userReducer from  "./slices/userSlice"

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'reactapp',
    storage,
    blacklist:["theme"],
}
const rootReducer = combineReducers({
    // data : reducer
    theme: themeReducer,
    cart: cartReducer,
    user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

const appStore = configureStore({
    reducer: persistedReducer,
});

export default () => {
    let store = appStore;
    let persistor = persistStore(store);
    return { store, persistor };
};