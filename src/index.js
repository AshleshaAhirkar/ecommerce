import { Auth0Provider } from '@auth0/auth0-react';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/cart_context";
import { FilterContextProvider } from "./context/filter_context";
import { AppProvider } from "./context/productcontex";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Auth0Provider
    domain="dev-83g2pzwb80qgsmvb.us.auth0.com"
    clientId="Av3uboze0Wn7b7yok5UZLI98SAxYKrV8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>

  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();