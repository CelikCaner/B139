import React from 'react'

const Jsx4 = () => {
    const names = ["Maria Rodriguez", "Michael Chen", "Sarah Kim", "Ahmed Hassan", "Sarah Kim"];
    const cities = ["Miami", "Toronto", "Seoul", "Cairo"];

    // const nameInfo = names.map((name, index) => {
    //     return <div>{name}</div>
    // });

    const nameInfo = names.map((name, index) => <div>{name}</div>)

    const check = true;

    return (
        <div>
            <ul>
                {
                    names.map((name, index) => <li key={index}>{name}</li>)
                }
            </ul>
            <select>
                {
                    cities.map((city, index) => <option key={index}>{city}</option>)
                }
            </select>
        </div>
    )
}

export default Jsx4;