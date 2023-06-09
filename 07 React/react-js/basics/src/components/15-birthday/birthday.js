import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import peopleData from '../../assets/data/people.json';
import Person from './person/person';

const Birthday = () => {
  const [people, setPeople] = useState(peopleData);
  console.log(people);

  return (
    <Container>
      <h2>Bugun Doganlar</h2>
      <p>Bugun dogan 10 kisi var.</p>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
      <Button variant="danger">Hepsini Temizle</Button>
    </Container>
  );
};

export default Birthday;
