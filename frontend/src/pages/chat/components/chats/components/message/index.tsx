import { ProfileImage } from "../../../profile-img"


export const Message = ({message, time, name, initials}:{message:string, time:string, name:string, initials:string}) => {
    let receive_style = "bg-gradient-to-r p-2 rounded hover:from-emearld-600 hover:to-emerald-700 text-white from-emerald-500 to-emerald-600 items-center bg-emerald-500 hover:bg-emerald-600 text-xs max-w-[24rem] leading-6"
    return (
        <div className="flex gap-2 mb-2">
            <ProfileImage content={initials} />
            <div>
                <div className="flex items-center mb-1 gap-2">
                    <p className="text-[0.7rem]">{name}</p>
                    <p className="text-[0.6rem]">{time}</p>
                </div>

                <div className={receive_style}>
                    <p className="">
                      {message}
                    </p>
                </div>
            </div>


        </div>
    )
}