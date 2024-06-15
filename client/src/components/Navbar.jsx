import React from "react";
import '../css/navbar.css'

const Navbar = () => {
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
                <a href="/login">Login</a>
                <a href="/signUp">Sign Up</a>
                <a href="/admin">Admin</a>
            </div>
        </nav>
    );
};

export default Navbar;