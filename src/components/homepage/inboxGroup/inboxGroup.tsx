import { useContext, useEffect, useState } from "react"
import { LoadingSpinner } from "../../common/LoadingSpinner"
import { TRoom } from "../../../../types/room.type"
import { LoginContext } from "../../../context/authcontext"
import { TUserJWT } from "../../../../types/user.types"

interface Props {
    user: TUserJWT, 
}

export const InboxGroup = (props: Props) => {
    const {token} = useContext(LoginContext);
    const [loading, setLoading] = useState<boolean>(true);
    const [rooms, setRooms] = useState<TRoom[] | null>(null);

    useEffect(() => {
        (async() => {
            try {
                const res = await fetch('http://localhost:3000/inbox/group', {
                    method: "GET",
                    headers: {
                    'authorization': token,
                    },
                });
            console.log(res);

            const data = await res.json()
                console.log(data);
                
            setRooms(data)

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

    if (!rooms) {
        return <p>Działa</p>
    }

    return <>
    <p>rooms</p>
    </>
}