import { useContext, useEffect, useState } from "react"
import { TMessage } from "../../../../types/messege.type"
import { LoginContext } from "../../../context/authcontext"
import { LoadingSpinner } from "../../common/LoadingSpinner";
import { ChatInfoContainer } from "./chatInfoContainer";
import { MessagesContainer } from "./messagesContainer";
import { TUserJWT } from "../../../../types/user.types";
import { TRoom } from "../../../../types/room.type";

interface Props {
    loggedUser: TUserJWT;
    room: TRoom;
    chatMember?: TUserJWT;
}

export const Messanger = (props: Props) => {
    const {token} = useContext(LoginContext);
    const [loading, setLoading] = useState<boolean>(true)
    const [messages, setMessages] = useState<TMessage[]>([]);

    const socket = new WebSocket(`ws://localhost:3000/ws/${props.room.room}`);


    useEffect(() => {
        
        (async() => {
            try {
                const res = await fetch(`http://localhost:3000/messanger/get_messages/${props.room.room}`, {
                    method: 'GET',
                    headers: {
                        'authorization': token,
                    },
                });
        
                console.log(res);
                
            const data = await res.json(); 
        console.log(data);
        
            setMessages(data)

        } catch (err) {
            console.log(err);

        } finally {
            setLoading(false);
        }
            
        })(); 
    }, []);


    if (loading) {
        return <div><LoadingSpinner/></div>
    }


    return <>
    <div className="messanger">
    <ChatInfoContainer chatName={props.chatMember?.username ? props.chatMember?.username : props.room.room_name}/>
    <MessagesContainer messages={messages} loggedUser={props.loggedUser}/>
    </div>
    </>

}