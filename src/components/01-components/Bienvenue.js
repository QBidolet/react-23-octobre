import React, {Component} from "react";

class Bienvenue extends Component {
    constructor(){
        super();
        this.state = {
            message: "Bienvenue dans notre équipe !"
        }
    }

    render(){
        return(<div>
            <h1>{this.state.message}</h1>
        </div>)
    }
}