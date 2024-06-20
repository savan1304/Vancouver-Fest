import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming you are using axios for API requests

function Festival() {
  const [festivals, setFestivals] = useState([]);

//   useEffect(() => {
//     const fetchFestivals = async () => {
//       try {
//         const response = await axios.get("/api/festivals"); // Adjust API endpoint
//         setFestivals(response.data);
//       } catch (error) {
//         console.error("Error fetching festivals:", error);
//       }
//     };
//     fetchFestivals();
//   }, []);

  return (
    <div>
        <h2>Festivals</h2>
    </div>
    // <div className="festival-div" id="festivals">
    //   <h2>Upcoming Food Festivals</h2>
    //   <div className="festival-list">
    //     {festivals.map((festival) => (
    //       <div key={festival.id} className="festival-item">
    //         {/* Display festival information here */}
    //         <img src={festival.imageUrl} alt={festival.name} />
    //         <h3>{festival.name}</h3>
    //         <p>{festival.description}</p>
    //         {/* ...other details you want to show... */}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Festival;
