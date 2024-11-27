import React, { useState } from "react";
import PageSection from "../components/layout/PageSection";
import Rattings from "../components/Rattings";
import { FaEye } from "react-icons/fa";
import Button from "../components/Buttons/Button";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

const imgUrls = [
  "/fashion-3.png",
  "/fashion-2.png",
  "/fashion-1.png",
  "/fashion-1.png",
];

const ShopDetail: React.FC = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <PageSection pageHead="Shope Details" />
      <div className="mt-5 grid grid-cols-2 gap-10 px-2">
        <div className={"grid grid-cols-[20%_80%] gap-4"}>
          <div className="flex flex-col gap-4">
            {imgUrls.map((value, index) => (
              <img
                src={value}
                className={`${
                  index === 0 && "border border-color-theme"
                } rounded`}
              />
            ))}
          </div>
          <div className="h-full flex overflow-hidden">
            <img src="/shop-5.jpg" alt="" className="object-cover rounded" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-color-theme text-sm font-bold uppercase ">
              Modern Dress
            </h1>
            <p className="text-color-heading text-3xl font-bold">
              Poncho Sweater International
            </p>

            <div className="flex gap-1 items-center">
              <Rattings ratting={4} color="!text-color-heading" />
              <span className="text-color-heading font-semibold">
                (1 customer review)
              </span>
            </div>
          </div>
          <div className="flex gap-2 text-xl font-semibold">
            <h1 className=" text-color-heading">$260.00 </h1>
            <h1 className="text-color-text-body line-through">$360.00</h1>
          </div>
          <hr />
          <p className="text-color-text-body text-base">
            Eget taciti odio cum habitant egestas conubia turpis phasellus, ante
            parturient donec duis primis nam faucibus augue malesuada venenatis
          </p>
          <p className="flex gap-1 items-center text-base text-color-heading">
            <FaEye />
            28 people are viewing this right now
          </p>
          <hr />
          <div className="text-base text-color-heading flex flex-col gap-2">
            <p className="flex gap-2 items-center">
              <GoArrowSwitch size={20} /> Free returns
            </p>
            <p className="flex gap-2 items-center">
              <MdOutlineLocalShipping size={20} />
              Free shipping via DHL, fully insured
            </p>
            <p className="flex gap-2 items-center">
              <CiCircleCheck size={20} />
              All taxes and customs duties included
            </p>
          </div>
          <div className="flex gap-4">
            <input
              type="number"
              className="w-[10%] text-center focus:outline-none bg-color-theme text-white text-base"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
            <button className="bg-white border-2 text-color-heading border-color-heading hover:bg-color-heading hover:text-white  rounded-3xl  text-base font-bold px-3 py-3 flex-1 transition-all duration-300">
              Add to Cart
            </button>
          </div>
          <Button
            text="Buy The Item Now"
            isRed={true}
            isWhite={false}
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default ShopDetail;
