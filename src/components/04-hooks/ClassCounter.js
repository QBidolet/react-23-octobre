import React, {Component} from "react";

class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount(){
        this.setState((prevState)=>({counter: prevState.counter + 1}));
        // this.setState({counter: this.counter + 1});
    }

    render () {
        return(
            <div>
                <h1>Compteur avec une classe</h1>
                <p>Compte : {this.state.counter}</p>
                <button onClick={this.incrementCount}>Incrémenter</button>
            </div>
        )
    }
}

export default ClassCounter;