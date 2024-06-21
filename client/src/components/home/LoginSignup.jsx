import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import './LoginSignup.css';

const LoginSignup = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="login-signup">
      {!isAuthenticated ? (
        <div>
          <h2>Please log in to view festival details</h2>
          <button onClick={loginWithRedirect}>Log In</button>
        </div>
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
