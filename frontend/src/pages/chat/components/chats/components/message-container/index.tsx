import { Message } from "../message";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const MessageContainer = ({ receivedMessage, myMessage }: { receivedMessage: any, myMessage:any }) => {
    const current_usr = useSelector((state: any) => state.auth.value.current_user)
    let [recMessagesSet, setRecMessagesSet] = useState<Set<any>>(new Set())
    let [myMessagesSet, setMyMessagesSet] = useState<Set<any>>(new Set())
    let [allMessages, setAllMessages] = useState<Set<any>>(new Set())
    
    useEffect(() => {
        
        if(receivedMessage){
            setRecMessagesSet((prev: any) => {
                let tempSet = new Set(prev)
                tempSet.add(receivedMessage)
                return tempSet
            })
        }
       

        if(myMessage){
            setMyMessagesSet((prev: any) => {
                let tempSet = new Set(prev)
                tempSet.add(myMessage)
                return tempSet
            })
        }
       
        setAllMessages((prev) => {
            const tempSet = new Set(prev);
            recMessagesSet.forEach((msg) => tempSet.add(msg));
            myMessagesSet.forEach((msg) => tempSet.add(msg));
            return tempSet;
        });

    }, [receivedMessage])

    return (
        <div className="h-full flex flex-col justify-end">

            {
                //messagesArr.map((item, index)=><Message name={item.name} time={item.time} message={item.message} initials={item.initials}/>)
                Array.from(recMessagesSet).map((item, index) => {
                    if (item) {
                        
                        return <Message style_type="rec" key={index} name={item.name} time={item.time} message={item.message} initials={item.initials}/>
                    }
                    return null
                })

                

            }
            {
                   Array.from(myMessagesSet).map((item, index) => {
                    if (item) {
                        
                        return <Message style_type="" key={index} name={item.name} time={item.time} message={item.message} initials={item.initials}/>
                    }
                    return null
                })
            }

        </div>
    )
}