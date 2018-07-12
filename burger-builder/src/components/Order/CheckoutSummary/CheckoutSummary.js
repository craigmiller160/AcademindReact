import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
import { ingredientsPropType } from '../../../model/ingredient/BurgerIngredients';

const CheckoutSummary = props => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div className={classes.BurgerWrapper}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button clicked={props.checkoutCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.checkoutContinued} btnType="Success">CONTINUE</Button>
        </div>
    );
};

CheckoutSummary.propTypes = {
    ingredients: ingredientsPropType,
    checkoutCancelled: PropTypes.func,
    checkoutContinued: PropTypes.func
};

export default CheckoutSummary;