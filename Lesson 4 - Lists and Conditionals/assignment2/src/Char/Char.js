import React from 'react';
import './Char.css';

export default props => {
    return (
        <div className="Char" onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    );
};