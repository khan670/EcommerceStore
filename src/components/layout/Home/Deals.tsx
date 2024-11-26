import { ShopCardData } from "../../../data/Fashions";
import ShopCard from "../ShopCard";
import Button from "../../Buttons/Button";
import { LuBadgePercent } from "react-icons/lu";

const Deals = () => {
  return (
    <div className="bg-gray-100 relative py-10 px-20">
      <div className="absolute bottom-0 left-0 ">
        <img src="/deal-shape.png" alt="" />
      </div>
      <div className="flex items-center gap-10 relative z-10 ">
        <div className="w-1/2 flex flex-col items-start gap-10 ">
          <div className="">
            <h1 className="text-4xl text-color-heading font-extrabold">
              Deal Of the days
            </h1>
            <p className="text-gray-500 text-base mt-3 font-semibold">
              Elegant pink origami design three type of dimensional view and
              decoration co Great for adding a decorative...
            </p>
          </div>
          <div className="flex gap-5 items-center ">
            <span className="bg-color-theme text-white p-3 rounded-full inline-block">
              <LuBadgePercent size={20} />
            </span>
            <p className="text-lg text-color-heading ">
              Limited Time offer. The Deal will expire one august 18, 2024
            </p>
          </div>
          <Button text="View All Collection" isRed={false} isWhite={true} />
        </div>
        <div className="flex  gap-5">
          {ShopCardData.map((value) => (
            <ShopCard data={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
