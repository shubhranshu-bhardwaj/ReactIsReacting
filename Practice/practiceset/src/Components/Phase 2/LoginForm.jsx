/*
Problem:
Build a login form with email and password fields.
Validate that both fields are filled.
If email doesn’t contain "@", show error.
On successful submit, show "Login successful" message.
*/

import React, { useState } from "react";

const LoginForm = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let errs = {};
        if (!form.email.includes("@")) errs.email = "Enter a valid email";
        if (!form.password) errs.password = "Password is required";
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length === 0) setSuccess(true);
    };

    return (
        <div style={{ maxWidth: "350px", margin: "20px auto" }}>
            <h2>Login</h2>
            {success && <p style={{ color: "green" }}>Login successful ✅</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm