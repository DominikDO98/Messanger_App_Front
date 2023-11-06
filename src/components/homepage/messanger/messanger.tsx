import { useContext, useEffect, useState } from "react"
import { TMessage } from "../../../../types/messege.type"
import { LoginContext } from "../../../context/authcontext"
import { LoadingSpinner } from "../../common/LoadingSpinner";
import { ChatInfoContainer } from "./chatInfoContainer";
import { MessagesContainer } from "./messagesContainer";
import { TUserJWT } from "../../../../types/user.types";
import { ChatContext } from "../../../context/chatContex";
import { MessageInput } from "./messageInput";

interface Props {
    loggedUser: TUserJWT,
}

export const Messanger = (props: Props) => {
    const {token} = useContext(LoginContext);
    const {chatWindow} = useContext(ChatContext);
    const [loading, setLoading] = useState<boolean>(true)
    const [messages, setMessages] = useState<TMessage[]>([]);

    const socket = new WebSocket(`ws://localhost:3000/ws/${chatWindow.chat.chat_id}`);


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
        }
            
        })(); 
    }, [chatWindow]);


    if (loading) {
        return <div><LoadingSpinner/></div>
    }

    console.log("Messager", messages);
    

    return <>
    <div className="messanger">
    <ChatInfoContainer/>
    <MessagesContainer messages={messages} loggedUser={props.loggedUser}/>
    <MessageInput/>
    </div>
    </>

}