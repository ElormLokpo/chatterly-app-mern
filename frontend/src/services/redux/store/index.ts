import {configureStore} from "@reduxjs/toolkit";
import { persistedReducer } from "../reducers";
import { AuthApi } from "@/services/api/auth";
import { persistStore  } from "redux-persist";

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: {
        
          ignoredActions: [
            'persist/PERSIST',
            'persist/REHYDRATE',
            'persist/FLUSH',
            'persist/PAUSE',
            'persist/PURGE',
            'persist/REGISTER'
          ],
        },
      }).concat(AuthApi.middleware)
})

export const persistedStore = persistStore(store)