import { INCREMENET, DECREMENT } from "../counter/actionTypes";

export const increment = (value) => {
    return {
        type: INCREMENET,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};
