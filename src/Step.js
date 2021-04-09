import React from 'react';
import './Step.css';

function Step (props) {
    return (
        <div>
             Krok:   
            <input type="number" value={props.stepValue} onChange={props.updateStepValueMth} />

        </div>
        

    );
}

export default Step;


