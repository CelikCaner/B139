import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from "./actions"
import { counterInitialState } from "./initialState"

export const counterReducer = (state = counterInitialState, action) => {
    if (action.type === COUNTER_INCREMENT) {
        return {
            ...state,  // Bu ornek icin state'i spread yaparak almak zorunda değiliz. Cunku initialState icerisinde yalnizca tek bir state ifadesi var ve biz o state'i degistirmek istiyoruz.
            counter: state.counter + 1
        }
    } else if (action.type === COUNTER_DECREMENT) {
        return {
            ...state,
            counter2: state.counter2 - 1
        }
    } else if (action.type === COUNTER_RESET) {
        return {
            ...state,
            counter: 0
        }
    } else {
        return state;
    }

    // switch (action.type) {
    //     case COUNTER_INCREMENT:
    //         return {
    //             ...state,  // Bu ornek icin state'i spread yaparak almak zorunda değiliz. Cunku initialState icerisinde yalnizca tek bir state ifadesi var ve biz o state'i degistirmek istiyoruz.
    //             counter: state.counter + 1
    //         }
    //     case COUNTER_DECREMENT:
    //         return {
    //             ...state,
    //             counter: state.counter - 1
    //         }
    //     case COUNTER_RESET:
    //         return {
    //             ...state,
    //             counter: 0
    //         }
    //     default:
    //         return state;
    // }
}