interface Props {
    loggedUser_id: string;
    text: string;
    fromUser_id: string;
}

export const MessageOne = (props: Props) => {
    
    return <>
        <div className = 'messageBox' id={props.fromUser_id === props.loggedUser_id ? 'send' : 'recived'}>{props.text}</div>
    </>
}