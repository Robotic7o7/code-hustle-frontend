import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./nav.css";
import { useState, useEffect } from "react"


function Nav(props) {
    var teamIDNav = localStorage.getItem("team_id")

    useEffect(() => {
        fetch(`http://128.199.17.29:3000/teams/wallet/${teamIDNav}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({
            //     teamCode: name,
            //     passKey: passKey
            // }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                props.setWallet(data.teamWallet);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [props.wallet])



    if (!props.loggedIn) {
        return (
            <div className="nav-bar">
                <div className="nav-bar-left-container">
                    <img className="cs-logo" src="/cs.png" />
                    <img className="sb-logo" src="/FinalLogo1.png" />
                </div>
                <div className="nav-bar-right-container">
                    <a href="/home" className="nav-links">HOME</a>
                    <Link to="/bid" className="nav-links">BID</Link>
                    <Link to="/leader-board" className="nav-links">LEADERBOARD</Link>
                    <Link to="/" className="nav-links">LOGIN</Link>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="nav-bar">
                <div className="nav-bar-left-container">
                    <img className="cs-logo" src="/cs.png" />
                    <img className="sb-logo" src="/FinalLogo1.png" />
                </div>
                <div className="nav-bar-right-container">
                    <a href="/home" className="nav-links">HOME</a>
                    <Link to="/bid" className="nav-links">BID</Link>
                    <Link to="/leader-board" className="nav-links">LEADERBOARD</Link>
                    <a href to="/" className="nav-links"><b>{props.displayName}</b></a>
                    <a href to="/bid" className="nav-links"><b>Coins:{props.wallet}</b></a>
                </div>
            </div>
        )
    }


}

export default Nav;