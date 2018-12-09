import * as burgerActions from './burgerActionTypes';
import { findIngredient } from '../../../model/ingredient/BurgerIngredients';

const initialState = {
    ingredients: null,
    totalPrice: 4
};

const setIngredients = (state, action) => {
    return {
        ...state,
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        }
    }
};

const addIngredient = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientType]: state.ingredients[action.ingredientType] + 1
        },
        totalPrice: state.totalPrice + findIngredient(action.ingredientType).price
    };
};

const removeIngredient = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientType]: state.ingredients[action.ingredientType] - 1
        },
        totalPrice: state.totalPrice - findIngredient(action.ingredientType).price
    };
};

const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case burgerActions.SET_INGREDIENTS:
            return setIngredients(state, action);
        case burgerActions.ADD_INGREDIENT:
            return addIngredient(state, action);
        case burgerActions.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        default:
            return state;
    }
};

export default burgerReducer;