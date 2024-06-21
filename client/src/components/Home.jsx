import React from "react";
import Navbar from "../components/Navbar";
import Cafe from "./home/Cafe";
import Festivals from "./home/Festivals";
import Festival from "./home/Festival";
import FoodItems from "../components/home/FoodItems";
import Footer from "../components/Footer";
import LoginSignup from "./home/LoginSignup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="home">
      {/* Add title and navbar here */}
      <h1>Welcome to [Your App Name]</h1>
      <Navbar/>
      
      {/* Display cafe, festival, and food items */}
      {/* <Cafe />  */}
      {/* <Festivals />
      <FoodItems /> 
      {/* <AuthDebugger /> */}

        <Routes>
        {/* <Route path="/" element={
          <React.Fragment>
            <Cafe />
            <Festivals />
            <FoodItems />
          </React.Fragment>} 
        /> */}
        {/* <React.Fragment> */}
          <Route path="/Festival" element={<Festival />} />
        {/* </React.Fragment> */}
          {/* <Route path="/Festival" render={(props) => (
            console.log("festival"),
             <Festival {...props} /> 
             
          )} /> */}
        </Routes>

        {/* <FoodItems />  */}
      {/* Conditionally render the Login/Signup button */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

