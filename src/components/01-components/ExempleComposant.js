import React, { Component } from "react";

// Etape 1 : Créer une classe qui hérite de la classe Component de React
class ExempleComposant extends Component {

    // Etape 2 : Définir le constructeur
    constructor(props){
        super(props);
        
        this.state = {
            message: "Bonjour !"
        }
    }

    // Etape 3 : Créer une méthode pour gérer les actions.
    handleClick = () => {
        this.setState({ message: "Composant React mis à jour."})
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}>Cliquer ici</button>
            </div>
        )
    }
}

export default ExempleComposant;
