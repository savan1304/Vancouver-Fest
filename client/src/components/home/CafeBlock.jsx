import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../../css/Cafes.css';
import Cafe from './Cafe';

const CafeBlock = ({id, name, hours, address, description, priceRange}) => {
    const navigate = useNavigate();

    const handleNameClick = () => {
      navigate(`/Cafe/${id}`);
        return (
            <Cafe id={id} />
        )
    };
    return (
        <div className='block'>
            <header className=".header-Cafe">
                <img src="" alt="Cafe Name" />
                <h2 onClick={handleNameClick} style={{ cursor: 'pointer', color: 'blue' }}>{name}</h2> 
                <p>{description}</p>
                <p>Working hours : {hours}</p>
                <p>Address: {address}</p>
                <p>Price range: {priceRange}</p>
            </header>
        </div>
    );
};

export default CafeBlock;