import React from "react";
import AppLayout from "./Components/AppLayout/AppLayout";
import HomePage from "./Components/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ContactPage from "./Components/ContactPage/ContactPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        // {
        //   path: "/about",
        //   element: <About />,
        // },

        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
