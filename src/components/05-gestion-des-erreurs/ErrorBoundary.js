import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        }
    }

    // Cette méthode statique est appelé lorsqu'une erreur est intercepté.
    // On peut mettre à jour l'état local pour indiquer qu'une erreur s'est produite.
    static getDerivedStateFromError(error){
        return {hasError: true, error}
    }

    componentDidCatch(error, errorInfo){
        console.log("Une erreur s'est produite", error, errorInfo);
        // envoyer les logs sur serveur, envoyer un mail etc.
    }

    render(){
        if (this.state.hasError){
            return <h1>Quelque chose s'est mal passé.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;