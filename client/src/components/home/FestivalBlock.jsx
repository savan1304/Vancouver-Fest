import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../css/Festivals.css';

const FestivalBlock = ({id, name, tagline, startDate, endDate, location, numberOfAttendees}) => {
    const history = useHistory();

    const handleNameClick = () => {
      history.push(`/festival/${id}`);
    };
    return (
        <div className='block'>
            <header className=".header-festival">
                <img src="" alt="Festival Name" />
                <h2 onClick={handleNameClick} style={{ cursor: 'pointer', color: 'blue' }}>{name}</h2> {/* get name from festival table */}
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