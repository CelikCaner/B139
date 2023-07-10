import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import axios from 'axios';

const Form3 = () => {
    const [form, setForm] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phoneNumber: "+4433322110",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        // const dto = { ...form };
        const payload = {...form}
        // await axios.post("https://ornek.com", dto);
        await axios.post("https://ornek.com", payload);
    }

    return (
        <Container>
            <h2>Form — Pratik 1</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Please enter your first name..."
                        value={form.firstName}
                        onChange={(e) => setForm(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Please enter your last name..."
                        value={form.lastName}
                        onChange={(e) => setForm(prev => ({ ...prev, lastName: e.target.value }))}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder="Please enter your email..."
                        value={form.email}
                        onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Please enter your phone number..."
                        value={form.phoneNumber}
                        onChange={(e) => setForm(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    />
                </Form.Group>
                <Button type='submit'>
                    GÖNDER
                </Button>
            </Form>
        </Container>
    )
}

export default Form3