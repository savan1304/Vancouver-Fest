// import React from "react";
// import '../css/Footer.css';

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="content">
//                 <div className=" section about">
//                     <h2>About us</h2>
//                     <p>one line about us</p>
//                 </div>
//                 <div className=" section links">
//                     <h2>Quick Links</h2>
//                     <ul>
//                     <li><a href="#festivals">Festivals</a></li>
//                     <li><a href="#food-items">Food Items</a></li>
//                     <li><a href="#cafes">Cafes</a></li>
//                     <li><a href="/contact">Contact Us</a></li>
//                     </ul>
//                 </div>
//                 <div className="section contact">
//                     <h2>Contact Us</h2>
//                     <p>Email: </p>
//                     <p>Phone: </p>
//                 </div>
//             </div>
//             <div className="bottom">
//                 &copy; 2024 Title | All Rights Reserved
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import '../css/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h2>About Us</h2>
                    <p>
                        Welcome to our cafe listing site. Here you can find the best cafes in town, check their working hours, 
                        and explore their menus. Feel free to contact us for more information.
                    </p>
                </div>
                <div className="footer-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Cafes">Cafes</a></li>
                        <li><a href="/Festivals">Festivals</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h2>Contact Us</h2>
                     <p>Email: vanfest@gmail.com</p>
                     <p>Phone: +1 000-000-0000</p>
                </div>
            </div>
            {/* <div className="footer-bottom">
                <p>&copy; 2024 Cafe Listing. All rights reserved.</p>
            </div> */}
        </footer>
    );
};

export default Footer;
