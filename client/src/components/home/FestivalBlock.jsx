import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Festivals.css';
import Festival from './Festival';
import { useHistory } from 'react-router-dom';

const FestivalBlock = ({id, name, tagline, startDate, endDate, location, numberOfAttendees}) => {
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
                <img src="" alt="Festival Name" />
                <h2 onClick={handleNameClick} className='festival-name'>{name}</h2> 
                {/* <h2>{name}</h2> */}
                <p className="festival-data">{tagline}</p> {/* get tagline from festival table */}
                <p className="festival-data">Start Date: {new Date(startDate).toLocaleDateString()}</p> 
                <p className="festival-data">End Date: {new Date(endDate).toLocaleDateString()}</p>
                <p className="festival-data">Location: {location}</p>
                {/* <p>Number of Attendees: {numberOfAttendees}</p>get startDate, endDate from festival table */}
            </header>
        </div>
    );
};

export default FestivalBlock;