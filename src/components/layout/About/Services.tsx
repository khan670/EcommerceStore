import React from "react";
import { ServiceData } from "../../../data/About";

const Services: React.FC = () => {
  return (
    <div className="grid gap-7 md:grid-cols-3 grid-cols-1 mt-10 px-2 py-5">
      {ServiceData.map((value, index) => (
        <>
          <div className="flex flex-col items-center gap-5 py-7  px-6">
            <span className="p-3 shadow-custom-shadow font-extrabold rounded-full text-center inline-block">
              0{index + 1}
            </span>
            <h1 className="text-xl font-extrabold">{value.heading}</h1>
            <p className="text-center text-base text-color-text-body font-semibold leading-8">
              {value.paragraph}
            </p>
          </div>
          <img src={value.imgUrl} alt="" loading="lazy" />
        </>
      ))}
    </div>
  );
};

export default Services;
