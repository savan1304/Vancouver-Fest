// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react"; 
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import '../css/navbar.css';

// function Navbar() {
//     const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item me-4">
//                             <NavLink className="nav-link" to="/">Home</NavLink>
//                         </li>
//                         <li className="nav-item me-4">
//                             <NavLink className="nav-link" to="/Cafes">Cafes</NavLink>
//                         </li>
//                         <li className="nav-item me-4">
//                             <NavLink className="nav-link" to="/Festivals">Festivals</NavLink>
//                         </li>
//                         <li className="nav-item me-4">
//                             <NavLink className="nav-link" to="/AuthDebugger">AuthDebugger</NavLink>
//                         </li>
//                     </ul>
//                     <ul className="navbar-nav">
//                         {isAuthenticated ? (
//                             <>
//                                 <li className="nav-item me-4">
//                                     <NavLink className="nav-link" to="/profile">Profile</NavLink>
//                                 </li>
//                                 <li className="nav-item me-4">
//                                     <NavLink className="nav-link" to="/" onClick={() => logout({ returnTo: window.location.origin })}>Logout</NavLink>
//                                 </li>
//                             </>
//                         ) : (
//                             <li className="nav-item me-4">
//                                 <NavLink className="nav-link" to="/" onClick={() => loginWithRedirect()}>Log In/Sign Up</NavLink>
//                             </li>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
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
