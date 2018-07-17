import React from 'react';
import PropTypes from 'prop-types';
import classes from './Order.css';
import { ingredientsPropType } from '../../model/ingredient/BurgerIngredients';

const Order = props => {
    const ingredients = Object.keys(props.ingredients)
        .map(key => (
            <span
                key={key}
                className={classes.ingredient}>
                {key} ({props.ingredients[key]})
            </span>
        ));

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

Order.propTypes = {
    price: PropTypes.number,
    ingredients: ingredientsPropType
};

export default Order;