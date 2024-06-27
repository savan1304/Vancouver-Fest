import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Festivals.css';
import Festival from './Festival';
import { useHistory } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FestivalBlock = ({id, name, tagline, startDate, endDate, location, numberOfAttendees, imageUrl}) => {
    const navigate = useNavigate();
    // const history = useHistory();

    const handleNameClick = () => {
        console.log("Inside handleNameClick in FestivalBlock.jsx")
      navigate(`/Festival/${id}`);
      console.log("Afer navigate to /Festival line")
        return (
            <Festival id={id} />
        )
        // history.push(`/Festival/${id}`);
    };
    return (
        <div className='block'>
            <header >
                <img src={imageUrl} alt="Festival Name" className='festival-image'/>
                <h2 onClick={handleNameClick} className='festival-name'>{name}</h2> 
                <p className="festival-data">{tagline}</p>
                <p className="festival-data">From {new Date(startDate).toLocaleDateString()}</p> 
                <p className="festival-data">to {new Date(endDate).toLocaleDateString()}</p>
                <p className="festival-data"><i className="fas fa-map-marker-alt"></i> {location}</p>
                {/* <p>Number of Attendees: {numberOfAttendees}</p>get startDate, endDate from festival table */}
            </header>
        </div>
    );
};

export default FestivalBlock;