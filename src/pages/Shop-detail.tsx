import React, { useEffect, useState } from "react";
import PageSection from "../components/layout/PageSection";
import Rattings from "../components/Rattings";
import { FaEye } from "react-icons/fa";
import Button from "../components/Buttons/Button";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../api/Product";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { toast } from "react-toastify";
import { Product } from "../Types/ShopTypes";

const ShopDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state: { cart: Product }) => state?.cart);
  const [imgIndex, setImgIndex] = useState(0);
  const params = useParams<{ shopId: any }>();
  const [count, setCount] = useState(1);
  useEffect(() => {
    document.title = "Roiser - Shop Details";
  });
  const query = useQuery({
    queryKey: ["product"],
    queryFn: () => getSingleProduct(params?.shopId),
  });
  const productData = query.data;
  console.log(productData);

  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (!user) {
      toast.error("Please login first");
      return;
    }
    const existingProduct = cartData?.find(
      (item: { id: number }) => item.id === productData.id
    );
    if (existingProduct) {
      toast.error("Product already added to cart");
      return;
    }
    const productCart = {
      ...productData,
      quantity: count,
    };
    dispatch(addToCart(productCart));
    toast.success("Product added to cart successfully");
  };

  if (query.isLoading) return <span className="loader mx-auto"></span>;
  return (
    <>
      <PageSection pageHead="Shope Details" />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
        <div className={"grid grid-cols-1 md:grid-cols-[20%_80%] gap-4"}>
          <div className="grid grid-cols-5 md:grid-cols-1 gap-4">
            {productData.images.map((value: string, index: number) => (
              <img
                src={value}
                className={`${
                  index === imgIndex && "border border-color-theme"
                } rounded transition-all duration-300 cursor-pointer`}
                onClick={() => setImgIndex(index)}
              />
            ))}
          </div>
          <div className="h-full flex overflow-hidden">
            <img
              src={productData.images[imgIndex]}
              alt=""
              className="object-cover rounded"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-color-theme text-sm font-bold uppercase ">
              {productData.category.name}
            </h1>
            <p className="text-color-heading text-3xl font-bold">
              {productData.title}
            </p>

            <div className="flex gap-1 items-center">
              <Rattings ratting={4} color="!text-color-heading" />
              <span className="text-color-heading font-semibold">
                (1 customer review)
              </span>
            </div>
          </div>
          <div className="flex gap-2 text-xl font-semibold">
            <h1 className=" text-color-heading">${productData.price}.00 </h1>
            <h1 className="text-color-text-body line-through">
              ${productData.price + 10}.00
            </h1>
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
          <div className="flex gap-7">
            <input
              type="number"
              className="w-[10%] text-center focus:outline-none bg-color-theme text-white text-base"
              value={count}
              onChange={(e) => {
                if (Number(e.target.value) < 1) return;
                setCount(Number(e.target.value));
              }}
            />
            <button
              className="bg-white border-2 text-color-heading border-color-heading hover:bg-color-heading hover:text-white  rounded-3xl  text-base font-bold px-3 py-3 flex-1 transition-all duration-300"
              onClick={handleAddToCart}
            >
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
      <div className="px-2 mt-10">
        <div className="flex gap-6 mb-3">
          <p className="text-lg  text-color-heading font-bold cursor-pointer transition-all duration-300">
            Description
          </p>
        </div>
        <hr />
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <p className="text-color-text-body text-base leading-8">
            {productData?.description}
          </p>
          <img
            src="https://html.rrdevs.net/roiser/assets/img/shop/shop-details-img.jpg"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ShopDetail;
