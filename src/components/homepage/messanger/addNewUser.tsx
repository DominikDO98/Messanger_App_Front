import { FormEvent, useContext, useState } from "react";
import { LoginContext } from "../../../context/authcontext";
import { ChatContext } from "../../../context/chatContex";

export const AddNewUser = () => {
    const {token} = useContext(LoginContext);
    const {chatWindow} = useContext(ChatContext);
    const [username, setUsername] = useState<string>('');
    
    
    const handleChange = (value: string) => {
            setUsername(value)
    }
    
    const submitForm = async (e: FormEvent) => {
        e.preventDefault();
        
  
        try {
            await fetch(`http://localhost:3000/add-person`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                },
                body: JSON.stringify({
                    contact: {
                        name: username,
                        room: chatWindow.chat.chat_id
                    }
                })
            });
        } catch (error) {
            console.log(error);
            
        }}
    
    return <div>
        <form onSubmit={submitForm}>
            <input type="text" value={username} onChange={e => handleChange(e.target.value)}/>
            <button type="submit">Dodaj użytkownika</button>
        </form>
    </div>
}