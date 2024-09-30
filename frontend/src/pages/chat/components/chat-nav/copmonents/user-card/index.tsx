import { ProfileImage } from "@/pages/chat/components/profile-img"
import { useSelector } from "react-redux"

export const UserCard = ()=>{
    const current_usr = useSelector((state:any)=>state.auth.value.current_user)

    let initials = `${current_usr.firstname[0]}${current_usr.lastname[0]}`
    return(
        <div className="flex items-center gap-2">
            <div>
                <ProfileImage content={initials} />
            </div>
            <div>
                <p className="font-semibold text-[0.8rem]">{current_usr.firstname} {current_usr.lastname} </p>
                <p className="text-xs font-light">{current_usr.username}</p>
            </div>
        </div>
    )
}