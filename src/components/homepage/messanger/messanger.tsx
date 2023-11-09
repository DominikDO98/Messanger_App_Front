import { useContext, useEffect, useRef, useState } from "react"
import { TMessage, TMessageCreation } from "../../../../types/messege.type"
import { LoginContext } from "../../../context/authcontext"
import { LoadingSpinner } from "../../common/LoadingSpinner";
import { ChatInfoContainer } from "./chatInfoContainer";
import { MessagesContainer } from "./messagesContainer";
import { TUserJWT } from "../../../../types/user.types";
import { ChatContext } from "../../../context/chatContex";
import { MessageInput } from "./messageInput";
import './messanger.css'

interface Props {
    loggedUser: TUserJWT,
}

export const Messanger = (props: Props) => {
    const {token} = useContext(LoginContext);
    const {chatWindow} = useContext(ChatContext);
    const [loading, setLoading] = useState<boolean>(true)
    const [messages, setMessages] = useState<TMessage[]>([]);
    const connection = useRef<WebSocket>(new WebSocket(`ws://localhost:3000/ws/${chatWindow.chat.chat_id}`))
   
    useEffect(() => {
        
        setLoading(true);
        (async() => {
            try {
                const res = await fetch(`http://localhost:3000/messanger/get_messages/${chatWindow.chat.chat_id}`, {
                    method: 'GET',
                    headers: {
                        'authorization': token,
                    },
                });
            const data = await res.json(); 
            setMessages(data)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }})() 
        
    }, [chatWindow]);
   

    useEffect(() => {
        
        connection.current.addEventListener("open", (event) => {
            console.log("Connection established");
            
          })

          connection.current.addEventListener('message', async (event) => {
            const data = await new Response(event.data).text()
                const message: TMessage = JSON.parse(data)
                setMessages(messages => [
                    ...messages,
                    message
                ]) 
        });


    }, [chatWindow])

    const submitMessage = (message: string) => {
        if (connection.current)
        try {
            const messageToSend: TMessageCreation = {
                message_text: message,
                from_user_id: props.loggedUser.user_id,
                to_room_id: chatWindow.chat.chat_id,
            }
            const data = JSON.stringify(messageToSend)
            connection.current.send(data)
        } catch (err) {
            console.log(err);
            
        }
    }

    if (loading) {
        return <div><LoadingSpinner/></div>
    }
    

    return <>
    <div className="messanger">
    <ChatInfoContainer/>
    <MessagesContainer messages={messages} loggedUser={props.loggedUser}/>
    <MessageInput loggedUser = {props.loggedUser} onSend = {submitMessage}/>
    </div>
    </>

}