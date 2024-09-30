import { ChatNav } from "./components/chat-nav"
import { Chats } from "./components/chats"



export const ChatPage = () => {
    return (
        <div className="bg-black h-screen text-stone-300 grid grid-cols-12 gap-4 p-4">
            <div className="bg-stone-950 col-span-2 rounded-lg">
                <ChatNav />
            </div>
            <div className="bg-stone-900 col-span-10 rounded-lg">
                <Chats />
            </div>
           
        </div>
    )
}