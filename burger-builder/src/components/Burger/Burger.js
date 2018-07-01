import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    const ingredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])]
                .map((_,i) => <BurgerIngredient type={key} key={key + i} />)
        })
        .reduce((prev, next) => prev.concat(next), []);

    let burgerBody;
    if (ingredients.length === 0) {
        burgerBody = <p>Please start adding ingredients</p>;
    }
    else {
        burgerBody = ingredients;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {burgerBody}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

Burger.propTypes = {
    ingredients: PropTypes.shape({
        salad: PropTypes.number,
        bacon: PropTypes.number,
        cheese: PropTypes.number,
        meat: PropTypes.number
    }).isRequired
};

export default Burger