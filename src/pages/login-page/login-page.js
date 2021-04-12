import React from "react";
import { useState, useEffect } from "react"
import { useHistory, Redirect } from 'react-router-dom';

import "./login-page.css";


function LoginPage(props) {

    const [name, setName] = useState('');
    const [passKey, setPassKey] = useState('');

    function login() {
        alert(name + passKey);
    }


    function Submit() {
        var validated = 1;
        if (!name) {
            validated = 0;
            document.getElementById('name').style.border = "1px solid red";
        }

        if (!passKey) {
            validated = 0
            document.getElementById('passKey').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://128.199.17.29:3000/auth/team/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    teamCode: name,
                    passKey: passKey
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        props.setLoggedIn(true)
                        localStorage.setItem('authToken', data.token)
                        localStorage.setItem('team_id', data.team_id)
                        localStorage.setItem('team_name', data.teamName)
                        localStorage.setItem('team_wallet', data.teamWallet)
                        props.setDisplayName(data.teamName)
                        // window.location.href = "/home"
                    }

                    else {
                        alert("Invalid team code or pass key. Please try again!")
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }

    }

    function revertStyle() {
        document.getElementById('name').style.border = "none";
        document.getElementById('passKey').style.border = "none";
    }

    console.log(props.loggedIn)
    if (!props.loggedIn) {
        console.log(props.loggedIn)
        return (
            <div className="login">
                <div className="login-section-top">
                    <br />
                    <img src="/sb_white_logo 1.png" className="login-logo"></img>
                    <br />
                    <label className='login-page-title'>CODE HUSTLE 2.0</label>
                </div>
                <div className="login-section-bottom">
                    <div className="login-box">
                        <input className="login-input-field" id="name" placeholder="ENTER TEAM NAME" onChange={e => { e.preventDefault(); setName(e.target.value); revertStyle() }} />
                        <input className="login-input-field" id="passKey" placeholder="ENTER PASS KEY" onChange={e => { e.preventDefault(); setPassKey(e.target.value); revertStyle() }} />
                        <button className="submit-button" onClick={Submit}>LOGIN</button>
                    </div>
                </div>
                <div className="login-footer">
                    <label className="login-footer-label">IEEE - VBIT SB | 2020 - 2021</label>
                </div>
            </div>
        );
    }
    else {
        return (
            <Redirect
                to="/home"
            />
        )
    }
}

export default LoginPage;