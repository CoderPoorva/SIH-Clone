import React from "react";
import AppLayout from "./Components/AppLayout/AppLayout";
import HomePage from "./Components/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ContactPage from "./Components/ContactPage/ContactPage";
import Faqs from "./Components/FAQS/Faqs";
import ProjectImplementaion from "./Components/Project Implementation/ProjectImplementaion";
import KnowurSpoc from "./KnowYourSPOC/KnowurSpoc";
import ProblemStatement from "./Components/ProblemStatement/ProblemStatement";

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
        {
          path: "/ProblemStatement",
          element: <ProblemStatement />,
        },
        {
          path: "/KnowYourSPOC",
          element: <KnowurSpoc />,
        },
        {
          path: "/ProjectImplementaion",
          element: <ProjectImplementaion />,
        },
        {
          path: "/Faqs",
          element: <Faqs />,
        },

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
