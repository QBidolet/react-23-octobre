import React, { Component } from 'react';

class ControlledForm extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({inputValue: event.target.value});
    }

    handleSubmit(event){
        alert("La valeur soumise est : " + this.state.inputValue);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom :
                </label>
                <input type="text"  value={this.state.inputValue} onChange={this.handleChange}></input>
                <input type="submit" value="Envoyer"></input>
            </form>
        )
    }
}
export default ControlledForm;