import React, { Suspense } from "react";
const Header = React.lazy(() => import("../components/layout/Header"));
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
const Footer = React.lazy(() => import("../components/Footer"));

const AppLayout: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default AppLayout;
