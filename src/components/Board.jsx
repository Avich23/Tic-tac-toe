import React from 'react';
import './Board.css'
import Sguare from './Sguare';

const Board = ({sguares, click}) => {
    return (
        <div className='board'>
            {
                sguares.map((sguare, i) => (
                    <Sguare key={i} value={sguare} onClick={() => click(i)}/>
                ))
            }
        </div>
    );
}

export default Board;
