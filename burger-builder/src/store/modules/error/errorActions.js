import * as errorActionTypes from './errorActionTypes';

export const setError = error => {
    return {
        type: errorActionTypes.SET_ERROR,
        error
    }
};