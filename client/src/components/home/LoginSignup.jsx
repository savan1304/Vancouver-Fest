import React from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';


const LoginSignup = () => {
  const { logout, user, isAuthenticated, loginWithRedirect } = useAuth0();
  const redirect_uri= `${window.location.origin}/Festival/:id`


  const handleLogin = () => {
    loginWithRedirect({redirect_uri});
  };

  return (
    <div className="login-signup">
      {!isAuthenticated ? (
        handleLogin()

      ) : (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
