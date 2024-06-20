import React from "react";
import Navbar from "../components/Navbar";
import Cafe from "./home/Cafe";
import Festival from "../components/home/Festivals";
import FoodItems from "../components/home/FoodItems";
import Footer from "../components/Footer";


const Home = () => {
  

  return (
    <div className="home">
      {/* Add title and navbar here */}
      <h1>Welcome to [Your App Name]</h1>
      <Navbar/>
      
      {/* Display cafe, festival, and food items */}
      <Cafe /> 
      <Festival />
      <FoodItems />
      {/* <AuthDebugger /> */}

      {/* Conditionally render the Login/Signup button */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

