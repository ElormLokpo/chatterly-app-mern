import { AuthApi } from "@/services/api/auth"
import AuthReducer from "./auth"
import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',         
    storage,    
    whitelist: ['auth']         
  };

export const rootReducer = combineReducers({
    auth: AuthReducer,
    [AuthApi.reducerPath] : AuthApi.reducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)