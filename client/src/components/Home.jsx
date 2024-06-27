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
      <Cafes /> 
      <Festivals />
    </div>
  );
};

export default Home;

