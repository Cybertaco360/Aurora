import React from "react"
import {useState} from "react"
import logo from './logo.png';
import {ONavbar} from "./ONavbar.jsx"
import {OData} from "./OData.jsx"
import {OOpportunities} from "./OOpportunities.jsx"
import {OAdd} from "./OAdd.jsx"

export function ODashboard({currentOrg, setCurrentOrg}) {
    const [selectedOption, setSelectedOption] = useState("Your opportunities")

    function handleLogout() {
        setCurrentOrg("");
    }

    return (
        <div className="layoutContainer">
            <div className="leftLayout">
                <div className="logo">
                    <img src={logo} style={{width:"60px", height:"60px"}} alt="image!!" />
                </div>
                <ONavbar selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                <div className="userInfoContainer">
                    <div className="userInfo">
                        {currentOrg}
                        <button onClick={handleLogout} className="logoutButton">Log Out</button>
                    </div>
                </div>
            </div>
            <div className="rightLayout">
                { selectedOption === "Your opportunities" &&
                <OOpportunities currentOrg={currentOrg}/>
                }
                { selectedOption === "View profile" &&
                <OData currentOrg={currentOrg}/>
                }
                { selectedOption === "Create opportunity" &&
                <OAdd currentOrg={currentOrg}/>
                }
            </div>
        </div>
    )
}