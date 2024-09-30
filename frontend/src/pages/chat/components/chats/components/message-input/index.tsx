import { FaRegSmile } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";

export const MessageInput = ({ setMessageHandler }: { setMessageHandler: (message: string) => void }) => {
    const [message, setMessage] = useState<string>()

    const handleSetMessage = () => {
        setMessageHandler(message as string);
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSetMessage();
        }
      };

    return (
        <div className="message-input flex items-center gap-1 text-xs bg-stone-700 w-full rounded-full p-3">
            <FaRegSmile />
            <input onKeyDown={handleKeyDown} onChange={(e: any) => setMessage(e.target.value)} className="w-full bg-stone-700 outline-none" />
            <button className="" onClick={handleSetMessage}><AiOutlineSend /></button>
        </div>
    )
}