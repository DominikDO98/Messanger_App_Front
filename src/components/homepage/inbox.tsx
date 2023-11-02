import { inboxType } from "./homepage"
import { InboxGroup } from "./inboxGroup"
import { InboxPrivate } from "./inboxPrivate"

type Props = {
    inboxState: inboxType
}

export const Inbox = (props: Props) => {
    
    if (props.inboxState === 'private') {
        return <InboxPrivate/>
    }
    
    if (props.inboxState === "group") {
        return <InboxGroup/>
    }

    if (!props.inboxState) {
        return null
    }
}