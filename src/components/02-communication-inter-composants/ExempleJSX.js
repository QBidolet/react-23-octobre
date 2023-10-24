import React, { Component } from 'react';
import './ExempleJSX.css';

class ExempleJSX extends Component {
    constructor(props){
        super(props);
        this.state = {
            utilisateur: {
                prenom: 'John',
                nom: 'Doe'
            },
            items: ["Pomme", "Banane", "Kiwi"]
        }
    }

    render() {
        // Opérateur de décomposition
        const { utilisateur, items } = this.state;

        const message = utilisateur ? `Bonjour ${utilisateur.nom}!` : "Veuillez vous connecter." 

        return (
            <div>
                <h1>Exemple JSX</h1>
                <p>{message}</p>
                {/* Affichage d'une liste.*/}
                <ul>
                {
                    items.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
                </ul>

                {/* CSS inline*/}
                <p style={{color: 'blue', backgroundColor: 'yellow', fontSize: '18px'}}>Texte avec un style</p>

                {/*Gérer un événement de manière inline.*/}
                <button onClick={()=>alert("Bouton cliqué !")}></button>
            </div>
        )
    }
}

export default ExempleJSX;