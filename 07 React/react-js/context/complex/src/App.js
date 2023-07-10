import React, { useReducer } from 'react'
import AppRouter from './router/router'
import { StoreContext } from './store/store'
import { counterInitialState } from './store/counter/initialState';
import { counterReducer } from './store/counter/reducers';

const App = () => {
    const [counterState, dispatchCounter] = useReducer(counterReducer, counterInitialState);

    return (
        <>
            <StoreContext.Provider value={{ counterState, dispatchCounter }}>
                <AppRouter />
            </StoreContext.Provider>
        </>
    )
}

export default App