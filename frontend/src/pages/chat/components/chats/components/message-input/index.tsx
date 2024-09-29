import { FaRegSmile } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

export const MessageInput = ()=>{
    return(
        <div className="message-input flex items-center gap-1 text-xs bg-stone-700 w-full rounded-full p-3">
            <FaRegSmile />
            <input  className="w-full bg-stone-700 outline-none"/>
            <button className=""><AiOutlineSend /></button>
         </div>
    )
}