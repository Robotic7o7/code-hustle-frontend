import React from "react";
import "./landing-page.css";
import CountupBar from "../../components/countup-bar/countup-bar";
import { Icon, InlineIcon } from '@iconify/react';
import webIcon from '@iconify-icons/mdi/web';
import instagramFill from '@iconify-icons/akar-icons/instagram-fill';
import facebookFill from '@iconify-icons/akar-icons/facebook-fill';


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
            <div className="landing-countup-container">
                <CountupBar />
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

export default LandingPage;