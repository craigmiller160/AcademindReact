import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from '../../http/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as burgerActions from '../../store/modules/burger/burgerActions';
import * as errorActions from '../../store/modules/error/errorActions';
import * as orderActions from '../../store/modules/order/orderActions';
import { purchasable, disabledInfo } from '../../store/modules/burger/burgerSelectors';

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false
    };

    async componentDidMount() {
        this.props.initIngredients();
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        this.props.purchaseInit();
        this.props.history.push({
            pathname: '/checkout'
        });
    };

    render() {
        let modalContent = null;
        if (this.state.loading) {
            modalContent = <Spinner />;
        }
        else if (this.props.ingredients) {
            modalContent = (
                <OrderSummary
                    continue={this.purchaseContinueHandler}
                    cancel={this.purchaseCancelHandler}
                    ingredients={this.props.ingredients}
                    price={this.props.totalPrice} />
            );
        }

        let burgerStuff = <Spinner />;
        if (this.props.ingredients) {
            burgerStuff = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        ingredientAdded={this.props.addIngredient}
                        ingredientRemoved={this.props.removeIngredient}
                        disabledInfo={this.props.disabledInfo}
                        price={this.props.totalPrice}
                        purchasable={this.props.purchasable}
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

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        purchasable: purchasable(state),
        disabledInfo: disabledInfo(state),
        error: state.error.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setIngredients: ingredients => dispatch(burgerActions.setIngredients(ingredients)),
        addIngredient: ingredientType => dispatch(burgerActions.addIngredient(ingredientType)),
        removeIngredient: ingredientType => dispatch(burgerActions.removeIngredient(ingredientType)),
        initIngredients: () => dispatch(burgerActions.initIngredients()),
        setError: error => dispatch(errorActions.setError(error)),
        purchaseInit: () => dispatch(orderActions.purchaseInit())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosOrders));