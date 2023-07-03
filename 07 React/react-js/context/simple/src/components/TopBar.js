import React, { useContext } from 'react';
import './TopBar.css';
import CurrencyContext from '../store/store';

const TopBar = () => {
  const store = useContext(CurrencyContext);
  const { currencies } = store;
  console.log(currencies);

  const formatCurrency = (currency) => {
    return (1 / currencies[currency]).toFixed(4);
  };

  return (
    <header>
      <nav className="navbar">
        <h3>Exchange</h3>
        <div>
          <div>$: {formatCurrency('USD')} ₺</div>
          <div>€: {formatCurrency('EUR')} ₺</div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
