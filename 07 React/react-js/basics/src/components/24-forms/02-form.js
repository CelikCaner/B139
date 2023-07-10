import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form2 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(5);

    // Number(num1)
    // +num1

    useEffect(() => {
        setNum3(+num1 + +num2)
    }, [num1, num2, num3])

    // console.log("state degisti")

    // for (let i = 0; i < 100000; i++) {
    //     console.log(i)
    // }

    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>First Number</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter first number'
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Second Number</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter second number'
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Total:</Form.Label>
                    <Form.Control
                        type='number'
                        value={num3}
                        disabled
                    />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Form2