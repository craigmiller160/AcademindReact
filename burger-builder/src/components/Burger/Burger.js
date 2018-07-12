import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { ingredientsPropType } from '../../model/ingredient/BurgerIngredients';

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
    ingredients: ingredientsPropType
};

export default Burger;