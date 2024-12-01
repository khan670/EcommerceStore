import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Rattings from "../Rattings";
import { ProductType } from "../../Types/ShopTypes";

const ShopCard = ({ data }: { data: ProductType }) => {
  const randomNumber = Math.floor(Math.random() * 6);
  const imgUrls: string[] = [];
  if (Array.isArray(data.images)) {
    data.images.forEach((items) => {
      try {
        if (items) {
          const parsedImages = JSON.parse(items);
          if (Array.isArray(parsedImages) && parsedImages[0]) {
            imgUrls.push(parsedImages[0]);
          } else {
            imgUrls.push(parsedImages);
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
  const defaultImage = "/fashion-4.png";
  const displayImage =
    imgUrls.length > 0
      ? imgUrls[0]
      : Array.isArray(data.images) && data.images[0]
      ? data.images[0]
      : defaultImage;
  // const imgUrl = JSON.parse(data.images[0]);
  // console.log(imgUrl);
  return (
    <div className="border border-gray-300 rounded-lg group cursor-pointer relative overflow-hidden bg-white">
      <div className="relative overflow-hidden ">
        <img
          src={displayImage}
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
          to={`/shop/${data.id}`}
          className="hover:text-color-theme text-lg font-bold text-color-heading transition-all duration-300"
        >
          {data.title}
        </Link>
        <div className="flex gap-2 items-center">
          <Rattings ratting={randomNumber} />
          (Reviews)
        </div>
        <div className="flex gap-2">
          <h1 className="line-through text-gray-400 font-semibold text-base">
            $ {data.price + 10}.00
          </h1>
          <h1 className=" text-color-theme font-bold text-base">
            $ {data.price}.00
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
