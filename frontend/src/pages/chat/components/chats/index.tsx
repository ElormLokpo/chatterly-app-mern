import { MessageContainer } from "./components/message-container"
import { MessageInput } from "./components/message-input"
import { TopSection } from "./components/top-section"


export const Chats  = ()=>{
    return(
        <div className="p-5 h-full">
            <TopSection />

            <div className="h-[43rem]">
                <MessageContainer />
            </div>

            <MessageInput />
        </div>
    )
}