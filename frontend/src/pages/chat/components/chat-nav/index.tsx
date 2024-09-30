import { ChatCard } from "./copmonents/chat-card"
import { UserCard } from "./copmonents/user-card"
import { PiSmileyMeltingFill } from "react-icons/pi";

export const ChatNav = () => {
    return (
        <div className="p-3">
            <div className="mb-4 flex gap-1 items-center text-emerald-400">
                <PiSmileyMeltingFill />
                <p className="font-semibold">Chatterly</p>
            </div>


            <div className="mb-10">
                <p className="text-xs mb-4">Your Info</p>
                <UserCard />
            </div>

            <div>
                <p className="text-xs mb-4">All messages</p>

                <div>
                    {
                         <ChatCard  />
                    }

                </div>
            </div>
        </div>
    )
}