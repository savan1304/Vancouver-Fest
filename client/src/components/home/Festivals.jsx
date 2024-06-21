import React, { useEffect, useState } from "react";
import FestivalBlock from "./FestivalBlock";

function Festival() {
    // const [festivals, setFestivals] = useState([]);

    // useEffect(() => {
    //   const fetchFestivals = async () => {
    //     try {
    //       const response = await fetch('/api/festivals'); 
    //       const data = await response.json();
    //       setFestivals(data);
    //     } catch (error) {
    //       console.error('Error fetching festival data:', error);
    //     }
    //   };
  
    //   fetchFestivals();
    // }, []);

    const [festivals, setFestivals] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFestivals = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/Festivals'); 
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setFestivals(data);
        } catch (error) {
            console.error('Error fetching festival data:', error);
            setError(error.message);
        }
        };

        fetchFestivals();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }
  return (
    <div className="container">
        <h2>Festivals</h2>
        {/* <FestivalBlock /> */}
        {festivals.map((festival) => (
        <FestivalBlock
          key={festival.id}
          id={festival.id}
          name={festival.name}
          tagline={festival.tagline}
          startDate={festival.startDate}
          endDate={festival.endDate}
          location={festival.Location}
          numberOfAttendees={festival.numberOfAttendees}
        //   foodItems={festival.foodItems}
        //   cafes={festival.cafes}
        />
      ))}
    </div>
  );
}

export default Festival;
