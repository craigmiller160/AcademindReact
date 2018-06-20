import React from 'react';
import Square from './Square/Square';

const Row = props => {

    return (
        <div>
            <Square
                top={props.top}
                bottom={props.bottom}
                left={true}
                value={props.spaces.left}
                squareClick={props.squareClick} />
            <Square
                top={props.top}
                bottom={props.bottom}
                value={props.spaces.middle}
                squareClick={props.squareClick} />
            <Square
                top={props.top}
                bottom={props.bottom}
                right={true}
                value={props.spaces.right}
                squareClick={props.squareClick} />
        </div>
    );
};

export default Row;