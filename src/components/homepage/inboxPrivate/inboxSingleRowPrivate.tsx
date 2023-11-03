import { TUserChat, TUserJWT } from "../../../../types/user.types"

interface Props {
    chat: TUserChat,
    user: TUserJWT,
}

export const InboxSingleRowPrivate = (props: Props) => {

    return (
        <div>
            <div className="username"><strong>{props.chat.username}</strong></div>
            <div className='last_message'>{props.chat.message_text}</div>
        </div>
    )

}