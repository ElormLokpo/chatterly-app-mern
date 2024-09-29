import { AuthLayout } from "@/layout/auth";
import { LoginPage, RegisterPage } from "@/pages/auth";
import { ChatPage } from "@/pages/chat";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const all_routes: RouteObject[] = [
    {
        path:"",
        element: <AuthLayout />,
        children:[
            {
                path:"",
                element: <LoginPage />,
            },
            {
                path:"register",
                element:<RegisterPage />
            }
        ]
    },
    {
        path:"chat",
        element:<ChatPage />
    }
]


export const router = createBrowserRouter(all_routes);