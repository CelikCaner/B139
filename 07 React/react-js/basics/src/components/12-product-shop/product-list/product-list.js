import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../product-card/product-card';
import products from "../../../assets/data/products.json";

const ProductList = () => {
    return (
        <Container className='mt-5'>
            <Row className='gy-4 justify-content-center'>
                {
                    products.map((product) => (
                        <Col key={product.id} md={6} lg={5} xl={4}>
                            <ProductCard {...product} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default ProductList