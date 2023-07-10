import React from 'react';
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

const ProductHeader = ({ numberA = 10 }) => {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Techno Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Ana Sayfa</Nav.Link>
                        <Nav.Link href="#action2">Urunler</Nav.Link>
                        <Nav.Link href="#">Hakkimizda</Nav.Link>
                        <Nav.Link href="#">Bize Ulasin</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ProductHeader