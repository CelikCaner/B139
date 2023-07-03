import React, { useState } from 'react';
import { settings } from '../constants/constants';

const App = () => {
  const [currencies, setCurrencies] = useState();

  const loadData = async () => {
    try {
      const response = await fetch(`${settings.API_URL}/latest?`);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>App</div>;
};

export default App;
