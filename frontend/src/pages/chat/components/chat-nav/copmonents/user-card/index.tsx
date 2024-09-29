import { ProfileImage } from "@/pages/chat/components/profile-img"

export const UserCard = ()=>{
    return(
        <div className="flex items-center gap-2">
            <div>
                <ProfileImage />
            </div>
            <div>
                <p className="font-semibold text-[0.8rem]">Josh Flinn </p>
                <p className="text-xs font-light">flinJ@sh</p>
            </div>
        </div>
    )
}