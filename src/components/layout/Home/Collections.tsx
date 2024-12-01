import React from "react";
import { CollectionsData } from "../../../data/Fashions";

const Collections: React.FC = () => {
  return (
    <div className="grid grid-cols-2 px-4 gap-4 mt-10">
      {CollectionsData.map((value, index) => (
        <div className={`${index === 0 && "row-span-2"} relative`}>
          <img src={value.imgUrl} alt="" />
          <div className="absolute top-10 left-10 flex gap-4 flex-col items-start w-3/5">
            <span className="px-3 py-2 bg-white text-color-theme inline-block rounded text-xs font-bold">
              {value.numProducts}+ Products
            </span>
            <h1 className="text-color-heading font-bold text-2xl capitalize">
              {value.collection}
            </h1>
            {value.text && (
              <p className="text-sm text-gray-500 leading-6">{value.text}</p>
            )}
            {value.collections.map((value) => (
              <p className="text-color-heading font-semibold hover:text-color-theme text-sm cursor-pointer transition-all duration-300">
                {value}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collections;
