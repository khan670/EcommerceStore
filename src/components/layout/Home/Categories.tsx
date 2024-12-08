"use client";
import React, { useRef } from "react";
import { discountOffers } from "../../../data/Categories";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Heading";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../api/Categories";
import { CategoryType } from "../../../Types/ShopTypes";
const Categories: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const query = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });

  const categories = query.data;
  if (query.isLoading) return <h1>loading...</h1>;
  return (
    <>
      <div className="px-2 overflow-hidden mt-9">
        <div className=" flex sm:flex-row flex-col gap-5 justify-between lg:items-center mb-7">
          <div className="flex flex-col gap-1 lg:gap-4">
            <Heading text="Best for your categories" />
            <p className="text-sm text-gray-400 font-semibold">
              29 categories belonging to a total 15,892 products
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <button
              className="p-3 transition-all duration-300 bg-gray-200 rounded-full text-gray-400 hover:bg-color-theme hover:text-white"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <IoMdArrowBack />
            </button>
            <button
              className="p-3 bg-gray-200 rounded-full text-gray-400 hover:bg-color-theme hover:text-white transition-all duration-300"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <IoMdArrowForward />
            </button>
          </div>
        </div>
        <hr />
        <div className="w-full overflow-hidden">
          <Slider {...settings} ref={sliderRef} className="mt-16 ">
            {categories.map((value: CategoryType, index: number) => {
              if (index <= 4)
                return (
                  <div className="bg-gray-200 p-2 rounded flex flex-col gap-4 hover:bg-color-theme group hover:text-white cursor-pointer transition-all duration-300">
                    <img
                      src={value.image}
                      alt=""
                      className="rounded"
                      loading="lazy"
                    />
                    <p className="uppercase mt-2 text-center font-bold text-color-heading group-hover:text-white ">
                      {value.name}
                    </p>
                  </div>
                );
            })}
          </Slider>
        </div>
      </div>
      <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
        {discountOffers.map((value) => (
          <div className="relative flex items-center justify-center p-2 bg-gray-100 h-64 group overflow-hidden cursor-pointer">
            <img
              src={value.imgUrl}
              alt=""
              className="text-end absolute opacity-60 right-1 -bottom-4  transform transition-all duration-300 group-hover:scale-105 z-20 "
            />
            <img src="dis-shpe.png" alt="" className="absolute bottom-0" />
            <div className="relative z-30 p-7 flex flex-col gap-3">
              <p className="text-color-theme text-base font-medium">
                Special {value.discount}% Disocunt
              </p>
              <h1 className="font-bold text-2xl ">{value.text}</h1>
              <Link
                to={value.path}
                className="flex items-center gap-2 text-color-heading font-bold text-base "
              >
                <span className="inline-block bg-red-100 text-color-theme p-1 rounded-full">
                  <BsPlus />
                </span>
                View Collection
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
