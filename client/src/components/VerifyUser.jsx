// // import "../style/appLayout.css";

// import { useEffect } from "react";
// import { useAuthToken } from "../AuthTokenContext";
// import { useNavigate } from "react-router-dom";

// export default function VerifyUser() {
//   const navigate = useNavigate();
//   const { accessToken } = useAuthToken();

//   useEffect(() => {
//     async function verifyUser() {
//       // make a call to our API to verify the user in our database, if it doesn't exist we'll insert it into our database
//       // finally we'll redirect the user to the /app route
//       const data = await fetch(`${process.env.REACT_APP_API_URL}/verify-user`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       const user = await data.json();

//       if (user.auth0Id) {
//         navigate("/app");
//       }
//     }

//     if (accessToken) {
//       verifyUser();
//     }
//   }, [accessToken, navigate]);

//   return <div className="loading">Loading...</div>;
// }

import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const VerifyUser = () => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (user && isAuthenticated) {
      axios.post('/verify-user', { sub: user.sub, email: user.email })
        .then(response => {
          console.log('User verified:', response.data);
        })
        .catch(error => {
          console.error('Failed to verify user:', error);
        });
    }
  }, [user, isAuthenticated]);

  return null;
};

export default VerifyUser;
