// // import React, { useState, useEffect } from 'react';
// // import { useAuth0 } from '@auth0/auth0-react';
// // import axios from 'axios';
// // import '../css/UserProfilePage.css';

// // const UserProfilePage = () => {
// //   const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     address: '',
// //     dateOfBirth: '',
// //     country: ''
// //   });
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const fetchUserId = async () => {
// //       try {
// //         const token = await getAccessTokenSilently();
// //         const response = await axios.post('/api/verify-user', {}, {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //         const userId = response.data.id;
// //         setUserId(userId);

// //         const userProfileResponse = await axios.get(`/api/user-profile/${userId}`, {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //         setFormData(userProfileResponse.data);
// //       } catch (error) {
// //         console.error('Failed to fetch user profile:', error);
// //       }
// //     };

// //     if (user) {
// //       fetchUserId();
// //     }
// //   }, [user, getAccessTokenSilently]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (userId) {
// //       try {
// //         const token = await getAccessTokenSilently();
// //         await axios.post(`/api/user-profile/${userId}`, formData, {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //         setIsEditing(false);
// //         alert('Profile updated successfully');
// //       } catch (error) {
// //         console.error('Failed to update profile:', error);
// //       }
// //     }
// //   };

// //   if (isLoading) return <div>Loading...</div>;

// //   if (isAuthenticated) {
// //     return (
// //       <div className="profile-container">
// //         <h2>User Profile</h2>
// //         {!isEditing ? (
// //           <div className="profile-details">
// //             <p><strong>Name:</strong> {formData.name}</p>
// //             <p><strong>Address:</strong> {formData.address}</p>
// //             <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
// //             <p><strong>Country:</strong> {formData.country}</p>
// //             <button onClick={() => setIsEditing(true)}>Edit Profile</button>
// //           </div>
// //         ) : (
// //           <form onSubmit={handleSubmit} className="profile-form">
// //             <div className="form-group">
// //               <label htmlFor="name">Name</label>
// //               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="address">Address</label>
// //               <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="dateOfBirth">Date of Birth</label>
// //               <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="country">Country</label>
// //               <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
// //             </div>
// //             <button type="submit">Save</button>
// //             <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
// //           </form>
// //         )}
// //       </div>
// //     );
// //   }

// //   return <div>Please log in to view your profile.</div>;
// // };

// // export default UserProfilePage;

// import React, { useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';
// import '../css/UserProfilePage.css';

// const UserProfilePage = () => {
//   const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     dateOfBirth: '',
//     country: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     if (user) {
//       axios.get(`/api/user-profile/${user.sub.split('|')[1]}`)
//         .then(response => {
//           setFormData(response.data);
//         })
//         .catch(error => {
//           console.error('Failed to fetch user profile:', error);
//         });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (user) {
//       axios.post(`/api/user-profile/${user.sub.split('|')[1]}`, formData)
//         .then(response => {
//           setIsEditing(false);
//           alert('Profile updated successfully');
//         })
//         .catch(error => {
//           console.error('Failed to update profile:', error);
//         });
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;

//   if (isAuthenticated) {
//     return (
//       <div className="profile-container">
//         <h2>User Profile</h2>
//         {!isEditing ? (
//           <div className="profile-details">
//             <p><strong>Name:</strong> {formData.name}</p>
//             <p><strong>Address:</strong> {formData.address}</p>
//             <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
//             <p><strong>Country:</strong> {formData.country}</p>
//             <button onClick={() => setIsEditing(true)}>Edit Profile</button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="profile-form">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="address">Address</label>
//               <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="dateOfBirth">Date of Birth</label>
//               <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="country">Country</label>
//               <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
//             </div>
//             <button type="submit">Save</button>
//             <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
//           </form>
//         )}
//       </div>
//     );
//   }

//   return <div>Please log in to view your profile.</div>;
// };

// export default UserProfilePage;

import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../css/UserProfilePage.css';

const UserProfilePage = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    dateOfBirth: '',
    country: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await getAccessTokenSilently();
        // const response = await axios.get(`/api/user-profile/${user.sub.split('|')[1]}`, {
        //   headers: {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user-profile/${user.sub.split('|')[1]}`, {
            headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setFormData(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user, getAccessTokenSilently]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getAccessTokenSilently();
    //   await axios.post(`/api/user-profile/${user.sub.split('|')[1]}`, formData, {
    //     headers: {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/user-profile/${user.sub.split('|')[1]}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setIsEditing(false);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated) {
    return (
      <div className="profile-container">
        <h2>User Profile</h2>
        {!isEditing ? (
          <div className="profile-details">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
            <p><strong>Country:</strong> {formData.country}</p>
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        )}
      </div>
    );
  }

  return <div>Please log in to view your profile.</div>;
};

export default UserProfilePage;
