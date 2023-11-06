import { TUserChat, TUserJWT } from "../../../../types/user.types";
import { ChatContext } from "../../../context/chatContex";
import { useContext } from 'react';
import '../../styles/inboxSingleRow.css';

interface Props {
    chat: TUserChat,
    user: TUserJWT,
}

export const InboxSingleRowPrivate = (props: Props) => {

   const {setChatWindow} = useContext(ChatContext);

   const openChat = () => {
    setChatWindow({
        chat: {
            chat_id: props.chat.room,
            chat_name: props.chat.username,
            other_chat_member_id: props.chat.user_id,
        },
        isOpen: true,
    })
   };

    return (
        <div className="oneInboxEntry" onClick={openChat}>
            <div className="username"><strong>{props.chat.username}</strong></div>
            <div className='last_message'>{props.chat.message_text}</div>
        </div>
    )

}