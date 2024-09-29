import { ReactElement } from "react";

export interface IProps {
    content: string,
    handler: () => void,
    style_type?: string,
    icon?: ReactElement,
    isLoading?:boolean, 
    loading_text?:string
}