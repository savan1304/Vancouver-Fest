import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [cafes, setCafes] = useState([]);
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchCafes = async () => {
            const response = await axios.get('/api/admin/cafes');
            setCafes(response.data);
        };
        fetchCafes();
    }, []);

    const handleAddFestival = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/admin/festivals', { name, imageUrl, description });
            alert('Festival added successfully');
        } catch (error) {
            console.error(error.response.data);
        }
    };

    const handleConfirmCafe = async (id) => {
        try {
            await axios.put(`/api/admin/cafes/${id}/confirm`);
            setCafes(cafes.filter(cafe => cafe.id !== id));
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <form onSubmit={handleAddFestival}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Festival Name" required />
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                <button type="submit">Add Festival</button>
            </form>

            <h3>Pending Cafe Registrations</h3>
            <ul>
                {cafes.map(cafe => (
                    <li key={cafe.id}>
                        {cafe.name} - {cafe.email}
                        <button onClick={() => handleConfirmCafe(cafe.id)}>Confirm</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
