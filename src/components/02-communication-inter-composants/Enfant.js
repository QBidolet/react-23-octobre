import React, {Component} from 'react';

class Enfant extends Component {
 
    render() {
        const { data, handleButtonClick } = this.props;
        // const data = this.props.data;
        
        return (
            <div>
                <h3>Composant enfant</h3>
                <p>Props du parent : {data}</p>
                <button onClick={handleButtonClick}>Changer la donnée du parent.</button>
            </div>
        )
    }
}

export default Enfant;