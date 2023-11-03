import { TRoomChat } from "../../../../types/room.type"
import { TUserChat, TUserJWT } from "../../../../types/user.types"

interface Props {
    chat: TRoomChat,
    user: TUserJWT,
}

export const InboxSingleRowGroup = (props: Props) => {

    return (
        <div>
            <div className="username"><strong>{props.chat.room_name}</strong></div>
            <div className='last_message'>{props.chat.message_text}</div>
        </div>
    )

}