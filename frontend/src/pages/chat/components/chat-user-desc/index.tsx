import { ProfileImage } from "../profile-img"
import { GoDotFill } from "react-icons/go";

export const ChatUserDescription = () => {
    return (
        <div className="p-4">
            <div className="flex flex-col items-center mb-3">
                <div className="mb-2 flex justify-center items-center">
                    <ProfileImage />
                </div>
                <p className="font-semibold mb-2">John Kennedy Rumen</p>
                <div>
                    <p className="text-rose-500 border p-1 rounded border-rose-500 text-xs">Unfriend</p>
                </div>


            </div>

            <div>
                <div className="mb-4">
                    <p className="text-xs font-light border-stone-500 py-1.5 tracking-lg">DESCRIPTION</p>
                    <p className="text-xs leading-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                    </p>
                </div>

                <div className="mb-4">
                    <p className="text-xs font-light border-stone-500 py-1.5">PHONE</p>
                    <p className="text-xs leading-6">
                        05423424123.

                    </p>
                </div>

                <div>
                    <p className="text-xs font-light border-stone-500 py-1.5">USERNAME</p>
                    <p className="text-xs leading-6">
                        Jon.KenRem

                    </p>
                </div>
            </div>
        </div>
    )
}