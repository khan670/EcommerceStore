import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const PageSection = ({ pageHead }: { pageHead: string }) => {
  return (
    <div className="bg-gray-200 relative py-20 px-3 overflow-hidden">
      <img
        src="/page-header-shape.png"
        alt=""
        className="absolute bottom-0 left-0"
      />
      <div className="relative z-10 flex justify-between">
        <h1 className="text-black text-7xl font-extrabold">{pageHead}</h1>
        <div className="flex gap-1 items-center">
          <p className="text-gray-500 font-semibold text-lg">Home</p>
          <IoIosArrowForward className="text-gray-500" />
          <p className="font-bold text-lg ">{pageHead}</p>
        </div>
      </div>
    </div>
  );
};

export default PageSection;
