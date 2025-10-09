import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/About";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
