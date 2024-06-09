import React from "react"

export function OData({currentOrg}) {

    function handleFile(e) {
        setFile(e.target.files[0]);
    }

    return (
        <div className="profileContainer">
            <div className="dataContainer" style={{"height": "35vh"}}>
                <h1>{currentOrg}</h1>
                <p>Opportunities created: 5 opportunities, 459 hours</p>
                <p>Location: Oakville, Ontario</p>
                <p>Description: We are an organization dedicated to improving the local environment within our town. 
                    We are always looking for volunteers, and we host weekly environmental cleanup activities. 
                    Join our activities to earn volunteer hours while helping the environment
                </p>
                <button className="sendButton">Edit Profile</button>
            </div>
            <div className="dataContainer" style={{"height": "25vh"}}>
                <p>Most recent volunteer opportunities posted on Aurora: </p>
                <p>Volunteer position 1</p>
                <p>Volunteer position 2</p>
                <p>Volunteer position 3</p>
                <p style={{"color": "rgb(113, 102, 237)"}}>See more...</p>
            </div>
        </div>
    )
}