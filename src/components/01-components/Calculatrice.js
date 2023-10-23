import React, { Component } from 'react';

class Calculatrice extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            result: ''
        };
    }

    handleButtonClick = (event) => {
        const value = event.target.value;
        if (value === '='){
            const result = eval(this.state.input);
            this.setState({'result': result});
        } else if (value === 'C'){
            this.setState({input: ''});
        } else {
            this.setState({'input': this.state.input + value});
        }
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.input}></input>
                <p>{this.state.result}</p>
                {
                    ['0', '1', '2', '3', '4', '5',' 6', '7', '8', '9','+', '-', '*', 'C', '='].map((value)=>
                    <button key={value} value={value} onClick={this.handleButtonClick}>{value}</button>)
                }
            </div>
        )
    }
}

export default Calculatrice;