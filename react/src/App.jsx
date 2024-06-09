import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Login} from "./Components/Login.jsx"
import {VDashboard} from "./Components/VDashboard.jsx"
import {ODashboard} from "./Components/ODashboard.jsx"
import {useEffect} from "react";
import axios from "axios";

function App() {
  const [currentUser, setCurrentUser] = useState(function () {
      return JSON.parse(localStorage.getItem("currentUser"));
  });

  useEffect(function () {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const [currentOrg, setCurrentOrg] = useState(function () {
    return JSON.parse(localStorage.getItem("currentOrg"));
  });

  useEffect(function () {
    localStorage.setItem("currentOrg", JSON.stringify(currentOrg));
  }, [currentOrg]);

  return (
    <>
    {currentUser && <VDashboard currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
    {currentOrg && <ODashboard currentOrg={currentOrg} setCurrentOrg={setCurrentOrg}/>}
    {!currentUser && !currentOrg &&
    <Login setCurrentUser={setCurrentUser} setCurrentOrg={setCurrentOrg}/>}
    </>
  )
}

export default App
