import React from "react";
import CountUp from 'react-countup';

import "./countup-bar.css";


function CountupBar() {


    return (
        <div className="count-up-bar">
            <div className="count-up-area">
                <CountUp className="count-label" end={25} duration={5} />
                <div className="count-text-label">TEAMS</div>
            </div>
            <div className="count-up-area">
                <div className="count-label">02</div>
                <div className="count-text-label">ROUNDS</div>
            </div>
            <div className="count-up-area">
                <div className="count-label">03</div>
                <div className="count-text-label">WINNERS</div>
            </div>
        </div>
    )
}

export default CountupBar;