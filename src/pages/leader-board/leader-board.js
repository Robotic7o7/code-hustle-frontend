import React from 'react';
import { useState, useEffect } from 'react'

import "./leader-board.css";

function LeaderBoard(props) {

    const [teams, setTeams] = useState('')

    useEffect(() => {
        fetch(' http://128.199.17.29:3000/teams/')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTeams(data);
                console.log(teams)
            });
    }, [])



    if (!teams) {
        return (<div> Loading...</div>)
    }

    else {
        return (
            <div className="leader-board-page">
                <div className="leader-board-section-top">
                    <br />
                    <img src="/sb_white_logo 1.png" className="leader-board-logo"></img>
                    <br />
                    <label className='leader-board-page-title'>CODE HUSTLE 2.0</label>
                    <div className="leader-board-button-container">
                        <button className="leader-board-button">MAIN LEADER BOARD</button>
                        <button className="leader-board-button">BID LEADER BOARD</button>
                    </div>
                </div>
                <div className="leader-board-section-bottom">
                    <div className="leader-board-box" id="leader-board-main">
                        <div className="leader-board-row">
                            <span className="leader-board-item bg-grey" ><b>TEAM NAME</b></span>
                            <span className="leader-board-item bg-grey" ><b>TEAM CODE</b></span>
                            <span className="leader-board-item bg-grey" ><b>TEAM WALLET</b></span>
                        </div>
                        {teams.map((team, item) =>
                            <div className="leader-board-row">
                                <span className="leader-board-item" >{team.teamName}</span>
                                <span className="leader-board-item" >{team.teamCode}</span>
                                <span className="leader-board-item" >{team.teamWallet}</span>
                            </div>)}
                    </div>
                </div>
                {/* <div className="leader-board-footer">
                    <label className="leader-board-footer-label">IEEE - VBIT SB | 2020 - 2021</label>
                </div>*/}
            </div>
        )
    }
}

export default LeaderBoard