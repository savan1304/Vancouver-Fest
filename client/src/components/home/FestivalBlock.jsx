import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Festivals.css';
import Festival from './Festival';
import { useHistory } from 'react-router-dom';

const FestivalBlock = ({id, name, tagline, startDate, endDate, location, numberOfAttendees}) => {
    const navigate = useNavigate();
    // const history = useHistory();

    const handleNameClick = () => {
      navigate(`/Festival`);
        // return (
        //     <Festival id={id} />
        // )
        // history.push(`/Festival/${id}`);
    };
    return (
        <div className='block'>
            <header className=".header-festival">
                <img src="" alt="Festival Name" />
                <h2 onClick={handleNameClick} style={{ cursor: 'pointer', color: 'blue' }}>{name}</h2> 
                {/* <h2>{name}</h2> */}
                <p>{tagline}</p> {/* get tagline from festival table */}
                <p>Start Date: {new Date(startDate).toLocaleDateString()}</p> 
                <p>End Date: {new Date(endDate).toLocaleDateString()}</p>
                <p>Location: {location}</p>
                {/* <p>Number of Attendees: {numberOfAttendees}</p>get startDate, endDate from festival table */}
            </header>
        </div>
    );
};

export default FestivalBlock;