import { createContext } from "react";
import { chatWindowTypes } from "../components/homepage/homepage";

export const ChatContext = createContext({
    chatWindow: {
        room: {
            room: '',
            room_name: '',
            is_private: false,
        },
        isOpen: false,
    },
    setChatWindow: (ch: chatWindowTypes) => {},
});