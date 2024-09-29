import { IProps } from "./types";

export const Button = ({ content, handler, style_type, icon, isLoading, loading_text }: IProps) => {
    let btn_style;
    let def_style_sm = "text-xs border border-stone-700 flex gap-1 items-center bg-stone-800 hover:bg-stone-600 text-white py-1.5 px-3 rounded"
    let auth_style = "text-xs w-full flex justify-center items-center bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 from-cyan-500 to-blue-500 flex gap-1 items-center bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 px-3 rounded"
   
    switch (style_type) {
        case "outline-sm":
            btn_style = "text-xs flex border-gray-900 hover:bg-gray-50 gap-1 items-center text-gray-900 border border-2 py-1.5 px-3 rounded";
            break;
        case "auth":
            btn_style = auth_style
            break;
        default:
            btn_style = def_style_sm;
    }
    return <button className={btn_style} onClick={handler}>{icon || isLoading == false && icon}{ isLoading ? loading_text : content}</button>
}


