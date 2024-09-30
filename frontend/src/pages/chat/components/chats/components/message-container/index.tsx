import { Message } from "../message";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const MessageContainer = ({ receivedMessage }: { receivedMessage: any }) => {
    const current_usr = useSelector((state: any) => state.auth.value.current_user)
    let [messagesSet, setMessagesSet] = useState<Set<any>>(new Set())
    useEffect(() => {
        console.log(receivedMessage)

        setMessagesSet((prev: any) => {
            let tempSet = new Set(prev)
            tempSet.add(receivedMessage)
            return tempSet
        })
    }, [receivedMessage])

    return (
        <div className="h-full flex flex-col justify-end">

            {
                //messagesArr.map((item, index)=><Message name={item.name} time={item.time} message={item.message} initials={item.initials}/>)
                Array.from(messagesSet).map((item, index) => {
                    if (item) {
                        console.log("from inner", item)
                        return <Message name={item.name} time={item.time} message={item.message} initials={item.initials}/>
                    }
                    return null
                })

            }

        </div>
    )
}