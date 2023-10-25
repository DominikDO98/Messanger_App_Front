import { FormEvent, useState } from "react";
import { TUserCreation } from "../../../types/user.types";


export const Register = () => {
    const [newUser, setNewUser]  = useState<TUserCreation>({
        username: '',
        password: '',
    })

    const handleChange = (key: string, value: string) => {
        setNewUser(user => ({
            ...user,
            [key]: value,
        }))
    }

    const submitRegister = (e: FormEvent) => {

    }

    return <>
        <form onSubmit={submitRegister}>
            <label> <div>Rejestracja</div>
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