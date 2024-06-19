import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);

  // Fetch access token when the component mounts and when authentication status changes
  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          setAccessToken(token);
        } catch (error) {
          console.error("Error fetching access token:", error);
        }
      }
    };
    fetchToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, accessToken }}> {/* Make accessToken available */}
      {children}
    </AuthContext.Provider>
  );
};
  
const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthContext };

