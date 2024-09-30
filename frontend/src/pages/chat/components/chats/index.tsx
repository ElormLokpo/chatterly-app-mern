import { useEffect, useState } from "react"
import { MessageContainer } from "./components/message-container"
import { MessageInput } from "./components/message-input"
import { TopSection } from "./components/top-section"
import { io } from "socket.io-client"
import { format } from "date-fns";
import { useSelector } from "react-redux"

let socket = io("http://localhost:8080")

export const Chats = () => {
    const [myMessage, setMyMessage] = useState<any>();
    const [room, setRoom] = useState("broadcast_room");
    const [receivedMessage, setReceivedMessage] = useState();
    const current_usr = useSelector((state:any)=>state.auth.value.current_user)
   

    const hanldeMessage = (message: string) => {
        
        const now = new Date();
        let time = format(now, 'h:mm a');
        
        let messageObject = {
            time, 
            message, 
            room,
            name: current_usr.firstname + " " + current_usr.lastname,
            initials: `${current_usr.firstname[0]}${current_usr.lastname[0]}`
        }

        setMyMessage(messageObject)
        socket.emit("send", messageObject)
    }


    useEffect(() => {
        socket.emit("join_room", room)
    }, [])

    useEffect(() => {
        socket.on("receive", (data) => setReceivedMessage(data))
    }, [socket])

    return (
        <div className="p-5 h-full">
            <TopSection />

            <div className="h-[43rem]">
                <MessageContainer receivedMessage = {receivedMessage} myMessage={myMessage} />
            </div>

            <MessageInput setMessageHandler={hanldeMessage} />
        </div>
    )
}