import React from "react";
import Button from "../../Buttons/Button";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const handleShopPage = () => {
    navigate("/shop");
  };
  return (
    <div className="bg-red-50 relative overflow-hidden -top-11">
      <img
        src="/hero-peoples.png"
        alt=""
        className="absolute top-0 -left-32 z-10"
      />
      <img
        src="/hero-shape-1.png"
        alt=""
        className="absolute bottom-0 left-0 "
      />
      <img
        src="/hero-shape-2.png"
        alt=""
        className="absolute top-0 right-0 z-[2]"
      />
      <div className="container  flex flex-col  items-end justify-center z-30 relative h-screen">
        <div className="flex flex-col gap-5 items-start w-1/4">
          <h1 className="text-sm uppercase text-color-theme font-bold text-start  ">
            ummer 22 women’s collection
          </h1>
          <h1 className="text-5xl font-extrabold leading-snug text-color-heading">
            Super COLLECTION FOR WOMEN
          </h1>
          <p>
            {" "}
            <span className="inline-block text-sm text-color-heading">
              From
            </span>{" "}
            <span className="text-color-theme text-3xl font-extrabold ">
              $320.00
            </span>
          </p>
          <Button
            text="View Collection"
            isRed={true}
            isWhite={false}
            handler={handleShopPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
