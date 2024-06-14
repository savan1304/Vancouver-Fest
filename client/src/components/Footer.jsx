import React from "react";
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content">
                <div className=" section about">
                    <h2>About us</h2>
                    <p>one line about us</p>
                </div>
                <div className=" section links">
                    <h2>Quick Links</h2>
                    <ul>
                    <li><a href="#festivals">Festivals</a></li>
                    <li><a href="#food-items">Food Items</a></li>
                    <li><a href="#cafes">Cafes</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="section contact">
                    <h2>Contact Us</h2>
                    <p>Email: </p>
                    <p>Phone: </p>
                </div>
            </div>
            <div className="bottom">
                &copy; 2024 Title | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;