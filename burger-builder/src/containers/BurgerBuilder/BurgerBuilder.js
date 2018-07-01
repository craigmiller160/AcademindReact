import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = type => {
        this.setState(prevState => {
            const newIngredients = {...prevState.ingredients};
            newIngredients[type] += 1;
            const newTotal = prevState.totalPrice + INGREDIENT_PRICES[type];
            return {
                ingredients: newIngredients,
                totalPrice: newTotal
            }
        });
    };

    removeIngredientHandler = type => {
        this.setState(prevState => {
            const newIngredients = {...prevState.ingredients};
            if (newIngredients[type] > 0) {
                newIngredients[type] -= 1;
            }
            const newTotal = prevState.totalPrice - INGREDIENT_PRICES[type];
            return {
                ingredients: newIngredients,
                totalPrice: newTotal
            }
        });
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} />
            </Aux>
        );
    }

}

export default BurgerBuilder;