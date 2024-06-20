import React from 'react';
import './festival.css';
import FestivalBlock from './FestivalBlock';

const Festival = () => {
    return (
        <div>
            <FestivalBlock />
            <div className="festival-buttons">
                <button className="btn btn-primary">Participate as business</button>
                <button className="btn btn-secondary">Become a sponsor</button>
            </div>
            <section className="festival-details">
                <h2>Festival Details</h2>
                {/* <p>Expected No of attendees: [Number] | No of cafes: [Number]</p> */}
            </section>
            <section className="festival-activities">
                <h2>What to expect?</h2>
                <div className="activities-grid">
                    {/* Each div represents a food item or activity */}
                    <div className="activity-item">
                        <img src="path-to-food-image" alt="Food Item" />
                        <p>Food Item Name</p>
                    </div>
                    {/* Repeat for other items */}
                </div>
            </section>
            <section className="festival-contact">
                <h2>Festival specific contact</h2>
                <p>Email: contact@example.com</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" className="form-control" />
                    <input type="email" placeholder="Your Email" className="form-control" />
                    <textarea placeholder="Your Message" className="form-control"></textarea>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default Festival;
