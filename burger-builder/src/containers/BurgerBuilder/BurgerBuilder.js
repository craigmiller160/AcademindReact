import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { findIngredient } from '../../model/ingredient/BurgerIngredients';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from '../../http/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import queryString from 'query-string';

class BurgerBuilder extends Component {

    //TODO in the future, look into splitting this component up

    state = {
        ingredients: null, //TODO this goes to redux
        totalPrice: 4, //TODO this goes to redux
        purchasable: false,
        purchasing: false,
        loading: false
    };

    async componentDidMount() {
        try {
            const res = await axiosOrders.get('/ingredients.json');
            this.setState({ingredients: res.data});
        }
        catch (ex) {
            console.log(ex);
        }
    }

    isPurchasable(ingredients) {
        const sum = Object.keys(ingredients)
            .map(key => ingredients[key])
            .reduce((prev, next) => prev + next, 0);
        return sum > 0;
    }

    addIngredientHandler = type => {
        const ingredient = findIngredient(type);

        this.setState(prevState => {
            const newIngredients = {...prevState.ingredients};
            newIngredients[type] += 1;
            const newTotal = prevState.totalPrice + ingredient.price;
            return {
                ingredients: newIngredients,
                totalPrice: newTotal,
                purchasable: this.isPurchasable(newIngredients)
            }
        });
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
                totalPrice: newTotal,
                purchasable: this.isPurchasable(newIngredients)
            }
        });
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        const queryParams = {...this.state.ingredients};
        queryParams.totalPrice = this.state.totalPrice;

        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString.stringify(queryParams)}`
        });
    };

    render() {
        const disabledInfo = {...this.state.ingredients};
        Object.keys(disabledInfo).forEach(key => disabledInfo[key] = disabledInfo[key] <= 0);

        let modalContent = null;
        if (this.state.loading) {
            modalContent = <Spinner />;
        }
        else if (this.state.ingredients) {
            modalContent = (
                <OrderSummary
                    continue={this.purchaseContinueHandler}
                    cancel={this.purchaseCancelHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice} />
            );
        }

        let burgerStuff = <Spinner />;
        if (this.state.ingredients) {
            burgerStuff = (
                <Aux>
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

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {modalContent}
                </Modal>
                {burgerStuff}
            </Aux>
        );
    }

}

export default withErrorHandler(BurgerBuilder, axiosOrders);