import React from 'react';
import Apples, { Bananas1, Orange } from './components/01-my-house';
import Jsx1 from './components/02-jsx/01-jsx';
import Jsx2 from './components/02-jsx/02-jsx';
import Jsx3 from './components/02-jsx/03-jsx';
import Jsx4 from './components/02-jsx/04-jsx';
import InlineStyling from './components/03-styles/01-inline-styling';
import InternalStyling from './components/03-styles/02-internal-styling';

export default function App() {
  return (
    <>
      <Apples />
      <br />
      <Bananas1 />
      <br />
      <Orange />
      <br />
      <Jsx1 />
      <br />
      <Jsx2 />
      <br />
      <Jsx3 />
      <br />
      <Jsx4 />
      <br />
      <InlineStyling />
      <br />
      <InternalStyling />
      <br />
    </>
  );
}
