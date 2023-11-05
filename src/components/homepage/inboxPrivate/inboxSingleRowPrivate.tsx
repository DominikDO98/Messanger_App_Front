import { TUserChat, TUserJWT } from "../../../../types/user.types"
import '../../styles/inboxSingleRow.css'

interface Props {
    chat: TUserChat,
    user: TUserJWT,
}

export const InboxSingleRowPrivate = (props: Props) => {

    return (
        <div className="oneInboxEntry">
            <div className="username"><strong>{props.chat.username}</strong></div>
            <div className='last_message'>{props.chat.message_text}</div>
        </div>
    )

}