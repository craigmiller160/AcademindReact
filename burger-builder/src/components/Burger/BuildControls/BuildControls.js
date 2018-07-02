import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import burgerIngredients from '../../../model/ingredient/BurgerIngredients';

const BuildControls = props => {
    const controlElems = burgerIngredients.map(ingredient => (
        <BuildControl
            key={ingredient.type}
            label={ingredient.label}
            added={() => props.ingredientAdded(ingredient.type)}
            removed={() => props.ingredientRemoved(ingredient.type)}
            disabled={props.disabledInfo[ingredient.type]} />
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