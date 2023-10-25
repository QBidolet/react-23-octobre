import React from "react";

function Film({title, votes, handleVote}){
    return (
        <div>
            <h2>{title}</h2>
            <p>Votes: {votes}</p>
            <button onClick={handleVote}>Voter</button>
        </div>
    )
}

export default Film;