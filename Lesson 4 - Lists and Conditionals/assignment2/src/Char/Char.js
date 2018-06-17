import React from 'react';
import './Char.css';

export default props => {
    return (
        <div className="Char">
            <p>{props.letter}</p>
        </div>
    );
};