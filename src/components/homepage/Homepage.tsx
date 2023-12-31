import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/authcontext";
import { TUserJWT } from "../../../types/user.types";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { Inbox } from "./inbox";
import { Messanger } from "./messanger/messanger";
import { ChatContext } from "../../context/chatContex";
import { CreateRoom } from "../createRoom/createRoom";
import './inbox.css'

export type inboxType = 'group' | 'private' | null;
export type TypeOfRoom = 'private' | 'group' | null;
export type chatWindowTypes = {
    chat: {
        chat_id: string,
        chat_name: string,
        other_chat_member_id: string,
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
    const [typeOfRoom, setTypeOfRoom] = useState<TypeOfRoom>(null);
    const [chatWindow, setChatWindow] = useState<chatWindowTypes>({
        chat: {
            chat_id: '',
            chat_name: '',
            other_chat_member_id: '',           
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
        setChatWindow(chat => ({
            ...chat,
            isOpen: false
        }))
    }
    
    if (loading) {
        return <div><LoadingSpinner/></div>
    }

    return <>
    <ChatContext.Provider value={{chatWindow, setChatWindow}}>
        <div id="homepage">
        <h1>{user.username}</h1>
            <div> 
                <div id="chatsHeader">Chaty &nbsp;
                
                <button onClick={e => changeInboxType('group')}> Grupowe </button> 
                <button onClick={e => changeInboxType('private')}> Prywatne </button>
                </div>
                <Inbox inboxState = {inbox} user = {user}/>
                
                
            </div>
            <div>{chatWindow.isOpen ? <Messanger loggedUser={user} roomType = {inbox}/> : <></>}</div>
            <div>
                Stwórz konwersacje &nbsp;
                <button onClick={e => setTypeOfRoom("group")} value={"group"}>Grupa</button>
                <button onClick={e => setTypeOfRoom("private")} value={"private"}>Prywatna</button>
                <CreateRoom type={typeOfRoom}/>
            </div>
            </div>
    </ChatContext.Provider>
    </>
} 