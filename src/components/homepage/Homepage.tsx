import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/authcontext";
import { TUserJWT } from "../../../types/user.types";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { Inbox } from "./inbox";
import { TRoom } from "../../../types/room.type";
import { Messanger } from "./messanger/messanger";
import { ChatContext } from "../../context/chatContex";


export type inboxType = 'group' | 'private' | null; 
export type chatWindowTypes = {
    room: {
        room: string,
        room_name: string,
        is_private: boolean,
    },
    isOpen: boolean,
}

export const Homepage = () => {
    const {token} = useContext(LoginContext);
    const [user, setUser] = useState<TUserJWT>({
        user_id: '',
        username: '',
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [inbox, setInbox] = useState<inboxType>(null);
    const [chatWindow, setChatWindow] = useState<chatWindowTypes>({
        room: {
            room: '',
            room_name: '',
            is_private: false,
        },
        isOpen: false,
    })

    useEffect(() => {
        
        (async() => {
           try { 
                const res = await fetch('http://localhost:3000/', {
                    method: "GET",
                    headers: {
                        'authorization': token,
                    },
                });

            const data = await res.json();

            setUser(data)

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false)
            }
        })();
    }, [])

    const changeInboxType = (type: inboxType) => {
        setInbox(type)
    }
    
    if (loading) {
        return <div><LoadingSpinner/></div>
    }

    return <>
    <ChatContext.Provider value={{chatWindow, setChatWindow}}>
        <h1>{user.username}</h1>
            <div> Chaty &nbsp;
                
                <button onClick={e => changeInboxType('group')}> Grupowe </button> <button onClick={e => changeInboxType('private')}> Prywatne </button>
                
                <Inbox inboxState = {inbox} user = {user}/>
                
                {chatWindow.isOpen ? <Messanger room = {chatWindow.room} loggedUser={user}/> : null}
            
            </div>
    </ChatContext.Provider>
    </>
} 