import { useState } from 'react'
import './App.css'
import { LoginContext } from './components/login/context/authcontext'
import { Register } from './components/login/register'

function App() {
  
  const [token, setToken] = useState<string>('')

  return (
    <>
    <LoginContext.Provider value={{token, setToken}}>
    <Register/>
    </LoginContext.Provider>
    </>
    )
  }

export default App
