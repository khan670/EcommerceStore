import React from "react";
import Heading from "../../Heading";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../../Buttons/Button";

const LifeStyle: React.FC = () => {
  return (
    <div className="grid grid-cols-2 py-10 items-start px-3 gap-3">
      <div className="py-10 flex flex-col gap-5 items-start">
        <Heading
          text="Creating a World Where Fashion is a Lifestyle"
          className="font-[900]"
        />
        <p className="text-base leading-8 text-color-text-body">
          Fashionable content invites us to embark on a fashion-forward journey,
          where creativity knows no bounds and self-expression is celebrated.
          So, let's dive into the world of fashion, where trends are set,
          boundaries are broken.
        </p>
        <div className="grid grid-cols-2 gap-5 justify-center w-full">
          {[1, 2, 3, 4].map((value) => (
            <div
              className="flex gap-2 items-center px-4 py-4 rounded shadow-custom-shadow w-full"
              key={value}
            >
              <IoIosCheckmarkCircle size={20} className="text-color-theme" />
              Fast Growing Sells
            </div>
          ))}
        </div>
        <div className="flex">
          <Button text="Learn More" className="" isRed={true} isWhite={false} />
        </div>
      </div>
      <div>
        <img src="/collection-1.png" alt="" />
      </div>
    </div>
  );
};

export default LifeStyle;
