import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/About";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import "./App.css"
import Skincare from "./Pages/Skincare";
import WickedX from "./Pages/WickedX";
import BestSeller from "./Pages/BestSeller";
import Eyes from "./Pages/Eyes";
import Face from "./Pages/Face";

import Lip from "./Pages/Lip";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
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
      {path:"/skincare",element:<Skincare/>},
      {path:"/wickedx",element:<WickedX/>},
      {path:"/bestseller",element:<BestSeller/>},
      {path:"/eye",element:<Eyes/>},
      {path:"/face",element:<Face/>},
      {path:"/lip",element:<Lip/>},
      {path:"/contact",element:<Contact/>}
    ],
  },
  {path:"/login",element:<Login/>},
  {path:"/signup",element:<Signup/>}
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
