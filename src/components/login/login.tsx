import { FormEvent, useState, useContext } from "react";
import { TUserCreation } from "../../../types/user.types";
import { LoginContext } from "../../context/authcontext";


export const Login = () => {
    const {setToken} = useContext(LoginContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [logUser, setLogUser] = useState<TUserCreation>({
        username: '',
        password: '',
    });

    const handleChange = (key: string, value: string) => {
        setLogUser(user => ({
            ...user,
            [key]: value,
        }))
    }

    const submitLogin = async (e: FormEvent) => {
        e.preventDefault()

        setLoading(true)

        try {
            const res = await fetch(`http://localhost:3000/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...logUser,
                }),
            });

            const data = await res.json()
            setToken(data)
            console.log(data);
            
            
        } catch (err) {
            console.log(err);
            
        } finally {
            setLoading(false);
            
        };
    };

    if (loading) {
        return <>
        <p>coś tam... trwa ładowanie... brrrrr.</p>
        </>
    }

    return <>
        <form onSubmit={submitLogin}>
            <label> 
                <div>Logowanie</div>
                <div>Nazwa użytkownika</div>
                <input type="text"  value={logUser.username} onChange={e => handleChange('username', e.target.value)}/>
            </label>
            <label>
                <div>Hasło</div>
                <input type="text" value={logUser.password} onChange={e => handleChange('password', e.target.value)}/>
            </label>

            <button type="submit">Zaloguj się</button>
            
        </form>
    </>
}