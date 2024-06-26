import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginSignup from './LoginSignup';
import '../../css/Festivals.css';
import FestivalBlock from './FestivalBlock';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Festival = () => {
    const { id } = useParams();
    // const id = 1;
    const [festival, setFestival] = useState(null);
    const [error, setError] = useState(null);
    const { isAuthenticated} = useAuth0();
    console.log("id", id);
    useEffect(() => {
        const fetchFestival = async () => {
        try {
            console.log("id", id);
            const response = await fetch(`http://localhost:8000/api/Festival/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setFestival(data);
        } catch (error) {
            console.error('Error fetching festival data:', error);
            setError(error.message);
        }
        };

        fetchFestival();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!isAuthenticated) {
        console.log("inside !isAuthenticated, redirecting to Auth0 login")
        return (
        <LoginSignup />
        );
    }

    if (!festival) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <FestivalBlock /> */}
            <Navbar />
            <div  className='container'>
            <div className="festival-details">
                <p className="festival-name">{festival.name}</p>
                <p className="festival-data">{festival.description}</p>
                <p className="festival-data">Hours: {festival.hours}</p>
                <p className="festival-data"><i className="fas fa-map-marker-alt"></i> {festival.address}</p>
                <p className="festival-data">{festival.priceRange}</p>
            </div>
            <div className="festival-buttons">
                <button className="btn btn-primary">Participate</button>
            </div>
            <section className="festival-details">
                <h2>Festival Details</h2>
                {/* <p>Expected No of attendees: [Number] | No of festivals: [Number]</p> */}
                <p>Expected No of attendees: {festival.numberOfAttendees} </p>
            </section>
            <section className="festival-activities">
                <h2>What to expect?</h2>
                <div className="activities-grid">
                    {/* Each div represents a food item or activity 
                    <div className="activity-item">
                        <img src="path-to-food-image" alt="Food Item" />
                        <p>Food Item Name</p>
                    </div>
                    {/* Repeat for other items */}
                    {festival.foodItems && festival.foodItems.map((item, index) => (
                        <div key={index} className="activity-item">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        </div>
                    ))}
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
            
            <Footer />
        </div>
    );
};

export default Festival;
