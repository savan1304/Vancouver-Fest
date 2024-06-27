import React from "react";
import Navbar from "../components/Navbar";
import Cafes from "./home/Cafes";
import Festivals from "./home/Festivals";
import Festival from "./home/Festival";
import FoodItems from "../components/home/FoodItems";
import Footer from "../components/Footer";
import LoginSignup from "./home/LoginSignup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AuthDebugger from "./AuthDebugger";


const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="home">
      {/* Add title and navbar here */}
      <h1>Welcome to Vancouver Fest</h1>
      <Navbar/>

      <br /><br /><br /><br />
      {/* Display cafe, festival, and food items */}
      <Cafes /> 
      <Festivals />
      <Footer />
    </div>
  );
};

export default Home;

