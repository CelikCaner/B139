import React, { useContext } from 'react'
import { StoreContext } from '../store/store'
import { decrement, increment, reset } from '../store/counter/actions';

const Sayac = () => {
    const store = useContext(StoreContext);
    const { counterState, dispatchCounter } = store;
    const { counter } = counterState;
    console.log(counterState);
    // const { counterState: { counter }, dispatchCounter } = useContext(StoreContext);


    return (
        <div>
            <h1>SAYAC</h1>
            <h3>{counter}</h3>
            <button onClick={() => dispatchCounter(increment())}>ARTIR</button>
            <br />
            <br />
            <button onClick={() => dispatchCounter(decrement())}>AZALT</button>
            <br />
            <br />
            <button onClick={() => dispatchCounter(reset())}>SIFIRLA</button>
            <br />
            <br />
        </div>
    )
}

export default Sayac