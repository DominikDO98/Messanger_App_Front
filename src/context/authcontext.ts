import { createContext } from "react";

export const LoginContext = createContext({
    token: '',
    setToken: (t: string) => {},
});