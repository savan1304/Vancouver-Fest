// auth0-provider-with-history.jsx
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

    export const Auth0ProviderWithHistory = ({ children }) => {
        const requestedScopes = ["profile", "email"];
        // const history = useHistory();

        // const onRedirectCallback = (appState) => {
        //     history.push(appState?.returnTo || window.location.pathname);
        // };

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
                        // onRedirectCallback={onRedirectCallback}
                        cacheLocation="localstorage"
                    >
                        <AuthTokenProvider>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/app" element={<App />} />
                                <Route path="*" element={<NotFound />} />
                                <Route path="/Festival/:id" element={<Festival />} />
                                <Route path="/Cafe/:id" element={<Cafe />} />
                                <Route path="/profile" element={<UserProfilePage />} />
                                <Route path="/verify-user" element={<VerifyUser />} />
                                <Route path="/Cafes" element={<Cafes />} />
                            </Routes>
                        </AuthTokenProvider>
                    </Auth0Provider>
                </BrowserRouter>
            </React.StrictMode>
        );
    };

