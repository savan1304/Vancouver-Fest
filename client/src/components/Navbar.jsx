import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
import AuthDebugger from "./AuthDebugger"

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
                    <Link to="#cafes">Cafes</Link> {/* Link to the cafe section on the home page */}
                </li>
                <li>
                    <Link to="#festivals">Festivals</Link>
                </li>
                <li>
                    <Link to="#fooditems">Food Items</Link>
                </li>
                {/* Conditionally render the Login/Logout button */}
                {isAuthenticated ? (
                    <li>
                        <Link onClick={() => logout({ returnTo: window.location.origin })}>Logout</Link>
                    </li>
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
