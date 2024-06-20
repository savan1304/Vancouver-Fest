import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming you are using axios for API requests

function Cafe() {
  const [cafes, setCafes] = useState([]);

//   useEffect(() => {
//     const fetchCafes = async () => {
//       try {
//         const response = await axios.get("/api/cafes"); // Adjust API endpoint
//         setCafes(response.data);
//       } catch (error) {
//         console.error("Error fetching cafes:", error);
//       }
//     };
//     fetchCafes();
//   }, []);

  return (
    <div>
        <h2>Cafes</h2>
    </div>
    // <div className="cafe-div" id="cafes">
    //   <h2>Featured Cafes</h2>
    //   <div className="cafe-list">
    //     {cafes.map((cafe) => (
    //       <div key={cafe.id} className="cafe-item">
    //         {/* Display cafe information here */}
    //         <img src={cafe.imageUrl} alt={cafe.name} />
    //         <h3>{cafe.name}</h3>
    //         <p>{cafe.description}</p>
    //         {/* ...other details you want to show... */}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Cafe;
