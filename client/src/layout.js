// Layout.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './css/Layout.css'

const Layout = ({ children }) => {
    return (
        <div>
            <h1>Vancouver Fest</h1>
            <Navbar />
            <div className="greeting"><h3>Explore Cafes and Festivals around the city!</h3>
            </div>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
