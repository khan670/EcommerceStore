import React, { useState } from "react";
import PageSection from "../components/layout/PageSection";
import { IoIosArrowDown } from "react-icons/io";
import {
  CheckBoxData,
  CheckBoxPrice,
  FashionsData,
  sortedBtnData,
} from "../data/Fashions";
import ShopCard from "../components/layout/ShopCard";
import CheckBox from "../components/Inputs/CheckBox";

const ShopGrid: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <PageSection pageHead="Shop Grid" />
      <div className="flex mt-10 gap-3 px-2">
        <div className="flex flex-col items-start w-4/5">
          <div className="relative ml-auto">
            <button
              className="px-2 py-1 border text-sm border-gray-200 flex gap-1 items-center "
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Default Sorting
              <IoIosArrowDown
                className={`${
                  isOpen ? "rotate-180 transform" : ""
                } transition-all duration-300`}
              />
            </button>
            <div
              className={`flex flex-col border border-gray-200 absolute top-8 z-20 bg-white  ${
                isOpen ? "opacity-100 z-10" : "opacity-0 -z-[1]"
              } transition-all duration-300 w-full`}
            >
              {sortedBtnData.map((value) => (
                <button className="px-2 py-1 text-sm hover:bg-color-heading hover:text-white text-start">
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 mt-5 gap-5 ">
            {FashionsData.map((value) => (
              <ShopCard data={value} />
            ))}
          </div>
        </div>
        <div className=" w-1/5 flex flex-col gap-5">
          <div className="border border-gray-300 rounded-lg p-4">
            <h1 className="text-lg font-extrabold  text-color-heading mb-2">
              Categories
            </h1>
            <hr />
            <div className="mt-3 flex flex-col gap-3 items-start">
              {CheckBoxData.map((value) => (
                <CheckBox checkBoxData={value} handler={() => {}} />
              ))}
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-4">
            <h1 className="text-lg font-extrabold  text-color-heading mb-2">
              Price
            </h1>
            <hr />
            <div className="p-3 flex flex-col gap-3 items-start">
              {CheckBoxPrice.map((value) => (
                <CheckBox checkBoxData={value} handler={() => {}} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGrid;
