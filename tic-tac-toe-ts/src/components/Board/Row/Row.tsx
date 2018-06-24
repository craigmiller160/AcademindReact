import * as React from 'react';
import { IRowProps } from "./IRowProps";
import Square from "./Square/Square";

const Row: React.SFC<IRowProps> = props => {

    return (
        <div>
            <Square
                top={props.top}
                bottom={props.bottom}
                left={true}
                right={false}
                value={props.spaces.left}
                squareClick={props.squareClick} />
            <Square
                top={props.top}
                bottom={props.bottom}
                value={props.spaces.middle}
                left={false}
                right={false}
                squareClick={props.squareClick} />
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
    top: false,
    bottom: false
};

export default Row;