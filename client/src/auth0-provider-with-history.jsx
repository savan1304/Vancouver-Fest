import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import App from "./App";
import { AuthTokenProvider } from "./AuthTokenContext";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./components/Home";
import Festival from "./components/home/Festival";
import Cafe from "./components/home/Cafe";
import UserProfilePage from "./components/UserProfilePage";
import VerifyUser from "./components/VerifyUser";
import Cafes from "./components/home/Cafes";
import AuthDebugger from "./components/AuthDebugger";
import Festivals from "./components/home/Festivals";
import Layout from "./layout"

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
                        cacheLocation="localstorage"
                    >
                        <AuthTokenProvider>
                            <Layout>
                            <Routes>
                                <Route path="/app" element={<App />} />
                                <Route path="/Festival/:id" element={<Festival />} />
                                <Route path="/Cafe/:id" element={<Cafe />} />
                                <Route path="/profile" element={<UserProfilePage />} />
                                <Route path="/verify-user" element={<VerifyUser />} />
                                <Route path="/Cafes" element={<Cafes />} />
                                <Route path="/AuthDebugger" element={<AuthDebugger />} />
                                <Route path="/Festivals" element={<Festivals />} />
                                <Route path="/" element={<Home />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                            </Layout>
                        </AuthTokenProvider>
                    </Auth0Provider>
                </BrowserRouter>
            </React.StrictMode>
        );
    };

