import React, { useContext, useState } from 'react'
import CurrencyContext from '../store/store';

const Content = () => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('USD');
    const store = useContext(CurrencyContext);
    const { currencies } = store;

    const handleChange = (e) => {
        // const { name, value } = e.target;
        if (e.target.name === "amount") {
            setAmount(e.target.value);
        }

        if (e.target.name === "currency") {
            setCurrency(e.target.value);
        }
    };

    console.log(currencies);

    const result = amount ? (amount / currencies[currency]).toFixed(2) : 0;

    console.log(amount, currency)

    return (
        <div>
            <form>
                <input
                    type='number'
                    name="amount"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={handleChange}
                />
                <select
                    name="currency"
                    value={currency}
                    onChange={handleChange}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <p>
                    Result: {result} ₺
                </p>
            </form>
        </div>
    )
}

export default Content