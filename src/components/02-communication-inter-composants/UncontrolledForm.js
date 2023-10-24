import React, { Component } from 'react';

class UncontrolledForm extends Component {
    constructor(){
        super();
        this.inputRef = React.createRef();
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        alert("La valeur soumise est : " + this.inputRef.current.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom :
                </label>
                <input type="text" ref={this.inputRef}></input>
                <input type="submit" value="Envoyer"></input>
            </form>
        )
    }
}
export default UncontrolledForm;