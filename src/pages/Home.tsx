import React, { Suspense } from "react";
import Loader from "../components/Loader";
const Hero = React.lazy(() => import("../components/layout/Home/Hero"));
// import Hero from "../components/layout/Home/Hero";
const Categories = React.lazy(
  () => import("../components/layout/Home/Categories")
);
// import Categories from "../components/layout/Home/Categories";
const Fashions = React.lazy(() => import("../components/layout/Home/Fashions"));
// import Fashions from "../components/layout/Home/Fashions";
const Collections = React.lazy(
  () => import("../components/layout/Home/Collections")
);
// import Collections from "../components/layout/Home/Collections";
const Discount = React.lazy(() => import("../components/layout/Home/Discount"));
// import Discount from "../components/layout/Home/Discount";
const Sponsers = React.lazy(() => import("../components/layout/Home/Sponsers"));
// import Sponsers from "../components/layout/Home/Sponsers";
const Deals = React.lazy(() => import("../components/layout/Home/Deals"));
// import Deals from "../components/layout/Home/Deals";

const Home: React.FC = () => {
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
