import React, { useEffect, useState } from "react";
import CafeBlock from "./CafeBlock";

function Cafe() {

    const [Cafes, setCafes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCafes = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/Cafes'); 
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCafes(data);
        } catch (error) {
            console.error('Error fetching Cafe data:', error);
            setError(error.message);
        }
        };

        fetchCafes();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }
  return (
    <div className="container">
        <h2>Cafes</h2>
        {Cafes.map((Cafe) => (
        <CafeBlock
          key={Cafe.id}
          id={Cafe.id}
          name={Cafe.name}
          hours={Cafe.hours}
          address={Cafe.address}
          description={Cafe.description}
          priceRange={Cafe.priceRange}
        />
      ))}
    </div>
  );
}

export default Cafe;
