import React from 'react';
import PropTypes from 'prop-types';
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
    const controlElems = controls.map(ctrl => (
        <BuildControl
            key={ctrl.type}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabledInfo[ctrl.type]} />
    ));

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controlElems}
            <button className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );
};

BuildControls.propTypes = {
    ingredientAdded: PropTypes.func.isRequired,
    ingredientRemoved: PropTypes.func.isRequired,
    disabledInfo: PropTypes.shape({
        salad: PropTypes.bool.isRequired,
        meat: PropTypes.bool.isRequired,
        cheese: PropTypes.bool.isRequired,
        bacon: PropTypes.bool.isRequired
    }).isRequired,
    price: PropTypes.number.isRequired
};

export default BuildControls;