import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import ChildComponent from './02-child-component';

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);

    // const handleCounter = (val) => {
    //     setCounter(prev => prev + val);
    // }

    return (
        <Container>
            <div>
                <p>Counter: <span className='text-danger'>{counter}</span></p>
            </div>
            {/* <ChildComponent handleCounter={handleCounter} /> */}
            <ChildComponent setCounter={setCounter} />
        </Container>
    )
}

export default ParentComponent