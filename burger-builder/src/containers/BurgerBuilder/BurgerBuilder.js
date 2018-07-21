import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from '../../http/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import queryString from 'query-string';
import { connect } from 'react-redux';
import * as burgerActions from '../../store/modules/burger/burgerActions';
import { purchasable, disabledInfo } from '../../store/modules/burger/burgerSelectors';

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false
    };

    async componentDidMount() {
        try {
            const res = await axiosOrders.get('/ingredients.json'); //TODO this should be moved to redux after i learn how to do asynchronous logic there
            this.props.setIngredients(res.data);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        const queryParams = {...this.state.ingredients}; //TODO delete this
        queryParams.totalPrice = this.props.totalPrice;

        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString.stringify(queryParams)}`
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
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: purchasable(state),
        disabledInfo: disabledInfo(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setIngredients: ingredients => dispatch({type: burgerActions.SET_INGREDIENTS, ingredients}),
        addIngredient: ingredientType => dispatch({type: burgerActions.ADD_INGREDIENT, ingredientType}),
        removeIngredient: ingredientType => dispatch({type: burgerActions.REMOVE_INGREDIENT, ingredientType})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosOrders));