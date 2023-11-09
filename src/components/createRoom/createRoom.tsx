import { FormEvent, useContext, useState } from "react"
import { LoginContext } from "../../context/authcontext";
import { TypeOfRoom } from "../homepage/homepage";

interface Props {
    type: TypeOfRoom, 
}

export const CreateRoom = (props: Props) => {
    const {token} = useContext(LoginContext);
    const [username, setUsername] = useState<string>('');
    const [roomName, setRoomName] = useState<string | undefined>(undefined)
    
    const handleChange = (target: string, value: string) => {
        if (target === 'username'){
            setUsername(value)
        }
        if (target === 'roomName'){
            setRoomName(value)
        }
    }

    const submitForm = async (e: FormEvent) => {
        e.preventDefault();
        console.log(props.type);
        
        if (props.type === 'group') {
            console.log(props.type);
        try {
            console.log(props.type);
            await fetch(`http://localhost:3000/create/room/group`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                },
                body: JSON.stringify({
                    contact: {
                        name: username,
                        room: roomName,
                    }
                })
            });
        } catch (error) {
            console.log(error);
            
        }}
        if (props.type === 'private') {
            console.log(props.type);
            try {
                console.log(props.type);
                await fetch(`http://localhost:3000/create/room/private`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': token,
                    },
                    body: JSON.stringify({
                        contact: {
                            name: username,
                        }
                    })
                });
            } catch (error) {
                console.log(error);
                
            }}
    }



    if (props.type === 'group') {
        return <>
        <form onSubmit={e => submitForm(e)}>
            Nazwa użytkownika: &nbsp;
            <input type="text" value={username} onChange={e => handleChange('username', e.target.value)}></input> &nbsp;
            Nazwa pokoju: &nbsp;
            <input type="text" value={roomName} onChange={e => handleChange('roomName', e.target.value)}></input>
            <button type="submit">Stwórz pokój</button>
        </form>
        </>
    }

    if (props.type === 'private') {
        return <>
        <form onSubmit={submitForm}>
            Nazwa użytkownika: &nbsp;
            <input type="text" value={username} onChange={e => handleChange('username', e.target.value)}></input>
            <button type="submit">Stwórz pokój</button>
        </form>
        </>
    }

    if (!props.type) {
        return null
    }
}