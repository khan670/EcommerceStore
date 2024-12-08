import React, { Suspense, useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
const Home = React.lazy(() => import("./pages/Home"));
const AppLayout = React.lazy(() => import("./pages/AppLayout"));
const Shop = React.lazy(() => import("./pages/Shop"));
const ShopDetail = React.lazy(() => import("./pages/Shop-detail"));
const ShopGrid = React.lazy(() => import("./pages/shop-grid"));
const AboutUs = React.lazy(() => import("./pages/About-us"));
const Faqs = React.lazy(() => import("./pages/Faqs"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Admin = React.lazy(() => import("./pages/Admin/Admin"));
const AddProduct = React.lazy(() => import("./pages/Admin/AddProduct"));
const AddCategory = React.lazy(() => import("./pages/Admin/AddCategory"));
const AllUsers = React.lazy(() => import("./pages/Admin/AllUsers"));
const Profile = React.lazy(() => import("./pages/Admin/Profile"));

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <Suspense fallback={<Loader />}>
          <AppLayout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/shop",
          element: (
            <Suspense fallback={<Loader />}>
              <Shop />
            </Suspense>
          ),
        },
        {
          path: "/shop/:shopId",
          element: (
            <Suspense fallback={<Loader />}>
              <ShopDetail />
            </Suspense>
          ),
        },
        {
          path: "/shop/grid",
          element: (
            <Suspense fallback={<Loader />}>
              <ShopGrid />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<Loader />}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/faqs",
          element: (
            <Suspense fallback={<Loader />}>
              <Faqs />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/register",
          element: (
            <Suspense fallback={<Loader />}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/checkout",
          element: (
            <Suspense fallback={<Loader />}>
              <Checkout />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "admin",
      element: (
        <Suspense fallback={<Loader />}>
          <Admin />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<Loader />}>
              <AddProduct />
            </Suspense>
          ),
        },
        {
          path: "addcategory",
          element: (
            <Suspense fallback={<Loader />}>
              <AddCategory />
            </Suspense>
          ),
        },
        {
          path: "allusers",
          element: (
            <Suspense fallback={<Loader />}>
              <AllUsers />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  useEffect(() => {
    document.title = "Roiser ";
  });
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
