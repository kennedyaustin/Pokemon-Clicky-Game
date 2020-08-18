import React from "react";
import "./Score.css";

// Keeps track of the score for the user and gives a message for when they lose or win
const Score = props => (
  <div className="gameScore">
    <h3 className="score">You've clicked {props.total} out of {props.maxScore} different Pokemon!</h3>
    <h3 className="message">{props.message}</h3>
  </div>
);

export default Score;
