import { useContext, useEffect, useState } from "react"
import { LoadingSpinner } from "../../common/LoadingSpinner"
import { LoginContext } from "../../../context/authcontext"
import { TUserChat, TUserJWT } from "../../../../types/user.types"
import { InboxTablePrivate } from "./inboxTablePrivate"

interface Props {
    user: TUserJWT,
}

export const InboxPrivate = (props: Props) => {
    const {token} = useContext(LoginContext);
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<TUserChat[] | null>(null);

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

    if (!users || !users[0]) {
        return <p>--Brak połączonych użytkowników--</p>
    }

    return <>
    <InboxTablePrivate user={props.user} chats={users}/>
    </>
}