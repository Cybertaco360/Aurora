import React from "react"
import testImage from './testImage.png';
import {useState} from "react";
import axios from "axios";

export function OOpportunities({currentOrg}) {
    const [popup, setPopup] = useState(false);
    const [currentSearch, setCurrentSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    function handleSearchChange(e) {
        setCurrentSearch(e.target.value);
    }

    function handlePopup() {
        setPopup(!popup);
    }

    async function search(e) {
        e.preventDefault();
        let results = await axios.post("http://localhost:1000/filter_opportunity", {$and: [{title:currentSearch}, {organization:currentOrg}]});

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
                    placeholder={"Search your opportunities"}
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
            <div className="popupDescription" style={{"height": "400px"}}>
                <h1>Beach Cleanup</h1>
                <p>Location: Oakville, Ontario, 2094 Laurelwood Drive</p>
                <p>Time: 3pm July 11, 2024, 3 hours</p>
                <p>New applicants: 12</p>
                <p>31 current volunteers, 101 past volunteers</p>
                <p>Description: Within this opportunity you will work with 10-15 others to clean up 
                    trash on our local beach. You will get volunteer hours while saving the environment!! For further inquiries, use our email org2345@gmail.com. Alternatively, use the number 
                    905 784 434 ext. 101</p>
                <div style={{display: "flex", justifyContent:"space-around"}}>
                    <button className="logoutButton" onClick={handlePopup}> Close </button>
                    <button className="sendButton" style={{"fontSize": "12px"}}> View applicants</button>
                    <button className="sendButton" style={{"fontSize": "12px"}}> View members</button>
                    <button className="sendButton" style={{"fontSize": "12px"}}> Edit opportunity</button>
                </div>
            </div>
        </div>
        }
    </>
    )
}