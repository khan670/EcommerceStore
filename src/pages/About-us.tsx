import React, { Suspense, useEffect } from "react";
import Loader from "../components/Loader";
const PageSection = React.lazy(
  () => import("../components/layout/PageSection")
);
const Sponsers = React.lazy(() => import("../components/layout/Home/Sponsers"));
const LifeStyle = React.lazy(
  () => import("../components/layout/About/LifeStyle")
);
const Services = React.lazy(
  () => import("../components/layout/About/Services")
);
const Customers = React.lazy(
  () => import("../components/layout/About/Customers")
);

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = "Roiser - About Us";
  });
  return (
    <>
      <Suspense fallback={<Loader />}>
        <PageSection pageHead="About Us" />
        <LifeStyle />
        <Services />
        <Customers />
        <Sponsers />
      </Suspense>
    </>
  );
};

export default AboutUs;
