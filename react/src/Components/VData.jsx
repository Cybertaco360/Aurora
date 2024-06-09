import React from "react"
import aura from './aura.png';

export function VData({currentUser}) {

    function handleFile(e) {
        setFile(e.target.files[0]);
    }

    return (
        <div className="profileContainer">
            <div className="dataContainer" style={{"height": "35vh"}}>
                <h1>{currentUser}</h1>
                <p>
                Aura<img src={aura} style={{width: "20px", height: "20px"}}/>: 1600
                    
                </p>
                <p>Location: Oakville, Ontario</p>
                <p>Description: Hello!! I am a junior at White Oaks Secondary School. I am interested in the
                    intersection between tech and social change. I look forward to using my skills to 
                    improve the world through volunteering
                </p>
                <button className="sendButton">Edit Profile</button>
            </div>
            <div className="dataContainer" style={{"height": "20vh"}}>
                <p>Resume (none)</p>
                <input type="file" onChange={handleFile}/>
                <button>Upload PDF</button>
            </div>
            <div className="dataContainer" style={{"height": "25vh"}}>
                <p>Most recent volunteering experiences on Aurora: </p>
                <p>Volunteer position 1 at Organization 1</p>
                <p>Volunteer position 2 at Organization 2</p>
                <p>Volunteer position 3 at Organization 3</p>
                <p style={{"color": "rgb(113, 102, 237)"}}>See more...</p>
            </div>
        </div>
    )
}