import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import './LoginSignup.css';

const LoginSignup = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  console.log("inside LoginSignUp.jsx")

  const handleLogin = () => {
    loginWithRedirect({
      //TODO: redirect the user to the same page as they were after successful login
      redirect_uri: `${window.location.origin}/Festival/:id`
    });
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
