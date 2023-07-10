import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ReactRouterDom = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(userInfo => setData(userInfo));
    }, [])

    console.log(data);

    return (
        <div>
            <h1>React Router Dom</h1>
            <ul>
                {
                    data.map(item => (
                        <Link key={item.id} to={`/router-params/${item.id}`}>
                            {item.name}
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default ReactRouterDom