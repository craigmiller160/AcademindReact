import { createSelector } from 'reselect';

const getPurchasable = state => {
    const sum = Object.keys(state.ingredients)
        .map(key => state.ingredients[key])
        .reduce((prev, next) => prev + next, 0);
    return sum > 0;
};

const getDisabledInfo = state => {
    const disabledInfo = {};
    Object.keys(state.ingredients).forEach(key => disabledInfo[key] = state.ingredients[key] <= 0);
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