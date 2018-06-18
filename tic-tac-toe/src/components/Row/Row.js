import React from 'react';
import Square from './Square/Square';

const Row = props => {

    return (
        <div>
            <Square top={props.top} bottom={props.bottom} left={true} />
            <Square top={props.top} bottom={props.bottom} />
            <Square top={props.top} bottom={props.bottom} right={true} />
        </div>
    );
};

export default Row;