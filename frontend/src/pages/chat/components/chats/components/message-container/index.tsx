import { Message } from "../message"

export const MessageContainer = ()=>{
    return(
        <div className="h-full flex flex-col justify-end">
            <Message />
            <Message />
            <Message />
            <Message />

        </div>
    )
}