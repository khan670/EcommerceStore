import React, { Suspense, useEffect } from "react";
import Loader from "../components/Loader";
const Hero = React.lazy(() => import("../components/layout/Home/Hero"));
const Categories = React.lazy(
  () => import("../components/layout/Home/Categories")
);
const Fashions = React.lazy(() => import("../components/layout/Home/Fashions"));
const Collections = React.lazy(
  () => import("../components/layout/Home/Collections")
);
const Discount = React.lazy(() => import("../components/layout/Home/Discount"));
const Sponsers = React.lazy(() => import("../components/layout/Home/Sponsers"));
const Deals = React.lazy(() => import("../components/layout/Home/Deals"));

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Roiser - Home";
  });
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero />
        <Categories />
        <Fashions />
        <Collections />
        <Discount />
        <Sponsers />
        <Deals />
      </Suspense>
    </>
  );
};

export default Home;
