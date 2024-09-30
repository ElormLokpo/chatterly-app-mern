import { IAuthReduxState } from "@/services/api-types/auth.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:IAuthReduxState = {
    value:{
        current_user: undefined,
        token:undefined
    }
}

export const AuthSlice = createSlice({
    name:"AuthSlice",
    initialState,
    reducers:{
        storeCurrentUser : (state, action:PayloadAction)=>{
            state.value.current_user = action.payload
        },
        storeToken : (state, action:PayloadAction)=>{
            state.value.token = action.payload
        },
        logoutUser:(state, _action)=>{
            state.value.current_user = undefined
        }
    }
})


export const {storeCurrentUser, storeToken,logoutUser} = AuthSlice.actions;
export default AuthSlice.reducer;