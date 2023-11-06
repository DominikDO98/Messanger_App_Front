import { createContext } from "react";
import { chatWindowTypes } from "../components/homepage/homepage";

export const ChatContext = createContext({
    chatWindow: {
        chat: {
            chat_id: '',
            chat_name: '',
            other_chat_member_id: '',
        },
    isOpen: false,
},
    setChatWindow: (ch: chatWindowTypes) => {},
});