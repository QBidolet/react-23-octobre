import React, {Component } from 'react';
import Enfant from './Enfant';

class Parent extends Component{
    constructor(){
        super();
        this.state = {
            data: "Données initiales."
        }
    }

    handleButtonClick = () => {
        this.setState({data: "Données modifiées."});
    }

    render () {
        const data = this.state.data;
        return (
            <div>
                <h2>Composant parent</h2>
                <p>Data : {data}</p>
                <Enfant data={data} handleButtonClick={this.handleButtonClick}></Enfant>
            </div>
        )
    }
}

export default Parent;