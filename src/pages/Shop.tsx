import React from "react";
import ShopCard from "../components/layout/ShopCard";
import { FashionsData } from "../data/Fashions";
import PageSection from "../components/layout/PageSection";
import Pagination from "../components/Pagination";

const Shop: React.FC = () => {
  return (
    <>
      <PageSection pageHead="Shop" />
      <div className="grid grid-cols-4 gap-4 px-2 mt-16">
        {FashionsData.map((value) => {
          return (
            <>
              <ShopCard data={value} key={value.id} />
              <ShopCard data={value} key={value.id + 4} />
            </>
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default Shop;
