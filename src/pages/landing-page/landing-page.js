import React from "react";
import "./landing-page.css";
import { useHistory, Redirect } from 'react-router-dom';
import CountupBar from "../../components/countup-bar/countup-bar";
import CountUp from 'react-countup';
import Nav from "../../components/nav/nav";
import { isProperty } from "@babel/types";


function LandingPage(props) {

    var text = "<Bet a code for better code/>";
    if (props.loggedIn) {
        if (localStorage.getItem("team_wallet") === "0" || parseInt(localStorage.getItem("team_wallet")) < 0) {
            return (
                <Redirect
                    to="/locked"
                />
            )
        }
        else {
            return (
                <div className="landing-page">
                    <div className="landing-jumbotron">
                        <div className="jumbotron-content-1">COMPUTER SOCIETY | IEEE - VBIT SB</div>
                        <div className="jumbotron-content-2">Presents</div>
                        <div className="jumbotron-content-title">CODE HUSTLE 2.0</div>
                        <div className="jumbotron-content-sub-title">{text}</div>
                    </div>
                    <div className="landing-countup-container">
                        <div className="count-up-bar">
                            <div className="count-up-area">
                                <CountUp className="count-label" delay={2} end={25} duration={25} />
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
                    </div>

                    <div className="rules-regulations-section">
                        <label className="rules-heading">RULES & REGULATIONS</label>
                        <div className="rules-container">
                            <ul>
                                <li className="rules-text">The contest is open to anyone with a knack for programming.</li>
                                <li className="rules-text">It is a team contest with each team having a maximum of two members from the same institution.</li>
                                <li className="rules-text">Teams will be ranked as per the number of problems solved.</li>
                                <li className="rules-text">Ties will be broken by the total time for each user in ascending order of time. </li>
                                <li className="rules-text">Qualifier: Any team solving 1 problem move to the pre-elimination rounds.</li>
                                <li className="rules-text">Pre - Elimination Round A: Teams falling under 1000 ranks in the rank table move towards the elimination.</li>
                                <li className="rules-text">Pre - Elimination Round B: Teams falling under 1000 ranks (which were not selected in Pre-Elimination Round A) in the rank table move towards the elimination</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer">
                        {/* <div className="smp-links-container">
                            <Icon className="smpicons" icon={instagramFill} />
                            <Icon className="smpicons" icon={facebookFill} />
                            <Icon className="smpicons" icon={webIcon} />
                        </div> */}
                        <div className="footer-signature">IEEE - VBIT SB | 2020 - 2021</div>
                    </div>
                </div>
            )
        }
    }
    else {
        return (
            <Redirect
                to="/"
            />
        )
    }

}

export default LandingPage;