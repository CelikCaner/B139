import React, { useEffect, useState } from 'react'
import { settings } from './constants/constants';
import CurrencyContext from './store/store';
import Exchange from './components/Exchange';


const App = () => {
    const [currencies, setCurrencies] = useState({});

    const loadData = async () => {
        try {
            const response = await fetch(`${settings.API_URL}/latest?from=${settings.currency.default}`)
                .then((response) => response.json())
                .then((data) => setCurrencies(data.rates))
        } catch (error) {
            console.log(error)
        }
    }

    console.log(currencies?.USD)

    useEffect(() => {
        loadData();
    }, [])

    return (
        <CurrencyContext.Provider value={{ currencies }}>
            <div>
                <Exchange />
            </div>
        </CurrencyContext.Provider>
    )
}

export default App