import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Watchlist from "./components/Watch list/Watchlist";
import Watching from "./components/Watching/Watching";
import Watched from "./components/Watched/Watched";
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/watchlist",
        element: <Watchlist></Watchlist>,
      },
      {
        path: "/watching",
        element: <Watching></Watching>,
      },
      {
        path: "/watched",
        element: <Watched></Watched>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
