import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/constants";
import { IAuthRequest } from "@/services/api-types/auth.types";
import { IResponse } from "@/services/api-types/response.types";
import { storeCurrentUser, storeToken } from "@/services/redux/reducers/auth";


export const AuthApi = createApi({
    reducerPath: "AuthApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<IResponse, IAuthRequest>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/auth/register",
                    method: "POST",
                    body: args
                })

                if (response.data) {
                    let { success, message, data } = response.data as IResponse;

                    if (success == true) {
                        dispatch(storeCurrentUser(data.response_data));
                        dispatch(storeToken(data.token))
                        
                    }
                    return { data: { success, message, data } }


                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        }),
        loginUser: builder.mutation<IResponse, IAuthRequest>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/auth/login",
                    method: "POST",
                    body: args
                })

                if (response.data) {
                    let { success, message, data } = response.data as IResponse;

                    if (success == true) {
                        dispatch(storeCurrentUser(data.response_data));
                        dispatch(storeToken(data.token))
                        
                    }
                    return { data: { success, message, data } }


                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        })
    })
}) 


export const {useLoginUserMutation, useRegisterUserMutation} = AuthApi;