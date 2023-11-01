import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/authcontext";

export const Homepage = () => {

    const {token} = useContext(LoginContext)

    useEffect(() => {
        
        (async() => {
           try{ const res = await fetch('http://localhost:3000/', {
                method: "GET",
                headers: {
                    'authorization': token,
                },
                })
            } catch (err) {
                console.log(err);
                
            }
        })();
    })
    

    return <>
    Homepage
    </>
} 