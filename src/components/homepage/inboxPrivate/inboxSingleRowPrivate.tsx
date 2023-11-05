import { TUserChat, TUserJWT } from "../../../../types/user.types"
import '../../styles/inboxSingleRow.css'

interface Props {
    chat: TUserChat,
    user: TUserJWT,
    onOpenChat: Function,
}

export const InboxSingleRowPrivate = (props: Props) => {

    const openRoomChat = () => {
        props.onOpenChat(props.chat.room)
    }

    return (
        <div className="oneInboxEntry" onClick={openRoomChat}>
            <div className="username"><strong>{props.chat.username}</strong></div>
            <div className='last_message'>{props.chat.message_text}</div>
        </div>
    )

}