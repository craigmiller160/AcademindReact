import React from 'react';
import './UserOutput.css';

export default props => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>Second paragraph</p>
        </div>
    )
};