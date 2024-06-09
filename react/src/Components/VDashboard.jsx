import React from "react"
import {useState} from "react"
import {VNavbar} from "./VNavbar.jsx"
import {VOpportunities} from "./VOpportunities.jsx"
import {VData} from "./VData.jsx"
import logo from './logo.png';

export function VDashboard({currentUser, setCurrentUser}) {
    const [selectedOption, setSelectedOption] = useState("Find opportunities")

    function handleLogout() {
        setCurrentUser("");
    }

    return (
        <div className="layoutContainer">
            <div className="leftLayout">
                <div className="logo">
                    <img src={logo} style={{width:"60px", height:"60px"}} alt="image!!" />
                </div>
                <VNavbar selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                <div className="userInfoContainer">
                    <div className="userInfo">
                        {currentUser}
                        <button onClick={handleLogout} className="logoutButton">Log Out</button>
                    </div>
                </div>
            </div>
            <div className="rightLayout">
                { selectedOption === "Find opportunities" &&
                <VOpportunities/>
                }
                { selectedOption === "View profile" &&
                <VData currentUser={currentUser}/>
                }
            </div>
        </div>
    )
}