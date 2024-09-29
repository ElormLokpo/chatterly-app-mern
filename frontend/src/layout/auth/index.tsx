import authImg from "@/assets/auth.jpg"
import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
    return (
        <div className="grid h-screen grid-cols-2 bg-black text-stone-300">
            <div className="rounded-l rounded-lg flex items-center justify-center">
                <Outlet />
            </div>
            <div className="rounded-lg rounded-r p-[12rem]" style={{ backgroundImage: `url(${authImg})`, backgroundSize: "cover" }}>


            </div>
        </div>
    )
}