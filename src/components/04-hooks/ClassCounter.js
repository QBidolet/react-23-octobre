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
        this.setState((prevState)=>({count: prevState.count + 1}));
        // this.setState({counter: this.counter + 1});
    }
}

export default ClassCounter;