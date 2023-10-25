import React, { useState, useEffect } from 'react';

function DemoUseEffect(props){
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState();

    useEffect(()=>{
        console.log("Exécuté une seule fois, au montage.");
        return () => {
            console.log("Exécuté au démontage");
        }
    }, [])

    useEffect(()=>{
        // Exécution à chaque render.
        console.log("Mise à jour du titre à chaque render.")
        document.title = `Compteur ${counter}`;
    })

    useEffect(()=>{
        // Exécution à chaque fois que counter change.
        console.log("Le compteur a changé.")
    }, [counter, name]); // tableau de dépendance


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

export default DemoUseEffect;