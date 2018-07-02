import React from 'react';
import Aux from '../../../hoc/Aux';
import { ingredientsPropType } from '../../../model/ingredient/BurgerIngredients';

const OrderSummary = props => {
    const style = {
        textTransform: 'capitalize',
        fontWeight: 'bold'
    };

    const ingredientSummary = Object.entries(props.ingredients)
        .map(entry => <li key={entry[0]}><span style={style}>{entry[0]}:</span> {entry[1]}</li>);

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

OrderSummary.propTypes = {
    ingredients: ingredientsPropType
};

export default OrderSummary;