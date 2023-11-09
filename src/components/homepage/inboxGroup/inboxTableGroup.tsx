import { useState } from "react";
import { TUserJWT } from "../../../../types/user.types";
import { TRoomChat } from "../../../../types/room.type";
import { InboxSingleRowGroup } from "./inboxSingleRowGroup";
import "../../styles/inboxList.css"

interface Props {
    chats: TRoomChat[],
    user: TUserJWT,
}

export const InboxTableGroup = (props: Props) => {
    const [list, setList] = useState<TRoomChat[]>(props.chats)
    
    return <>
    
        <div className="inboxList">
            {
                [...list].map(chat => <InboxSingleRowGroup user = {props.user} chat={chat} key={chat.room}/>)
            }
        </div>
    
    </>
}