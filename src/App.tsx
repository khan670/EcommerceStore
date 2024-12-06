import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/Shop-detail";
import ShopGrid from "./pages/shop-grid";
import AboutUs from "./pages/About-us";
import Faqs from "./pages/Faqs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import AllUsers from "./pages/AllUsers";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop/:shopId",
          element: <ShopDetail />,
        },
        {
          path: "/shop/grid",
          element: <ShopGrid />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/faqs",
          element: <Faqs />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "admin",
      element: <Admin />,
      children: [
        {
          path: "",
          element: <AddProduct />,
        },
        {
          path: "addcategory",
          element: <AddCategory />,
        },
        {
          path: "allusers",
          element: <AllUsers />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
