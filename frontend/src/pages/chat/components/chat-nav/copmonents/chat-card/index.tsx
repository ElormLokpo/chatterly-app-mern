import { ProfileImage } from "@/pages/chat/components/profile-img"
import { BiCheckDouble } from "react-icons/bi";

export const ChatCard = () => {
    return (
        <div className="flex mb-7 justify-between hover:bg-stone-800 hover:p-1.5 hover:cursor-pointer transition-all rounded">
            <div className="flex items-center gap-2">
                <div>
                    <ProfileImage content="BG" />
                </div>
                <div>
                    <p className="font-semibold text-[0.8rem]">Broadcast Group </p>
                    <p className="text-xs font-light">This is a default broadcast group</p>
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <p className="text-[0.6rem]">9:15pm</p>
                <p><BiCheckDouble /></p>
            </div>
        </div>

    )
}