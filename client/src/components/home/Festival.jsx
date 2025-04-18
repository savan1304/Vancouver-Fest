import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginSignup from './LoginSignup';
import '../../css/Festival.css';
import getCoordsForAddress from "./utils/location";
import getWeatherForAddress from './utils/weather';
import getWeatherCondition from './utils/weatherCondition';
import { format } from 'date-fns';



const Festival = () => {
    const { id } = useParams();
    const [festival, setFestival] = useState(null);
    const [error, setError] = useState(null);
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        document.title = "Festival";
      }, []);

    useEffect(() => {
        const fetchFestival = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/Festival/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                const location = data.Location;

                let coordinates;
                try{
                    coordinates = await getCoordsForAddress(location)
                }
                catch(error){
                    throw error
                }
                const lat = coordinates.lat;
                const lng = coordinates.lng;

                let weatherData;
                const formattedStartDate = data.startDate.slice(0, 10); 
                const formattedEndDate = data.endDate.slice(0, 10);
                try{
                    weatherData = await getWeatherForAddress(lat, lng, formattedStartDate, formattedEndDate);
                }
                catch(error){
                    throw error
                }
                const max_temp = weatherData.avgMaxTemp;
                const min_temp = weatherData.avgMinTemp;
                const weatherCode = weatherData.mostCommonCode;

                const weatherCondition = getWeatherCondition(weatherCode)

                const weather = `${Math.ceil(min_temp)}\u00B0C - ${Math.ceil(max_temp)}\u00B0C, Expect ${weatherCondition}`
                data.weather = weather

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
            <div className="container">
            <div className="festival-details">
                <div className='left-half'>
                    <img src={festival.imageUrl} alt={festival.name} />
                </div>
                <div className='right-half'>
                    <p className="festival-name2">{festival.name}</p>
                    <p className="festival-data2">{festival.tagline}</p>
                    <p className="festival-data2"><i className="fas fa-map-marker-alt"></i> {festival.Location}</p>
                    
                    <p className="festival-data2">
                        {convertDateFormat(festival.startDate)} 
                    </p>                    
                    <p className="festival-data2">
                        {convertDateFormat(festival.endDate)} 
                    </p>
                    <p className="festival-data2"><i className="fas fa-cloud-sun-rain"></i> {festival.weather}</p>
                </div>   
            </div>
            
            </div>
            <section className="festival-activities">
                <h2>Paticipating Cafes </h2>
                <div className="activities-grid">
                    {festival.cafes && festival.cafes.map((cafe, index) => (
                        <div key={index} className="activity-item2">
                            <img src={cafe.imageUrl} alt={cafe.name} />
                            <p>{cafe.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );    
};

function convertDateFormat(date){
    const formattedDate = format(new Date(date), 'dd MMM yyyy');
    return formattedDate;
}


export default Festival;