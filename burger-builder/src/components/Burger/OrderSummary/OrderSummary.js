import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import { ingredientsPropType } from '../../../model/ingredient/BurgerIngredients';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }

    render() {
        const style = {
            textTransform: 'capitalize',
            fontWeight: 'bold'
        };

        const ingredientSummary = Object.entries(this.props.ingredients)
            .map(entry => <li key={entry[0]}><span style={style}>{entry[0]}:</span> {entry[1]}</li>);

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button clicked={this.props.cancel} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.continue} btnType="Success">CONTINUE</Button>
            </Aux>
        );
    }
}

OrderSummary.propTypes = {
    ingredients: ingredientsPropType,
    cancel: PropTypes.func.isRequired,
    'continue': PropTypes.func.isRequired,
    price: PropTypes.number.isRequired
};

export default OrderSummary;