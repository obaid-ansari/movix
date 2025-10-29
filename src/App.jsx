import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import MovieCard from "./components/MovieCard";
import Saved from "./components/Saved";
import ErrorPage from "./pages/ErrorPage";
import { MovieProvider } from "./context/MovieProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie/:id",
          element: <MovieCard />,
        },
        {
          path: "/liked",
          element: <Saved />,
        },
      ],
    },
  ]);

  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
};

export default App;
