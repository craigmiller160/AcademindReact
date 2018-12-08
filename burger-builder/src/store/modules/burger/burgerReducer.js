import * as burgerActions from './burgerActionTypes';
import { findIngredient } from '../../../model/ingredient/BurgerIngredients';

const initialState = {
    ingredients: {
        bacon: 0,
        cheese: 0,
        meat: 0,
        salad: 0
    },
    totalPrice: 4
};


const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case burgerActions.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients
            };
        case burgerActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: state.ingredients[action.ingredientType] + 1
                },
                totalPrice: state.totalPrice + findIngredient(action.ingredientType).price
            };
        case burgerActions.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: state.ingredients[action.ingredientType] - 1
                },
                totalPrice: state.totalPrice - findIngredient(action.ingredientType).price
            };
        default:
            return state;
    }
};

export default burgerReducer;