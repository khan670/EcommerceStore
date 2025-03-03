import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Rattings from "../Rattings";
import { Product, ProductType } from "../../Types/ShopTypes";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../store/CartSlice";

const ShopCard = ({ data }: { data: ProductType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartData } = useSelector((state: { cart: Product }) => state?.cart);
  const randomNumber = Math.floor(Math.random() * 6);
  const imgUrls: string[] = [];
  const handleDetailPage = () => {
    navigate(`/shop/${data.id}`);
  };
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
  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (!user) {
      toast.error("Please login first");
      return;
    }
    const existingProduct = cartData?.find(
      (item: { id: number }) => item.id === data.id
    );
    if (existingProduct) {
      toast.error("Product already added to cart");
      return;
    }
    const productCart = {
      ...data,
      quantity: 1,
    };
    dispatch(addToCart(productCart));
    toast.success("Product added to cart successfully");
  };

  const defaultImage = "/fashion-4.png";
  const displayImage =
    imgUrls.length > 0
      ? imgUrls[0]
      : Array.isArray(data.images) && data.images[0]
      ? data.images[0]
      : defaultImage;
  return (
    <div className="border border-gray-300 rounded-lg group cursor-pointer relative overflow-hidden bg-white">
      <div className="relative overflow-hidden ">
        <img
          loading="lazy"
          src={displayImage}
          alt=""
          className="group-hover:scale-105 transform transition-all duration-300"
        />
        <div className="flex flex-col gap-2 absolute top-3 -right-2 opacity-0 group-hover:opacity-100         group-hover:right-5 transition-all duration-500">
          <span
            className="inline-block bg-white p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300"
            onClick={handleAddToCart}
          >
            <IoCartOutline size={18} />
          </span>
          <span className="inline-block bg-white p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300">
            <IoMdHeartEmpty size={18} />
          </span>
          <span
            className="inline-block bg-white p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300"
            onClick={handleDetailPage}
          >
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
