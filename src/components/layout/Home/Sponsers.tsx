import React from "react";
import { sponsersImgUrl } from "../../../data/Home";

const Sponsers: React.FC = () => {
  return (
    <div className="grid grid-cols-5 my-10 border-t border-t-gray-300">
      {sponsersImgUrl.map((value) => (
        <div className="p-10 border-r  border-r-gray-300 border-b border-b-gray-300 hover:shadow-custom-shadow transform  transition-all duration-500 overflow-hidden cursor-pointer">
          <img src={value} alt="" className="mx-auto" />
        </div>
      ))}
    </div>
  );
};

export default Sponsers;
