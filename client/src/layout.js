// Layout.js
import React from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

const Layout = ({ children }) => {
    return (
        <div>
        <h1>Welcome to Vancouver Fest</h1>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
