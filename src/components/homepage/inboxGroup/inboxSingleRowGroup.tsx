import { TRoomChat } from "../../../../types/room.type"
import { TUserJWT } from "../../../../types/user.types"
import '../../styles/inboxSingleRow.css'

interface Props {
    chat: TRoomChat,
    user: TUserJWT,
}

export const InboxSingleRowGroup = (props: Props) => {

    return (
        <div className="oneInboxEntry">
            <div className="username"><strong>{props.chat.room_name ? props.chat.room_name : '--Brak nazwy--'}</strong></div>
            <div className='last_message'>{props.chat.message_text}</div>
        </div>
    )

}