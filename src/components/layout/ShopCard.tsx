import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Rattings from "../Rattings";
import { FashionsDataType } from "../../Types/HomeType";

const ShopCard = ({ data }: { data: FashionsDataType }) => {
  return (
    <div className="border border-gray-300 rounded-lg group cursor-pointer relative overflow-hidden bg-white">
      <div className="relative overflow-hidden ">
        <img
          src={data.imgUrl}
          alt=""
          className="group-hover:scale-105 transform transition-all duration-300"
        />
        <div className="flex flex-col gap-2 absolute top-3 -right-2 opacity-0 group-hover:opacity-100         group-hover:right-5 transition-all duration-500">
          <span className="inline-block bg-white p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300">
            <IoCartOutline size={18} />
          </span>
          <span className="inline-block bg-white p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300">
            <IoMdHeartEmpty size={18} />
          </span>
          <span className="inline-block bg-white p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300">
            <IoEyeOutline />
          </span>
        </div>
      </div>
      <span className="bg-color-theme text-sm text-white py-1 px-3 absolute top-4 left-4">
        New
      </span>
      <div className="p-6 flex flex-col gap-2">
        <p className="text-xs text-gray-400 font-semibold ">LEVI'S COTTON</p>
        <Link
          to=""
          className="hover:text-color-theme text-lg font-bold text-color-heading transition-all duration-300"
        >
          Monica Diara Party Dress
        </Link>
        <div className="flex gap-2 items-center">
          <Rattings ratting={data.rating} />({data.totalRattings} Reviews)
        </div>
        <div className="flex gap-2">
          <h1 className="line-through text-gray-400 font-semibold text-base">
            $ {data.oldPrice}.00
          </h1>
          <h1 className=" text-color-theme font-bold text-base">
            $ {data.newPrice}.00
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
