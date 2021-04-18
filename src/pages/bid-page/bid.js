import React from "react";
import "./bid.css";
import { useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BidPage(props) {

    console.log(props.loggedIn)
    console.log(props.displayName)

    var teamIDBid = localStorage.getItem("team_id")

    const [questionNo, setQuestionNo] = useState('');
    const [bidValue, setBidValue] = useState('');


    function calcWallet() {
        fetch(`http://128.199.17.29:3000/teams/wallet/${teamIDBid}`, {
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
                console.log("wallet amount from bid page" + data.teamWallet);
                if (parseInt(data.teamWallet) === 0) {
                    alert("Oops! seems like you're broke. You have insufficient coins, bid cannot be placed");
                    window.location.href = "/locked";
                }
                else {
                    var updatedAmount = parseInt(data.teamWallet) - parseInt(bidValue)
                    console.log("updated Amount" + updatedAmount);
                    if (updatedAmount >= 0) {
                        var finalAmount = updatedAmount.toString();
                        updateWallet(finalAmount)
                    }
                    else {

                        alert("You have insufficient funds to bid " + bidValue + " Coins, kindly resubmit bid Value");

                    }
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function updateWallet(amount) {
        console.log("amount trying to get updated" + amount)
        fetch(`http://128.199.17.29:3000/teams/${teamIDBid}/update_wallet`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                teamWallet: amount,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.message != "failed") {
                    props.setWallet(amount);
                    localStorage.setItem("team_wallet", amount);
                    console.log("wallet amount updated");
                    saveBid();
                    alert("Bid Saved, Question number " + questionNo + " Bid Value: " + bidValue)
                }

                else {
                    alert("Invalid team code or pass key. Please try again!")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    function saveBid() {
        fetch('http://128.199.17.29:3000/bid/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            body: JSON.stringify({
                teamCode: props.displayName,
                questionNo: questionNo,
                bidAmount: bidValue
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.message != "failed") {
                    console.log(data)
                }
                else {
                    alert("Server Error, bid not saved. Relogin")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function submitBid() {
        var validated = 1;
        if (!questionNo) {
            validated = 0;
            document.getElementById('question').style.border = "1px solid red";
        }

        if (!bidValue) {
            validated = 0
            document.getElementById('bid').style.border = "1px solid red";
        }

        if (parseInt(bidValue) < 0) {
            validated = 0;
            document.getElementById('bid').style.border = "1px solid red";
            alert("Bid value cannot be negative");
        }

        if (validated == 1) {
            calcWallet();
        }
    }


    function revertStyle() {
        document.getElementById('question').style.border = "none";
        document.getElementById('bid').style.border = "none";
    }



    if (props.loggedIn) {
        return (
            <div className="bid-page">
                <div className="bid-section-top">
                    <br />
                    <img src="/sb_white_logo 1.png" className="bid-logo"></img>
                    <br />
                    <label className='bid-page-title'>CODE HUSTLE 2.0</label>
                    <div className="bid-box">
                        <input className="bid-input-field" value={props.displayName} readonly />
                        <input className="bid-input-field" placeholder="ENTER QUESTION NUMBER" id="question" onChange={e => { e.preventDefault(); setQuestionNo(e.target.value); revertStyle() }} />
                        <input className="bid-input-field" placeholder="ENTER BID VALUE" id="bid" onChange={e => { e.preventDefault(); setBidValue(e.target.value); revertStyle() }} />
                        <button className="bid-button" onClick={submitBid}>BID</button>
                    </div>
                </div>
                <div className="bid-section-bottom">

                </div>
                <div className="bid-footer">
                    <label className="bid-footer-label">IEEE - VBIT SB | 2020 - 2021</label>
                </div>
            </div>
        )
    }
    else {
        return (
            <Redirect
                to="/"
            />
        )
    }

}

export default BidPage;