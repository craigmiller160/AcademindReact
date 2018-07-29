export const INC_COUNTER = 'INC_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';
export const SUB_COUNTER = 'SUB_COUNTER';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

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

export const storeResult = value => {
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