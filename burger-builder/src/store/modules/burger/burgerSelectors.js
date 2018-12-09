import { createSelector } from 'reselect';

const getPurchasable = state => {
    const sum = Object.keys(state.burger.ingredients)
        .map(key => state.burger.ingredients[key])
        .reduce((prev, next) => prev + next, 0);
    return sum > 0;
};

const getDisabledInfo = state => {
    const disabledInfo = {};
    Object.keys(state.burger.ingredients).forEach(key => disabledInfo[key] = state.burger.ingredients[key] <= 0);
    return disabledInfo;
};

export const purchasable = createSelector(
    [getPurchasable],
    purchasable => purchasable
);

export const disabledInfo = createSelector(
    [getDisabledInfo],
    disabledInfo => disabledInfo
);