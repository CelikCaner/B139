import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Delete } from '@mui/icons-material';

const Person = () => {
  return (
    <Card className="my-3">
      <Row>
        <Col sm={4}>
          <Card.Img src={require('../../../assets/img/person1.jpg')} />
        </Col>
        <Col sm={8}>
          <Card.Body>
            <Card.Title>Rebecca Jenkins</Card.Title>
            <Card.Text>Yas 23</Card.Text>
            <Delete />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Person;
