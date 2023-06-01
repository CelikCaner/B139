import React from 'react';

export const InlineStyling = () => {
  return (
    <div
      style={{
        border: '1px solid red',
        padding: '1rem',
        borderRadius: '1rem',
        textAlign: 'center',
      }}
    >
      <h2 style={{ margin: 0, color: 'navy' }}>React Fundamentals</h2>
      <p style={{ fontStyle: 'italic', color: 'rgba(155,135,120,0.7' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
        obcaecati exercitationem ut recusandae odit, nobis vitae libero
        voluptatibus eaque culpa, aspernatur blanditiis. Quasi, deserunt!
        Voluptatibus optio unde doloribus delectus aliquam?
      </p>
    </div>
  );
};

export default InlineStyling;
