export type TRoom = {
    room: string
    room_name: string,
    is_private: boolean,
}

export type TRoomChat = {
    room: string;
    room_name: string | null;
    is_private: boolean;
    message_text: string;
    created_at: string;
}