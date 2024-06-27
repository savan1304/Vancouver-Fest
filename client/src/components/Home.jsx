import React, { useEffect } from 'react';
import Cafes from "./home/Cafes";
import Festivals from "./home/Festivals";
import { useAuth0 } from '@auth0/auth0-react';


const Home = () => {
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    document.title = "Vancouver Fest"
  }, []);
  
  return (
    <div className="home">
      <Cafes /> 
      <Festivals />
    </div>
  );
};

export default Home;

