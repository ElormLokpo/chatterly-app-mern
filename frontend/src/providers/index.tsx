import { router } from "@/routes"
import { RouterProvider } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux";
import { persistedStore, store } from "@/services/redux/store";
import { PersistGate } from 'redux-persist/integration/react';


export const RootProvider = () => {
    return (
        <div>
            <ReduxProvider store={store}>
                <PersistGate persistor={persistedStore}>
                    <RouterProvider router={router} />
                </PersistGate>
            </ReduxProvider>
        </div>
    )
}