import { useContext } from "react";
import { TRoomChat } from "../../../../types/room.type"
import { TUserJWT } from "../../../../types/user.types"
import { ChatContext } from "../../../context/chatContex";
import '../../styles/inboxSingleRow.css'

interface Props {
    chat: TRoomChat,
    user: TUserJWT,
}

export const InboxSingleRowGroup = (props: Props) => {
    const {setChatWindow} = useContext(ChatContext);

   const openChat = () => {
    setChatWindow({
        chat: {
            chat_id: props.chat.room,
            chat_name: props.chat.room_name ? props.chat.room_name : '--Brak nazwy--',
            other_chat_member_id: '',
        },
        isOpen: true,
    })
   };
    return (
        <div className="oneInboxEntry" onClick={openChat}>
            <div className="username"><strong>{props.chat.room_name ? props.chat.room_name : '--Brak nazwy--'}</strong></div>
            <div className='last_message'>{props.chat.message_text}</div>
        </div>
    )

}