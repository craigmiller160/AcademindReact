import Ingredient from './Ingredient';
import * as ingredientTypes from './BurgerIngredientTypes';

const burgerIngredients = [
    new Ingredient(ingredientTypes.SALAD_TYPE, 0.5),
    new Ingredient(ingredientTypes.CHEESE_TYPE, 0.4),
    new Ingredient(ingredientTypes.MEAT_TYPE, 1.3),
    new Ingredient(ingredientTypes.BACON_TYPE, 0.7)
];

export default burgerIngredients;

export const findIngredient = (type, failOnMissing = true) => {
    const ingredient = burgerIngredients.find(item => item.type === type);
    if (!ingredient && failOnMissing) {
        throw new Error(`Unable to find ingredient for type ${type}`);
    }
    return ingredient;
};

