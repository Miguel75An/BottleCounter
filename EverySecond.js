import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint } from '@fortawesome/free-solid-svg-icons'


class BottleCounter extends Component{
    constructor(probs){
        super(probs);

        this.state = {
            bottles: 0
        };

        this.timerTick = this.timerTick.bind(this);
    }

    timerTick(){
        this.setState({bottles: this.state.bottles + 1500 });
    }

    componentDidMount(){
        setInterval(this.timerTick,1000);
    }

    render() {

        var counterStyle = {
            color: "#1860AD",
            fontSize: 50
        };

        var count = this.state.bottles.toLocaleString();
        
    
        return (
          <h1 style={counterStyle}>{count}</h1>
        );
    }
}

// Bottle counter display component
class BottleCounterDisplay extends Component{
    render(){
        var commonStyle = {
            margin: 0,
            padding: 0
        };

        var divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "#87cefa",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#13A065",
            borderRadius: 10
        };

        var textStyles = {
            emphasis: {
            fontSize: 38,
            ...commonStyle
            },
            smallEmphasis: {
            ...commonStyle
            },
            small: {
            fontSize: 17,
            opacity: 0.5,
            ...commonStyle
            }
        }

        return(
            <div style={divStyle}>
                <BottleCounter />
                <h2 style={textStyles.emphasis}>BOTTLES OF WATER DRANK:</h2>    
                <h2 style={textStyles.smallEmphasis}>IN THE US</h2>
                <p style={textStyles.small}>(Since you loaded this example)</p>
                <FontAwesomeIcon icon={faTint} size="7x" color="#1860AD" />
            </div>
        );
    }
}

export default BottleCounterDisplay;
