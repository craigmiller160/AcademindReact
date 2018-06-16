import React from 'react';

export default props => {
    return (
        <div>
            <input type="text" onChange={props.change} value={props.username} />
        </div>
    )
};