import { DELETE_RESULT, STORE_RESULT } from './actionTypes';

export const storeResult = value => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(value));
        }, 2000);
    }
};

export const saveResult = value => {
    const updatedResult = value * 2;
    return {
        type: STORE_RESULT,
        value: updatedResult
    }
};

export const deleteResult = value => {
    return {
        type: DELETE_RESULT,
        value
    }
};