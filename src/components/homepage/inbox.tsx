import { TUserJWT } from "../../../types/user.types"
import { inboxType } from "./homepage"
import { InboxGroup } from "./inboxGroup/inboxGroup"
import { InboxPrivate } from "./inboxPrivate/inboxPrivate"

type Props = {
    inboxState: inboxType,
    user: TUserJWT,
}

export const Inbox = (props: Props) => {
    
    if (props.inboxState === 'private') {
        return <div className="container"><InboxPrivate user = {props.user}/></div>
    }
    
    if (props.inboxState === "group") {
        return <div className="container"><InboxGroup user = {props.user}/></div>
    }

    if (!props.inboxState) {
        return null
    }
}