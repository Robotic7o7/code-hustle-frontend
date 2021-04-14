import React from 'react';
import { useState, useEffect } from "react"
import "./locked.css"



function LockedPage() {

    // useEffect(() => {
    //     var timeout = setTimeout(redirectFeedback, 15000);
    // }, [])

    function redirectFeedback() {
        window.location.href = "https://instagram.com";
        clearTimeout();
    }

    return (
        <div className="locked-page">
            <div className="locked-section-top">
                <br />
                <img src="/sb_white_logo 1.png" className="locked-logo"></img>
                <br />
                <label className='locked-page-title'>CODE HUSTLE 2.0</label>
                <div className="locked-box">
                    <label className="locked-label-title">OOPS! Seems like you have run out of coins</label>
                    <br />
                    <label className="locked-label">Unfortunately, due to exhaustion of your wallet, as per the rules of Code Hustle 2.0 you can no longer carry forward your contention in Code Hustle 2.0.</label>
                    <br />
                    <label className="locked-label"><b>Better Luck Next Time!</b></label>
                    <br />
                    <label className="locked-label">In case, you recieve coins from your previous bid we shall inform you about the same, and login access will be restored.</label>
                    <br />
                    <label className="locked-label">You will be automatically redirected to the feedback from</label>
                </div>
            </div>
            <div className="locked-section-bottom">

            </div>
            <div className="locked-footer">
                <label className="locked-footer-label">IEEE - VBIT SB | 2020 - 2021</label>
            </div>
        </div>
    );
}

export default LockedPage;