import React from "react";
import Hero from "../components/layout/Home/Hero";
import Categories from "../components/layout/Home/Categories";
import Fashions from "../components/layout/Home/Fashions";
import Collections from "../components/layout/Home/Collections";
import Discount from "../components/layout/Home/Discount";
import Sponsers from "../components/layout/Home/Sponsers";
import Deals from "../components/layout/Home/Deals";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Fashions />
      <Collections />
      <Discount />
      <Sponsers />
      <Deals />
    </>
  );
};

export default Home;
