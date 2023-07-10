import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import UserCard from './02-user-card';

const Fetch2 = () => {
    const [users, setUsers] = useState([]);
    const [flag, setFlag] = useState(false);

    // TODO: API'yi env'de sakla


    const updateUser = async (userId, payload) => {
        await fetch(`https://648a1ac75fa58521cab0d225.mockapi.io/api/v1/users/${userId}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(payload)
        })

        setFlag(prevVal => !prevVal);
    };

    const userInfo = {
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1068.jpg",
        country: "British Indian Ocean Territory (Chagos Archipelago)",
        email: "allangislason@gmail.com",
        firstName: "Buyuk Iskender",
        id: "10",
        lastName: "Wake"
    };

    // load user data
    const loadUserData = async () => {
        await fetch('https://648a1ac75fa58521cab0d225.mockapi.io/api/v1/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error.message));
    }

    useEffect(() => {
        loadUserData();
    }, [flag]);

    return (
        <Container>
            <Row className='gap-1 mb-3'>
                {
                    users?.map((user) => (<UserCard key={user.id} {...user} />))
                }
            </Row>
            <Button onClick={() => updateUser(10, userInfo)}>
                UPDATE USER
            </Button>
        </Container>
    )
}

export default Fetch2;