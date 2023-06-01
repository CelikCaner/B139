import React from 'react';

const Jsx4 = () => {
  const names = [
    'Maria Rodriguez',
    'Michael Chen',
    'Sarah Kim',
    'Ahmed Hassan',
  ];
  const cities = ['Miami', 'Toronto', 'Seoul', 'Cairo'];

  names.map((name) => {
    return <div>{name}</div>;
  });

  return <div>Jsx4</div>;
};

export default Jsx4;
