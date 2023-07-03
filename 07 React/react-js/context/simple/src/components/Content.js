import React, { useState } from 'react';
const Content = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const handleChange = (e) => {};
  return (
    <div>
      <form>
        <input
          type="text"
          name="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={handleChange}
        />
        <select name="currency" value={currency} onChange={handleChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </form>
    </div>
  );
};
export default Content;
