import Slider from "react-slick";
import Heading from "../../Heading";
import ShopCard from "../ShopCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { getAllProducts } from "../../../api/Product";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../../../Types/ShopTypes";
const Fashions = () => {
  const refs = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
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
    queryKey: ["pagination"],
    queryFn: getAllProducts,
  });
  if (query.isLoading) return <div className="loader"></div>;
  const productData = query.data;
  if (query.isError) return <h1>Error in data Fetching</h1>;
  return (
    <div className="mt-16 px-2 overflow-hidden">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 flex-col mb-5">
          <Heading text="GET YOUR FASHION STYLE" />
          <p className="text-sm text-gray-400 font-semibold">
            29 categories belonging to a total 15,892 products
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="p-3 transition-all duration-300 bg-gray-200 rounded-full text-gray-400 hover:bg-color-theme hover:text-white"
            onClick={() => refs.current?.slickPrev()}
          >
            <IoMdArrowBack />
          </button>
          <button
            className="p-3 bg-gray-200 rounded-full text-gray-400 hover:bg-color-theme hover:text-white transition-all duration-300"
            onClick={() => refs.current?.slickNext()}
          >
            <IoMdArrowForward />
          </button>
        </div>
      </div>
      <hr />
      {query.isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="w-full overflow-hidden">
          <Slider ref={refs} {...settings} className="mt-10">
            {productData.map((value: ProductType, index: number) => {
              if (index <= 5) return <ShopCard data={value} />;
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Fashions;
