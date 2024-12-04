import React from "react";
import Button from "../../Buttons/Button";

const Discount: React.FC = () => {
  return (
    <div className="bg-[url('/cta-bg.jpg')] text-center py-20   relative bg-fixed mix-blend-multiply bg-center bg-cover text-white mt-10">
      <div className="absolute top-0 left-0 w-full h-full bg-color-theme mix-blend-multiply"></div>
      <div className="relative z-20 flex flex-col gap-10 items-center">
        <p className="text-sm font-medium uppercase">
          Spring summer 22 women’s collection
        </p>
        <h1 className="text-4xl md:text-7xl w-[70%] font-extrabold ">
          -15% Off Discount All Here
        </h1>
        <Button text="View Collection" isRed={false} isWhite={true} />
      </div>
    </div>
  );
};

export default Discount;
