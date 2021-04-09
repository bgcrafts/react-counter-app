import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';

// KOMPONENT KLASOWY

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1
        }

        // bindowanie - gdyby funkcja changeValue była w ES5
        // this.changeValue = this.changeValue.bind(this);
    }

    updateStepValue = (e) => {
        this.setState({ stepValue: +e.target.value })
    }

    changeValue = (action) => {
        // let currentCounterValue = this.state.counterValue;

        // if (action ==='add') {

        //     currentCounterValue += 1;

        // } else if (action ==='reinit') {

        //     currentCounterValue = this.props.initValue;

        // } else {

        //     currentCounterValue = 0;
        // }

        // przekazanie obiektu:
        // this.setState(

        //     counterValue: currentCounterValue
        // });


        // przekazanie funkcji:
        // this.setState((prevState) => {
        //     return ({
        //         counterValue: prevState.counterValue +1
        //     });

        this.setState((prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {

                currentCounterValue += this.state.stepValue;

            } else if (action === 'reinit') {

                currentCounterValue = prevProps.initValue;

            } else {

                currentCounterValue = 0;
            }
            return ({
                counterValue: currentCounterValue
            });
        });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        })
    }
    render() {

        let clockElement = '';

        if (this.state.showClock) {
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
            
        } else {
            clockElement = <span className="show-clock" onClick={this.toggleClock}>show clock</span>;
        }

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
                {clockElement}
                <Step stepValue={this.state.stepValue} updateStepValueMth={this.updateStepValue} />
            </div>
        );
    }
}

export default Counter;










// KOMPONENT FUNKCYJNY
// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);
//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>

//         </div>
//     );
// }

// export default Counter;