import React from 'react';
import Square from './Square/Square';

const Row = props => {

    return (
        <div>
            <Square
                top={props.top}
                bottom={props.bottom}
                left={true}
                value={props.spaces.left} />
            <Square
                top={props.top}
                bottom={props.bottom}
                value={props.spaces.middle} />
            <Square
                top={props.top}
                bottom={props.bottom}
                right={true}
                value={props.spaces.right} />
        </div>
    );
};

export default Row;