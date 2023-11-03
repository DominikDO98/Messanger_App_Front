import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/authcontext";
import { TUserJWT } from "../../../types/user.types";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { Inbox } from "./inbox";

export type inboxType = 'group' | 'private' | null 

export const Homepage = () => {
    const {token} = useContext(LoginContext);
    const [user, setUser] = useState<TUserJWT>({
        user_id: '',
        username: '',
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [inbox, setInbox] = useState<inboxType>(null);

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
    <h1>{user.username}</h1>
    <div> Chaty
    <button onClick={e => changeInboxType('group')}> Grupowe </button> <button onClick={e => changeInboxType('private')}> Prywatne </button>
    <Inbox inboxState = {inbox} user = {user}/>
    </div>
    </>
} 