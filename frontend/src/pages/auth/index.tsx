import { Button } from "@/components/button"
import { Input, TextArea } from "@/components/input"
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"
import { SlideInTop } from "@/animations";
import { useLoginUserMutation, useRegisterUserMutation } from "@/services/api/auth";
import { IAuthRequest } from "@/services/api-types/auth.types";


export const LoginPage = () => {
    const [authData, setAuthData] = useState<any>()
    const navigate = useNavigate();
    const [LoginUser, {isLoading}] = useLoginUserMutation()

    const handleChange = (key: any, value: any) => {
        setAuthData((prev: any) => {
            return { ...prev, [key]: value }
        })
    }

    const handleSubmit = async () => {
        const response = await LoginUser(authData as IAuthRequest);

        if (response.data?.success == true) {
            toast.success(response.data?.message);

            navigate("/chat")
        } else {
            toast.error(response.data?.message)
        }


    }

    return (
        < >
            <Toaster />
            <m.div
                variants={SlideInTop}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-[20rem] text-stone-300 flex flex-col justify-center items-center">
                <div className="p-2 w-full">
                    <p className="font-semibold">Sign In</p>

                    <div className=" mb-1">
                        <Input name="username" inputChange={handleChange} label="Username:" />
                    </div>
                    <div className=" mb-2">
                        <Input name="password" inputChange={handleChange} label="Password:" type="Password" />
                    </div>
                    <div className="mb-4">
                        <p className="text-[0.6rem] underline">Forgot password?</p>
                    </div>

                    <div className="w-full mb-2">
                        <Button isLoading={isLoading} loading_text="Logging In..." style_type="auth" content="Login" handler={handleSubmit} />
                    </div>
                    <p className="mb-5 text-[0.7rem] flex items-center justify-center flex gap-1">
                        Dont have an account? <Link to="register" className="underline"> Create One</Link>
                    </p>

                    <div className="border border-stone-700 p-2 rounded mb-1">
                        <div className="text-xs flex gap-4 justify-center">
                            <p><span className="font-semibold">username: </span>userone</p>
                            <p> <span className="font-semibold">password: </span>12345678</p>
                        </div>
                    </div>

                    <div className="border border-stone-700 p-2 rounded">
                        <div className="text-xs flex gap-4 justify-center">
                            <p><span className="font-semibold">username: </span>usertwo</p>
                            <p> <span className="font-semibold">password: </span>12345678</p>
                        </div>
                    </div>

                </div>

            </m.div >
        </>
    )
}

export const RegisterPage = () => {
    const [authData, setAuthData] = useState<any>()
    const navigate = useNavigate();
    const [RegisterUser, {isLoading}] = useRegisterUserMutation()

    const handleChange = (key: any, value: any) => {
        setAuthData((prev: any) => {
            return { ...prev, [key]: value }
        })
    }

    const handleSubmit = async () => {

        const response = await RegisterUser(authData as IAuthRequest);

        if (response.data?.success == true) {
            toast.success(response.data?.message);

            navigate("/chat")
        } else {
            toast.error(response.data?.message)
        }


    }

    return (
        < >
            <Toaster />
            <m.div
                variants={SlideInTop}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-[25rem] text-stone-300 flex flex-col justify-center items-center">
                <div className="p-2 w-full">
                    <p className="font-semibold mb-4 text-xl">Create Account</p>

                    <p className="text-sm">Basic Information</p>


                    <div className=" mb-1 grid grid-cols-2 gap-2">
                        <Input name="firstname" inputChange={handleChange} label="Firstname:" />
                        <Input name="lastname" inputChange={handleChange} label="Lastname:" />

                    </div>

                    <div className=" mb-1">
                        <Input name="phone" inputChange={handleChange} label="Phone:" />

                    </div>

                    <div className="mb-6">
                        <TextArea name="description" inputChange={handleChange} label="Description:" />
                    </div>



                    <p className="text-sm">Account</p>

                    <div className=" mb-4 grid grid-cols-2 gap-2">
                        <Input name="username" inputChange={handleChange} label="Username:" />

                        <Input name="password" inputChange={handleChange} label="Password:" type="Password" />
                    </div>


                    
                    <div className="w-full mb-2">
                        <Button isLoading={isLoading} loading_text="Creating Account..." style_type="auth" content="Register" handler={handleSubmit} />
                    </div>
                    <p className="mb-5 text-[0.7rem] flex items-center justify-center flex gap-1">
                        Already have an account? <Link to="/" className="underline"> Login</Link>
                    </p>

                </div>

            </m.div >
        </>
    )
}