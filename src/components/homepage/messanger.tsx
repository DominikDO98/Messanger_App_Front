import { useContext, useEffect, useState } from "react"
import { TMessage } from "../../../types/messege.type"
import { LoginContext } from "../../context/authcontext"

interface Props {
    room_id: string;
}

export const Messanger = async (props: Props) => {
    const {token} = useContext(LoginContext);
    const [loading, setLoading] = useState<boolean>(true)
    const [messages, setMessages] = useState<TMessage[]>([]);

    const socket = new WebSocket(`ws://localhost:3000/ws/${props.room_id}`);


    useEffect(() => {
        
        (async() => {
            try {
                const res = await fetch(`http://localhost:3000/ws/${props.room_id}`, {
                    method: 'GET',
                    headers: {
                        'authorization': token,
                    }
                });
        
            const data = await res.json(); 
        
            setMessages(data)

        } catch (err) {
            console.log(err);

        } finally {
            setLoading(false);
        }
            
        })(); 
    }, []);

    if (loading) {

    }

}