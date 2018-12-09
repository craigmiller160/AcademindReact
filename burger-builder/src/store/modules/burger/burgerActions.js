import * as burgerActionTypes from './burgerActionTypes';
import axiosOrders from '../../../http/axios-orders';
import * as errorActions from '../error/errorActions';

export const addIngredient = ingredientType => {
    return {
        type: burgerActionTypes.ADD_INGREDIENT,
        ingredientType
    }
};

export const removeIngredient = ingredientType => {
    return {
        type: burgerActionTypes.REMOVE_INGREDIENT,
        ingredientType
    }
};

export const setIngredients = ingredients => {
    return {
        type: burgerActionTypes.SET_INGREDIENTS,
        ingredients
    }
};

export const initIngredients = () => {
    return async dispatch => {
        try {
            const res = await axiosOrders.get('/ingredients.json');
            dispatch(setIngredients(res.data));
        }
        catch (ex) {
            errorActions.setError(ex);
        }
    }
};