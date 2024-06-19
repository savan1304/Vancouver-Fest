import '../css/navbar.css'

import React, { useState } from 'react';
import axios from 'axios';

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const signUp = () => loginWithRedirect({ screen_hint: "signup" });

    return (
        <nav className="navbar">
            <div className="title">Title</div>
            <div className="links">
                <ul>
                    <li><a href="#festivals">Festivals</a></li>
                    <li><a href="#foodItems">Food Items</a></li>
                    <li><a href="#cafes">Cafes</a></li>
                </ul>
            </div>
            <div className="loginLinks">
                <a href="/login" onClick={loginWithRedirect}>Login</a>
                <a href="/signUp"  onClick={loginWithRedirect}>Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;