import React , { useState } from "react";

function FonctionCounter(){
    const [counter, setCounter] = useState(0);

    function incrementCounter(){
        setCounter((prevCount)=> prevCount + 1);
    }

    return (
        <div>
            <h1>Compteur avec Hooks.</h1>
            <p>Compteur : {counter}</p>
            <button onClick={incrementCounter}>Incrémenter</button>
        </div>
    )
}

export default FonctionCounter;