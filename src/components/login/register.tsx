import { FormEvent, useState, useContext } from "react";
import { TUserCreation } from "../../../types/user.types";
import { LoginContext } from "../../context/authcontext";


export const Register = () => {
    const {setToken} = useContext(LoginContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [newUser, setNewUser] = useState<TUserCreation>({
        username: '',
        password: '',
    });

    const handleChange = (key: string, value: string) => {
        setNewUser(user => ({
            ...user,
            [key]: value,
        }))
    }

    const submitRegister = async (e: FormEvent) => {
        e.preventDefault()

        setLoading(true)

        try {
            const res = await fetch(`http://localhost:3000/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...newUser,
                }),
            });

            const data = await res.json()
            console.log(data);            
            setToken(data);
            
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
        <form onSubmit={submitRegister}>
            <label> 
                <div>Rejestracja</div>
                <div>Nazwa użytkownika</div>
                <input type="text"  value={newUser.username} onChange={e => handleChange('username', e.target.value)}/>
            </label>
            <label>
                <div>Hasło</div>
                <input type="text" value={newUser.password} onChange={e => handleChange('password', e.target.value)}/>
            </label>

            <button type="submit">Zarejestruj się</button>
            
        </form>
    </>
}