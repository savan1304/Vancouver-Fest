import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
import App from "./App"


const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);


root.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);