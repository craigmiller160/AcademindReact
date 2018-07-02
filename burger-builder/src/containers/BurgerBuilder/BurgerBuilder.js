import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { findIngredient } from '../../model/ingredient/BurgerIngredients';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    updatePurchaseState() {
        this.setState(prevState => {
            const ingredients = {...prevState.ingredients};
            const sum = Object.keys(ingredients)
                .map(key => ingredients[key])
                .reduce((prev, next) => prev + next, 0);
            return {
                purchasable: sum > 0
            }
        });

    }

    addIngredientHandler = type => {
        const ingredient = findIngredient(type);

        this.setState(prevState => {
            const newIngredients = {...prevState.ingredients};
            newIngredients[type] += 1;
            const newTotal = prevState.totalPrice + ingredient.price;
            return {
                ingredients: newIngredients,
                totalPrice: newTotal
            }
        }, this.updatePurchaseState);
    };

    removeIngredientHandler = type => {
        const ingredient = findIngredient(type);

        this.setState(prevState => {
            const newIngredients = {...prevState.ingredients};
            if (newIngredients[type] > 0) {
                newIngredients[type] -= 1;
            }
            const newTotal = prevState.totalPrice - ingredient.price;
            return {
                ingredients: newIngredients,
                totalPrice: newTotal
            }
        }, this.updatePurchaseState);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    render() {
        const disabledInfo = {...this.state.ingredients};
        Object.keys(disabledInfo).forEach(key => disabledInfo[key] = disabledInfo[key] <= 0);

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }

}

export default BurgerBuilder;