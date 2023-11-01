import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/authcontext";
import { TUserJWT } from "../../../types/user.types";
import { LoadingSpinner } from "../common/LoadingSpinner";

export const Homepage = () => {
    const {token} = useContext(LoginContext);
    const [user, setUser] = useState<TUserJWT>({
        id: '',
        username: '',
    });
    const [loading, setLoading] = useState<boolean>(true);

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
    
    if (loading) {
        return <>
        <LoadingSpinner/>
        </>
    }

    return <>
    <h1>{user.username}</h1>
    </>
} 