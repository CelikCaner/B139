export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_RESET = 'COUNTER_RESET';

export const increment = () => {
    return {
        type: COUNTER_INCREMENT
    }
};

export const decrement = () => ({ type: COUNTER_DECREMENT });

export const reset = () => ({ type: COUNTER_RESET });