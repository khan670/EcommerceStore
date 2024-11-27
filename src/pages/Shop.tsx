import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ShopCard from "../components/layout/ShopCard";
import { FashionsData } from "../data/Fashions";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import PageSection from "../components/layout/PageSection";

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
      <div className="flex gap-2 mt-10 justify-center">
        <button className="bg-color-theme text-base px-3 py-2 text-white">
          1
        </button>
        <button className="bg-gray-200 text-sm px-3 py-2 text-black text-center">
          2
        </button>
        <button className="bg-gray-200 text-sm text-black px-3 py-2 text-center">
          3
        </button>
        <button className="bg-color-theme text-sm px-3 py-2 text-center text-white">
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </>
  );
};

export default Shop;
