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
