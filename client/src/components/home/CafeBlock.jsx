import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cafe from './Cafe';
import '../../css/Cafes.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const CafeBlock = ({id, name, hours, address, description, priceRange, imageUrl}) => {
    const navigate = useNavigate();

    const handleNameClick = () => {
      navigate(`/Cafe/${id}`);
        return (
            <Cafe id={id} />
        )
    };
    return (
        <div className="cafe-block">
            <header>
                <img src={imageUrl} alt={name} className="cafe-image"/>
                <h2 onClick={handleNameClick} className="cafe-name">{name}</h2> 
                <p className="cafe-data">{description}</p>
                <p className="cafe-data">Hours: {hours}</p>
                <p className="cafe-data"><i className="fas fa-map-marker-alt"></i> {address}</p>
                <p className="cafe-data">{priceRange}</p>
            </header>
        </div>
    );
};

export default CafeBlock;