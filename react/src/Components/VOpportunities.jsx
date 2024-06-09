import React from "react"
import testImage from './testImage.png';
import {useState} from "react";
import aura from './aura.png';
import axios from "axios";

export function VOpportunities() {
    const [popup, setPopup] = useState(false);
    const [currentSearch, setCurrentSearch] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [alert2, setAlert2] = useState("");

    function handleSearchChange(e) {
        setCurrentSearch(e.target.value);
    }
    
    function handleLocationChange(e) {
        setCurrentLocation(e.target.value);
    }

    function handlePopup() {
        setPopup(!popup);
        setAlert2("");
    }

    async function search(e) {
        e.preventDefault();
        let results = null
        if (currentSearch === "" && currentLocation === "") {
            results = await axios.post("http://localhost:1000/filter_opportunity", {});
        }
        else if (currentSearch === "") {
            results = await axios.post("http://localhost:1000/filter_opportunity", {location:currentLocation});
        }
        else if (currentLocation === "") {
            results = await axios.post("http://localhost:1000/filter_opportunity", {title:currentSearch});
        }
        else {
            results = await axios.post("http://localhost:1000/filter_opportunity", {$and: [{title:currentSearch}, {location:currentLocation}]});
        }

        setSearchResults(results.data);
        console.log(results.data);
    }

    return (
    <>
        <div className="messageInputContainer">
            <form onSubmit={search}>
                <input
                    value={currentSearch}
                    onChange={handleSearchChange}
                    type="text"
                    placeholder={"Search for opportunities"}
                    style={{width: "35vw"}}
                    className="messageInput"
                />
                <input
                    value={currentLocation}
                    onChange={handleLocationChange}
                    type="text"
                    style={{width: "15vw"}}
                    placeholder={"Filter by location"}
                    className="messageInput"
                />
                <button className="sendButton">Search</button>
            </form>
        </div>
        <div className="opportunitiesContainer">
        {searchResults.map((opportunity) => {
            return (
            <div key={opportunity._id} className="opportunity" onClick={handlePopup}>
                <img src={testImage} style={{width:"250px", height:"150px", borderTopLeftRadius:"5px", borderTopRightRadius:"5px"}} alt="image!!" />
                <div className="description">
                    <h3>{opportunity.title}</h3>
                    <p>{opportunity.description}</p>
                </div>
            </div>
            )
        })}
        </div>
        {popup &&
        <div className="popup">
            <div className="popupDescription">
                <h1>Beach Cleanup</h1>
                <p>500 Aura
                <img src={aura} style={{width: "20px", height: "20px"}}/>
                 available to earn!</p>
                <p>Location: Oakville, Ontario, 2094 Laurelwood Drive</p>
                <p>Time: 3pm July 11, 2024, 5 hours</p>
                <p>42 current volunteers, 221 past volunteers</p>
                <p>Rating: 4.9/5 (12 reviews)</p>
                <p>Description: Within this opportunity you will work with 10-15 others to clean up 
                    trash on our local beach. You will get volunteer hours while saving the environment!! For further inquiries, use our email org2345@gmail.com. Alternatively, use the number 
                    905 784 434 ext. 101</p>
                
                <div style={{display: "flex", justifyContent:"space-around"}}>
                    <button className="logoutButton" onClick={handlePopup}> Close </button>
                    <button className="sendButton" onClick={()=>{setAlert2("Thank you for applying! Your profile has been forwarded")}}> Apply</button>
                </div>
            </div>
            { alert2 !== "" ? 
            <div className="alert2">{alert2}</div> :
            null
            }
        </div>
        }
    </>
    )
}