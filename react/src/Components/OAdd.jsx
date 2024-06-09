import React from "react"
import {useState} from "react";
import axios from "axios";

export function OAdd({currentOrg}) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [hours, setHours] = useState("");
    const [description, setDescription] = useState("");

    async function handleCreate(e) {
        e.preventDefault();

        const result = await axios.post("http://localhost:1000/create_opportunity", {title:title, description: description, organization: currentOrg});
        setTitle("");
        setLocation("");
        setTime("");
        setHours("");
        setDescription("");
    }

    return (
    <>
        <div className="dataContainer" style={{"height": "90vh"}}>
            <h1>Create new volunteer opportunity</h1>
            <input className="messageInput" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <p></p>
            <input className="messageInput" placeholder="Location" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
            <p></p>
            <input className="messageInput" placeholder="Date and time" value={time} onChange={(e)=>{setTime(e.target.value)}}/>
            <p></p>
            <input className="messageInput" placeholder="Number of volunteer hours" value={hours} onChange={(e)=>{setHours(e.target.value)}}/>
            <p></p>
            <input className="messageInput" placeholder="Description" style={{"height": "100px", "overflow": "scroll"}}
            value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <p></p>
            <button className="loginButton" onClick={handleCreate}> Create </button>
        </div>
    </>
    )
}