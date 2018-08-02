import { DELETE_RESULT, STORE_RESULT } from './actionTypes';

export const storeResult = value => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(value));
        }, 2000);
    }
};

export const saveResult = value => {
    return {
        type: STORE_RESULT,
        value
    }
};

export const deleteResult = value => {
    return {
        type: DELETE_RESULT,
        value
    }
};