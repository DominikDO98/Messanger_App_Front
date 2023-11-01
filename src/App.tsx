import { useState } from 'react';
import './App.css';
import { LoginContext } from './context/authcontext';
import { Register } from './components/login/register';
import { Login } from './components/login/login';
import {Routes, Route} from 'react-router-dom';
import { Homepage } from './components/homepage/Homepage';
function App() {
  
  const [token, setToken] = useState<string>('')

  if (token === '') return <>
  <LoginContext.Provider value={{token, setToken}}>
  <Register/>
  <Login/>
  </LoginContext.Provider>
  </>

  return <>
    <LoginContext.Provider value={{token, setToken}}>
    <Homepage/>
    </LoginContext.Provider>
    </>
    
  }

export default App
