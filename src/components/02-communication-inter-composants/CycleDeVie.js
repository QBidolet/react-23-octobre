import React, {Component} from "react";

class CycleDeVie extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        console.log("1. Constructeur - Initialisation du composant.")
    }

    componentDidMount(){
        console.log("3. ComponentDidMount : Le composant est monté.")
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("4. shouldComponentUpdate : Détermine si le composant doit être mis à jour.")
    //     return false;
    // }

    componentDidUpdate(prevProps, prevState){
        console.log("5. componentDidUpdate : Le composant est mis à jour.");
        console.log("Anciens états : " + prevState);
        console.log("Anciennes propriétés :" + prevProps);
    }

    componentWillUnmount(){
        console.log("6. componentWillUnmount : Le composant va être démonté.");
    }

    incrementCounter = () => {
        this.setState((prevState)=>({counter: prevState.counter + 1}));
    }

    render(){
        console.log("2. Render : Rendu du composant");
        return (
            <div>
                <h1>Démonstration du cycle de vie d'un composant.</h1>
                <p>Compteur : {this.state.counter}</p>
                <button onClick={this.incrementCounter}>Incrémenter</button>
            </div>
        )
    }
}

export default CycleDeVie;