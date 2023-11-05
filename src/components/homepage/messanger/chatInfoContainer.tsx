interface Props {
    chatName: string;
}


export const ChatInfoContainer = (props: Props) => {
return <>
    <div className="chatName"><strong>{props.chatName}</strong></div>
</>
}