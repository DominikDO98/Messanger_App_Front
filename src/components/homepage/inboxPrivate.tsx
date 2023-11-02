import { useContext, useEffect, useState } from "react"
import { LoadingSpinner } from "../common/LoadingSpinner"
import { LoginContext } from "../../context/authcontext"
import { TUser } from "../../../types/user.types"

export const InboxPrivate = () => {
    const {token} = useContext(LoginContext);
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<TUser[] | null>(null);

    useEffect(() => {
        (async() => {
            try {
                const res = await fetch('http://localhost:3000/inbox/private', {
                    method: "GET",
                    headers: {
                    'authorization': token,
                    },
                });
            console.log(res);

            const data = await res.json()
                console.log(data);
                
            setUsers(data)

            } catch (err) {
                console.log(err);
                
            } finally {
                setLoading(false)
            }

        })()
    }, [])


    if (loading) {
        return <div><LoadingSpinner/></div>
    }

    if (!users) {
        return <p>nie Działa</p>
    }

    return <>
    <p>users</p>
    </>
}