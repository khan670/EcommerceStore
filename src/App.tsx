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
