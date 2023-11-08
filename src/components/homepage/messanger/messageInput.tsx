import { ChangeEvent, FormEvent, useState } from "react";
import { TUserJWT } from "../../../../types/user.types";

interface Props {
    loggedUser: TUserJWT,
    onSend: Function,
}

export const MessageInput = (props: Props) => {
    const [message, setMessage] = useState<string>('')

    const handleChange = (e: ChangeEvent, value: string) => {
        e.preventDefault();
        setMessage(value);
    }

    const sendMessage = (e: FormEvent, text: string) =>{
        e.preventDefault()
        props.onSend(text)
    }

    return <>
    <form onSubmit={e => sendMessage(e, message)}>
    <input type="text" value={message} onChange={e => handleChange(e, e.target.value)}/>
    <button type="submit">➤</button>
    </form>
    </>
}