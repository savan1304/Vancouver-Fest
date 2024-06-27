import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginSignup from './LoginSignup';
import '../../css/Cafe.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Cafe = () => {
    const { id } = useParams();
    const [cafe, setCafe] = useState(null);
    const [error, setError] = useState(null);
    const { isAuthenticated } = useAuth0();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const fetchCafe = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/Cafe/${id}?include=foodItems`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCafe(data);
                setComments(data.comments);
            } catch (error) {
                console.error('Error fetching Cafe data:', error);
                setError(error.message);
            }
        };

        fetchCafe();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...newComment, cafeId: id })
            });
            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }
            const data = await response.json();
            setComments([...comments, data]);
            setNewComment({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!isAuthenticated) {
        return <LoginSignup />;
    }

    if (!cafe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="cafe-details">
                <div className='left-half'>
                    <img src={cafe.imageUrl} alt={cafe.name} className='cafe-image2'/>
                </div>
                <div className='right-half'>
                    <p className="cafe-name2">{cafe.name}</p>
                    <p className="cafe-data2">{cafe.description}</p>
                    <p className="cafe-data2">Hours: {cafe.hours}</p>
                    <p className="cafe-data2"><i className="fas fa-map-marker-alt"></i> {cafe.address}</p>
                    <p className="cafe-data2">{cafe.priceRange}</p>
                </div>   
            </div>
            <section className="cafe-activities">
                <h2>Food Items</h2>
                <div className="activities-grid">
                    {cafe.foodItems && cafe.foodItems.map((item, index) => (
                        <div key={index} className="activity-item2">
                            <img src={item.imageUrl} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="cafe-contact">
                <h2>Leave a Comment</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" className="form-control" value={newComment.name} required
                        onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    />
                    <input type="email" placeholder="Your Email" className="form-control" value={newComment.email} required
                        onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                    />
                    <textarea placeholder="Your Message" className="form-control" value={newComment.message} required
                        onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}></textarea>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
            <section className="cafe-comments">
                <h2>Comments</h2>
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <p><strong>{comment.name}</strong></p>
                        <p>{comment.message}</p>
                        <p><em>{new Date(comment.createdAt).toLocaleString()}</em></p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Cafe;
