import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginSignup from './LoginSignup';

const Cafe = () => {
    const { id } = useParams();
    // const id = 1;
    const [cafe, setCafe] = useState(null);
    const [error, setError] = useState(null);
    const { isAuthenticated} = useAuth0();
    console.log("id", id);
    useEffect(() => {
        const fetchCafe = async () => {
        try {
            console.log("id", id);
            const response = await fetch(`http://localhost:8000/api/Cafe/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCafe(data);
        } catch (error) {
            console.error('Error fetching Cafe data:', error);
            setError(error.message);
        }
        };

        fetchCafe();
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

    if (!cafe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <p>{cafe.name}</p>
                <p>{cafe.description}</p>
                <p>Working hours : {cafe.hours}</p> 
                <p>Address: {cafe.address}</p>
                <p>Price range: {cafe.priceRange}</p>
            </div>
            <section className="cafe-activities">
                <div className="activities-grid">
                    {/* Each div represents a food item or activity 
                    <div className="activity-item">
                        <img src="path-to-food-image" alt="Food Item" />
                        <p>Food Item Name</p>
                    </div>
                    {/* Repeat for other items */}
                    {cafe.foodItems && cafe.foodItems.map((item, index) => (
                        <div key={index} className="activity-item">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="cafe-contact">
                <h2>cafe specific contact</h2>
                <p>Email: {cafe.contactEmail}</p>
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

export default Cafe;
