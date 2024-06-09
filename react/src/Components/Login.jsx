import React from "react"
import {useState} from "react";
import logo from './logo.png';
import axios from "axios";

export function Login({setCurrentUser, setCurrentOrg}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [alert2, setAlert2] = useState("");
    const [userType, setUserType] = useState("Volunteer");

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function handleChangeType() {
        if (userType === "Volunteer") {
            setUserType("Organization");
        }
        else {
            setUserType("Volunteer");
        }
    }

    async function handleVRegister(e) {
        e.preventDefault();
        const result = await axios.post("http://localhost:1000/user_register", {name:username, password:password});
        if (result.data === "Taken") {
            setAlert("Username already taken");
            setAlert2("");
        }
        else {
            setAlert("");
            setAlert2("Account created, you may now log in");
        }
    }
    async function handleVLogin(e) {
        e.preventDefault();
        const result = await axios.post("http://localhost:1000/user_login", {name:username, password:password});
        if (result.data === "None") {
            setAlert("Username does not exist");
            setAlert2("");
        }
        else if (result.data === "Wrong") {
            setAlert("Wrong password");
            setAlert2("");
        }
        else {
            setAlert("");
            setAlert2("Logging in...");
            setCurrentUser(username);
        }
    }
    async function handleORegister(e) {
        e.preventDefault();
        const result = await axios.post("http://localhost:1000/org_register", {name:username, password:password});
        if (result.data === "Taken") {
            setAlert("Username already taken");
            setAlert2("");
        }
        else {
            setAlert("");
            setAlert2("Account created, you may now log in");
        }
    }
    async function handleOLogin(e) {
        e.preventDefault();
        const result = await axios.post("http://localhost:1000/org_login", {name:username, password:password});
        if (result.data === "None") {
            setAlert("Username does not exist");
            setAlert2("");
        }
        else if (result.data === "Wrong") {
            setAlert("Wrong password");
            setAlert2("");
        }
        else {
            setAlert("");
            setAlert2("Logging in...");
            setCurrentOrg(username);
        }
    }


    return (
        <div className="loginBg">
            <img src={logo} style={{width:"100px", height:"100px", margin: "25px"}} alt="image!!" />
            <div className="loginContainer">
                <p className="loginTitle">Aurora {userType} Login</p>
                <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={handleUsernameChange}
                    className="loginInput"
                />
                <input
                    type="text"
                    value={password}
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    className="loginInput"
                />
                <div style={{"marginTop": "15px", "marginBottom": "20px"}}>
                    <span style={{"color": "rgb(186, 195, 233)", "marginRight": "200px"}}>Remember Me</span>
                    <span style={{"color": "rgb(113, 102, 237)"}}>Forgot Password?</span>
                </div>
                <button className="loginButton" onClick={userType === "Volunteer" ? handleVLogin : handleOLogin}>Sign In</button>
                <button className="loginButton" onClick={userType === "Volunteer" ? handleVRegister : handleORegister}>Register</button>
                <button onClick={handleChangeType} className="registerButton">Switch to {userType === "Volunteer" ? "Organization" : "Volunteer"} Login</button>
            </div>
            { alert !== "" ? 
            <div className="alert">{alert}</div> :
            null
            }
            { alert2 !== "" ? 
            <div className="alert2">{alert2}</div> :
            null
            }
        </div>
    )
}