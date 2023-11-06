import { useContext, useState } from "react";
import { TUserChat, TUserJWT } from "../../../../types/user.types";
import { InboxSingleRowPrivate } from "./inboxSingleRowPrivate";
import "../../styles/inboxList.css"
import { ChatContext } from "../../../context/chatContex";
import { TRoom } from "../../../../types/room.type";

interface Props {
    chats: TUserChat[],
    user: TUserJWT,
}

export const InboxTablePrivate = (props: Props) => {
    const [list, setList] = useState<TUserChat[]>(props.chats)
    
    return <>
    
        <div className="inboxList">
            {
                [...list].map(chat => <InboxSingleRowPrivate 
                    user = {props.user} 
                    chat={chat} 
                    key={chat.user_id}
                    />)
            }
        </div>
    
    </>
}