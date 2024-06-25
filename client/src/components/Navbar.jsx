import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
import AuthDebugger from "./AuthDebugger";
import '../css/navbar.css';

function Navbar() {
    const { logout } = useAuth0();
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <nav>
            <ul>
                {/* Navigation Links */}
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Cafes</Link> {/* Link to the cafe section on the home page */}
                </li>
                <li>
                    <Link to="/">Festivals</Link>
                </li>
                <li>
                    <Link to="/">Food Items</Link>
                </li>
                {/* Conditionally render the Login/Logout button */}
                {isAuthenticated ? (
                    <>
                    <li><Link to="/profile">Profile</Link></li>
                    <li>
                        <Link onClick={() => logout({ returnTo: window.location.origin })}>Logout</Link>
                    </li>
                    </>
                ) : (
                    <li>
                        <Link onClick={() => loginWithRedirect()}>Log In/Sign Up</Link>
                    </li>
                )}
                <li>
                    <AuthDebugger />
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
