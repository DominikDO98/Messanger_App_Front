import { useState } from "react";
import { TUserChat, TUserJWT } from "../../../../types/user.types";
import { InboxSingleRowPrivate } from "./inboxSingleRowPrivate";

interface Props {
    chats: TUserChat[],
    user: TUserJWT,
}

export const InboxTablePrivate = (props: Props) => {
    const [list, setList] = useState<TUserChat[]>(props.chats)
    
    return <>
    
        <div className="inboxList">
            {
                [...list].map(chat => <InboxSingleRowPrivate user = {props.user} chat={chat}/>)
            }
        </div>
    
    </>
}