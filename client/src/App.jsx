import { React, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Festivals from "./components/home/Festivals";
import FoodItems from "./components/home/FoodItems";
import Cafes from "./components/home/Cafes";
import Footer from "./components/Footer";
import './css/App.css'
import AdminLogin from "./components/auth/AdminLogin"
import Festival from "./components/home/Festival";
import Admin from "./components/home/Admin"
import Home from "./components/Home"

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { AuthProvider } from './AuthContext';

const images = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
];

//   const festivalName = [
//     "Festival 1",
//     "Festival 2",
//     "Festival 3",
//     "Festival 4",
//     "Festival 5",
//     "Festival 6",
//     "Festival 7"
//   ].map((festivalName) => ({
//     id: crypto.randomUUID(),
//     festivalName
//   }));
const festivalName = [
    "Festival 1",
    "Festival 2",
    "Festival 3",
    "Festival 4",
    "Festival 5",
    "Festival 6",
    "Festival 7"
];

const festivals = images.map((image, index) => ({
    id: crypto.randomUUID(),
    image,
    festivalName: festivalName[index]
}));


const App = () => {

    const { isAuthenticated, isLoading } = useAuth0();
    const  user  = useAuth();

    const navigate = useNavigate();
    // const role = user ? user.role : '';
    const role = user && user.role ? user.role : ''; // Get the user's role from Auth0 


    useEffect(() => {
        if (isAuthenticated && !isLoading && role) { // Only redirect if authenticated and role is available
            const redirectTo = {
                admin: '/admin',  // Changed from '/admin-dashboard'
                user: '/user-profile',
                cafe: '/cafe-profile'
            }[role] || '/'; // Default to '/' if role is not recognized

            navigate(redirectTo);
        }
    }, [isAuthenticated, isLoading, navigate, role]);

    return (
        <AuthProvider>
            {/* <BrowserRouter>             */}
            <div>
                <Routes>  {/*  Replace your existing router code with Routes and Route components */}
                    <Route path="/" element={<Home />} />
                    {/* Protected routes for authenticated users */}
                    <Route
                        path="/admin"
                        element={isAuthenticated && role === 'Admin' ? <Admin /> : <navigate to="/App.jsx" />}
                    />
                    <Route
                        path="/user-profile"
                        element={isAuthenticated && role === 'User' ? <Festivals /> : <navigate to="/" />}
                    />
                    <Route
                        path="/cafe-profile"
                        element={isAuthenticated && role === 'Business' ? <Cafes /> : <navigate to="/" />}
                    />
                </Routes>
            </div>
            {/* </BrowserRouter> */}
        </AuthProvider>
    );

    // return (
    //     <div className="app">
    //         <Navbar />
    //         <header className="header">
    //             <h1>Welcome to our Title</h1>
    //         </header>
    //         <main className="content">
    //             <AdminLogin />
    //             <Festivals images={festivals} speed={30000} />
    //             <FoodItems />
    //             <Cafes />
    //             <Festival />
    //         </main>
    //         <div className="footer">
    //             <Footer />
    //         </div>
    //     </div>
    // );
};

export default App;