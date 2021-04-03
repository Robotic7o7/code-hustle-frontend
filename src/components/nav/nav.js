import React from "react";

import "./nav.css";


function Nav() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-left-container">
                <img className="cs-logo" src="/cs.png" />
                <img className="sb-logo" src="/FinalLogo1.png" />
            </div>
            <div className="nav-bar-right-container">
                <label className="nav-links">HOME</label>
                <label className="nav-links">BID NOW</label>
                <label className="nav-links">LEADERBOARD</label>
                <label className="nav-links">LOGIN</label>
            </div>
        </div>
    )
}

export default Nav;