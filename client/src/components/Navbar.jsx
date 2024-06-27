import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/navbar.css";

function Navbar() {
    const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    ☰
                </div>
                <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
                    <ul className="navbar-links">
                        <li>
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Cafes" className="nav-link">Cafes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Festivals" className="nav-link">Festivals</NavLink>
                        </li>
                        <li>
                            <NavLink to="/AuthDebugger" className="nav-link">AuthDebugger</NavLink>
                        </li>
                        {isAuthenticated ? (
                            <>
                                <li>
                                    <NavLink to="/profile" className="nav-link">Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>Logout</NavLink>
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to="/" className="nav-link" onClick={() => loginWithRedirect()}>Log In/Sign Up</NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
