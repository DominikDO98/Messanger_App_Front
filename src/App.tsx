import { useState } from 'react'
import './App.css'
import { LoginContext } from './context/authcontext'
import { Register } from './components/login/register'
import { Login } from './components/login/login'

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
