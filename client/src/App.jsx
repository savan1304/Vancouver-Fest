import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Home from './components/Home';

function App() {
    const { isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        console.log("User logged in")
    } else {
        console.log("without log in ")
    }

    return (
        <div className="app">
            <Home />
        </div>
    );
}

export default App;
