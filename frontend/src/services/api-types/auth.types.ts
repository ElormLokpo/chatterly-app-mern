export interface IAuthRequest{
    id?:string, 
    firstname?:string, 
    lastname?:string, 
    description?:string,
    phone?:string,
    username?:string,
    password?:string
}


export interface IAuthReduxState{
    value:{
        current_user: any,
        token:any
    }
}