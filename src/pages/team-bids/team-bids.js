import React from "react";
import { useState, useEffect } from "react";
import "./team-bids.css";

function TeamBids() {

    const [teamBids, setTeamBids] = useState('')

    useEffect(() => {
        fetch('http://128.199.17.29:3000/bid/')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTeamBids(data);
                console.log(teamBids)
            });
    }, [])

    if (!teamBids) {
        return (<div> Loading...</div>)
    }

    else {
        return (<div className="team-bid-page">
            <div className="team-bid-section-top">
                <br />
                <img src="/sb_white_logo 1.png" className="team-bid-logo"></img>
                <br />
                <label className='team-bid-page-title'>CODE HUSTLE 2.0</label>
            </div>
            <div className="team-bid-section-bottom">
                <div className="team-bid-box" id="team-bid-main">
                    <div className="team-bid-row">
                        <span className="team-bid-item bg-grey" ><b>TEAM CODE</b></span>
                        <span className="team-bid-item bg-grey" ><b>QUESTION NO</b></span>
                        <span className="team-bid-item bg-grey" ><b>BID</b></span>
                    </div>
                    {teamBids.map((teamBid, item) =>
                        <div className="team-bid-row">
                            <span className="team-bid-item" >{teamBid.teamCode}</span>
                            <span className="team-bid-item" >{teamBid.questionNo}</span>
                            <span className="team-bid-item" >{teamBid.bidAmount}</span>
                        </div>)}
                </div>
            </div>
        </div>
        )
    }
}

export default TeamBids;