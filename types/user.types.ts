export type TUser = {
    user_id: string;
    username: string;
    password: string;
}

export type TUserJWT = Omit<TUser, 'password'>
export type TUserCreation = Omit<TUser, "user_id">

export type TUserChat = {
    user_id: string;
    username: string;
    room: string;
    message_text: string;
    created_at: string;
}