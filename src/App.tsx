import { useState } from 'react'
import './App.css'
import { LoginContext } from './context/authcontext'
import { Register } from './components/login/Register'
import { Login } from './components/login/Login'

function App() {
  
  const [token, setToken] = useState<string>('')

  return (
    <>
    <LoginContext.Provider value={{token, setToken}}>
    <Register/>
    <Login/>
    </LoginContext.Provider>
    </>
    )
  }

export default App
