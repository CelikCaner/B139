import React from 'react';
import { Button } from 'react-bootstrap';

const ChildComponent = (props) => {
  //   const increaseCounter = () => {
  //     props.handleCounter(1);
  //   };

  return (
    <div>
      <h2>Cift yonlu veri aktarimi</h2>
      <Button
        variant="outline-success"
        onClick={() => props.setCounter((prev) => prev + 1)}
      >
        Arttir
      </Button>
    </div>
  );
};

export default ChildComponent;
