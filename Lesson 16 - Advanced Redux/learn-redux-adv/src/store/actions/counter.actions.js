import { ADD_COUNTER, DEC_COUNTER, INC_COUNTER, SUB_COUNTER } from './actionTypes';

export const incCounter = () => {
    return {
        type: INC_COUNTER
    }
};

export const addCounter = value => {
    return {
        type: ADD_COUNTER,
        value
    }
};

export const decCounter = () => {
    return {
        type: DEC_COUNTER
    }
};

export const subCounter = value => {
    return {
        type: SUB_COUNTER,
        value
    }
};