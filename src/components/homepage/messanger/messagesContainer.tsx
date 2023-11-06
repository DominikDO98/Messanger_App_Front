
import { TMessage } from "../../../../types/messege.type"
import { MessageOne } from "./messageOne"
import { TUserJWT } from "../../../../types/user.types";

interface Props {
    messages: TMessage[];
    loggedUser: TUserJWT;
}

export const MessagesContainer = (props: Props) => {    
    
    return <>
    <div className="container">
        {
            [...props.messages]
            .sort((a, b) => b.created_at.localeCompare(a.created_at))
            .map(message => <MessageOne fromUser_id={message.from_user_id} key = {message.message_id} text = {message.message_text} loggedUser_id = {props.loggedUser.user_id}/>)
        }
    </div>
    </>
}