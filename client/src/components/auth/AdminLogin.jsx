import React, { useState } from 'react';
import axios from 'axios';

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const signUp = () => loginWithRedirect({ screen_hint: "signup" });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/login', { email, password });
            setToken(response.data.token);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> */}
                {/* <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /> */}
                <button className="btn-primary" onClick={loginWithRedirect}>
                    Login
                </button>
            </form>
            {token && <p>Token: {token}</p>}
        </div>
    );
};

export default AdminLogin;