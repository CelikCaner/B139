import React, { useState } from 'react'

const Login = () => {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email:</label>
                <br />
                <input type="email"
                    placeholder="Email'iniz giriniz"
                    name="email"
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password"
                    placeholder="Şifrenizi giriniz"
                    name="password"
                    onChange={handleChange}
                />
                <br />
                <br />
                <button>FORMU GONDER</button>
            </form>
        </div>
    )
}

export default Login