import { useContext } from "react";
import { ChatContext } from "../../../context/chatContex";


export const ChatInfoContainer = () => {
    const {chatWindow} = useContext(ChatContext);
        
    return <>
        <div className="chatName"><strong>{chatWindow.chat.chat_name}</strong></div>
    </>
}