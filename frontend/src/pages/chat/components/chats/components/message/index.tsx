import { ProfileImage } from "../../../profile-img"


export const Message = () => {
    return (
        <div className="flex gap-2 mb-2">
            <ProfileImage />
            <div>
                <div className="flex items-center mb-1 gap-2">
                    <p className="text-[0.7rem]">Jack Sparrow</p>
                    <p className="text-[0.6rem]">9:15pm</p>
                </div>

                <div className="bg-emerald-500 rounded text-stone-300 p-2">
                    <p className="text-xs w-[24rem] leading-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentiall
                    </p>
                </div>
            </div>


        </div>
    )
}