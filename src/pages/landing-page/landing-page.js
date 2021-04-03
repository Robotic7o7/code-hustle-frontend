import React from "react";

import "./landing-page.css";


function LandingPage() {

    var text = "<Bet a code for better code/>";
    return (
        <div className="landing-page">
            <div className="landing-jumbotron">
                <div className="jumbotron-content-1">COMPUTER SOCIETY | IEEE - VBIT SB</div>
                <div className="jumbotron-content-2">Presents</div>
                <div className="jumbotron-content-title">CODE HUSTLE 2.0</div>
                <div className="jumbotron-content-sub-title">{text}</div>
            </div>
        </div>
    )
}

export default LandingPage;