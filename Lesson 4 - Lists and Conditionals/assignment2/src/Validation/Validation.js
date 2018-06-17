import React from 'react';

const MAX_LENGTH = 5;

export default props => {
    let message = 'Perfect size';
    if (props.text.length < MAX_LENGTH) {
        message = 'Too short';
    }
    else if (props.text.length > MAX_LENGTH) {
        message = 'Too long';
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
}