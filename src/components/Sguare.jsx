import React from 'react';
import './Sguare.css'

const Sguare = (props) => {
    return (
        <button className='sguare'onClick={props.onClick}>{props.value}</button>
    );
}

export default Sguare;
