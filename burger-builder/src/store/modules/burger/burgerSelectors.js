import { createSelector } from 'reselect';

const getPurchasable = state => {
    const sum = Object.keys(state.ingredients)
        .map(key => state.ingredients[key])
        .reduce((prev, next) => prev + next, 0);
    return sum > 0;
};

export const purchasable = createSelector(
    [getPurchasable],
    purchasable => purchasable
);