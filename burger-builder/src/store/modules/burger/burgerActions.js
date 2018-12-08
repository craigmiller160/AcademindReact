import * as burgerActionTypes from './burgerActionTypes';

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