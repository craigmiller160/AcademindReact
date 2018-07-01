import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Meat',
        type: 'meat'
    }
];

const BuildControls = props => {
    const controlElems = controls.map(ctrl => <BuildControl key={ctrl.type} label={ctrl.label}/>);

    return (
        <div className={classes.BuildControls}>
            {controlElems}
        </div>
    );
};

export default BuildControls;