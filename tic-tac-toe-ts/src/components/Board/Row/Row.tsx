import * as React from 'react';
import { IRowProps } from "./IRowProps";
import Square from "./Square/Square";

const Row: React.SFC<IRowProps> = props => {

    return (
        <div>
            <Square
                bottom={props.bottom}
                left={true}
                right={false}
                squareClick={props.squareClick}
                top={props.top}
                value={props.spaces.left} />
            <Square
                bottom={props.bottom}
                left={false}
                right={false}
                squareClick={props.squareClick}
                top={props.top}
                value={props.spaces.middle} />
            <Square
                top={props.top}
                bottom={props.bottom}
                left={false}
                right={true}
                value={props.spaces.right}
                squareClick={props.squareClick} />
        </div>
    );
};

Row.defaultProps = {
    bottom: false,
    top: false
};

export default Row;