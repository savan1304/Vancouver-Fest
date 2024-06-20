// auth0-provider-with-history.jsx
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import App from "./App";
import { AuthTokenProvider } from "./AuthTokenContext";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./components/Home";

export const Auth0ProviderWithHistory = ({ children }) => {
    const requestedScopes = ["profile", "email"];

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Auth0Provider
                    domain={process.env.REACT_APP_AUTH0_DOMAIN}
                    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
                    authorizationParams={{
                        redirect_uri: `${window.location.origin}`,
                        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
                        scope: requestedScopes.join(" "),
                    }}
                >
                    <AuthTokenProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/app" element={<App />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </AuthTokenProvider>
                </Auth0Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};
