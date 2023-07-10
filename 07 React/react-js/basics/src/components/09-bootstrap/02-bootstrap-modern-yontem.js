import React from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'

const BootstrapModernYontem = () => {
    return (
        <Container className='mt-5'>
            <h2>Bootstrap Modern Yontem</h2>
            <Alert variant='warning'>
                Uyari Mesaji
            </Alert>
            <Row className='text-center'>
                <Col>H</Col>
                <Col>E</Col>
                <Col>L</Col>
                <Col>L</Col>
                <Col>O</Col>
            </Row>
            <Button variant='outline-danger'>
                Delete
            </Button>
        </Container>
    )
}

export default BootstrapModernYontem;