import { ProfileImage } from "../../../profile-img"

export const TopSection = () => {
    return (
        <div className="border-stone-600 pb-4">
            <div className="flex gap-2">
                <ProfileImage content="BG" />
                <div className="flex flex-col justify-center">
                    <p className="text-xs">Broadcast group</p>
                    <p className="text-[0.6rem]">online</p>
                </div>
            </div>
        </div>
    )
}