import React, { createContext, useContext, useEffect, useState } from "react"; //import it correctly.
import { useAuth0 } from '@auth0/auth0-react';

const AuthTokenContext = createContext();

const requestedScopes = ["profile", "email"];

function AuthTokenProvider({ children }) {
  const { getAccessTokenSilently, isAuthenticated, loginWithRedirect } = useAuth0();
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    const getAccessToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently({
            authorizationParams: {
              audience: process.env.REACT_APP_AUTH0_AUDIENCE,
              scope: requestedScopes.join(" "),
            },
          });
          setAccessToken(token);
        } catch (error) {
          // Handle silent authentication errors (e.g., login_required)
          if (error.error === "login_required") {
            loginWithRedirect();
          } else {
            console.error("Error getting access token:", error);
          }
        }
      }
    };
    getAccessToken();
  }, [getAccessTokenSilently, isAuthenticated, loginWithRedirect]); // Add loginWithRedirect to dependencies

  const value = { accessToken };
  return (
    <AuthTokenContext.Provider value={value}>
      {children}
    </AuthTokenContext.Provider>
  );
}

const useAuthToken = () => useContext(AuthTokenContext);

export { useAuthToken, AuthTokenProvider };