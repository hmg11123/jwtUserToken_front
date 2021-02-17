import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App.jsx";
import { ApolloProvider } from "react-apollo-hooks";
import Client from "./Apollo/Client";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
 <CookiesProvider>
  <ApolloProvider client={Client}>
   <App />
  </ApolloProvider>
 </CookiesProvider>,
 document.getElementById("app")
);
