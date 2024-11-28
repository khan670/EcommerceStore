import React from "react";
import PageSection from "../components/layout/PageSection";
import Sponsers from "../components/layout/Home/Sponsers";
import LifeStyle from "../components/layout/About/LifeStyle";
import Team from "../components/layout/About/Team";
import Services from "../components/layout/About/Services";
import Customers from "../components/layout/About/Customers";

const AboutUs: React.FC = () => {
  return (
    <>
      <PageSection pageHead="About Us" />
      <LifeStyle />
      <Team />
      <Services />
      <Customers />
      <Sponsers />
    </>
  );
};

export default AboutUs;
