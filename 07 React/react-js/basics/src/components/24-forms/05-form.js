import React, { useState } from 'react'
import { Button, Container, Form, Toast } from "react-bootstrap";

const Form5 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: 'diger',
        terms: false
    });

    const [errorFormData, setErrorFormData] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        terms: false
    });

    // (e) => setForm(prev => ({ ...prev, firstName: e.target.value }))

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        // const firstName = "Ad";

        setFormData(prev => ({
            ...prev,
            [e.target.name]: value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.terms) {
            setErrorFormData(prev => ({ ...prev, terms: true }))
            return;
        };

        if (formData.firstName.length < 3) {
            alert("Kullanici adi en az 3 karakter olmalidir!");
            return;
        }

        if (/[^a-zA-Z]/.test(formData.firstName)) {
            alert("Kullanici adi sadece harflerden olusabilir!");
            return;
        };

        console.log(formData);
    }

    return (
        <Container>
            <h2>Form — Manuel Validasyon</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Ad</Form.Label>
                    <Form.Control
                        type="text"
                        name='firstName'
                        placeholder="Adinizi Giriniz"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Soyad</Form.Label>
                    <Form.Control
                        type="text"
                        name='lastName'
                        placeholder="Soyadinizi Giriniz"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>E-posta Adresi</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="E-posta Adresinizi Giriniz"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Telefon Numarasi</Form.Label>
                    <Form.Control
                        type="number"
                        name='phoneNumber'
                        placeholder="Telefon Numaranizi Giriniz"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Cinsiyet</Form.Label>
                    <Form.Group>
                        <Form.Check
                            label='Kadin'
                            type='radio'
                            name='gender'
                            id='kadin1'
                            value='kadin'
                            onChange={handleChange}
                            inline
                        />
                        <Form.Check
                            label='Erkek'
                            type='radio'
                            name='gender'
                            id='erkek1'
                            value="erkek"
                            onChange={handleChange}
                            inline
                        />
                        <Form.Check
                            label='Diger'
                            type='radio'
                            name='gender'
                            id='diger1'
                            value="diger"
                            onChange={handleChange}
                            inline
                        />
                    </Form.Group>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Check
                        type='checkbox'
                        label='Kullanici Sozlesmesini Okudum ve Kabul Ediyorum'
                        name='terms'
                        id='terms'
                        checked={formData.terms}
                        onChange={handleChange}
                    />
                    {
                        errorFormData.terms && (
                            <p className='text-danger'>*Kullanici sozlesmesini kabul etmelisiniz!</p>
                        )
                    }
                </Form.Group>
                <Button type='submit'>SEND</Button>
            </Form>
        </Container>
    )
}

export default Form5