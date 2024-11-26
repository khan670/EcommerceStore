import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HeaderLinks, NavigationData, StoreInfo } from "../../data/Header";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-color-theme py-5 px-3 flex justify-between ">
        <ul className="flex gap-5 text-sm font-bold text-white capitalize">
          {HeaderLinks.map((item) => (
            <Link to={item.link} key={item.id}>
              {item.title}
            </Link>
          ))}
        </ul>
        <p className="text-white text-sm font-semibold ">
          Free shipping for all orders of 150$
        </p>
        <ul className="flex gap-5 text-sm font-bold text-white">
          {StoreInfo.map((item) =>
            item.link ? (
              <Link to={item.link} key={item.id}>
                {item.title}
              </Link>
            ) : (
              <p>{item.title}</p>
            )
          )}
        </ul>
      </div>
      <div className="py-6 bg-[#FFFFFF] px-3 flex items-center gap-5">
        <img src="/logo-1.png" />
        <div className="border border-gray-300 py-2 px-3 flex items-center  ">
          <p className="text-sm text-black font-bold border-r border-r-gray-300 px-2">
            All Categories
          </p>
          <input
            type="text"
            placeholder="Search Here..."
            className="px-3 text-sm focus:outline-none "
          />
          <button className="bg-color-theme text-white py-2 px-3 text-xs uppercase rounded">
            search here
          </button>
        </div>
        <div className="ml-auto">
          <div className="flex items-center gap-1 ">
            <div className="flex gap-2 items-center border-r border-r-gray-300 px-3">
              <div className="flex flex-col gap-1 ">
                <p className="text-end text-sm text-color-text-body font-medium">
                  Call Us Now:
                </p>
                <a
                  href="tel:123456789"
                  className="text-base text-black font-bold inline-block"
                >
                  +(92) 123456789
                </a>
              </div>
              <div className="text-2xl inline-block text-black bg-gray-200 p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300 cursor-pointer">
                <BsTelephone size={20} />
              </div>
            </div>
            <div className="border-r border-r-gray-300 px-3 flex items-center">
              <span className="text-2xl inline-block text-black bg-gray-200 p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300 cursor-pointer">
                <IoHeartOutline size={20} />
              </span>
            </div>
            <div className="flex gap-2 items-center px-3">
              <span className="text-2xl inline-block text-black bg-gray-200 p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300 cursor-pointer relative">
                <PiShoppingCartSimple size={20} />
              </span>
              <div>
                <p className="text-start text-sm text-color-text-body font-medium">
                  Your Cart,
                </p>
                <p className="text-base -mt-1 text-black font-bold inline-block">
                  $123,44.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 flex rounded-lg sticky top-0 z-30 overflow-visible">
        <div className="flex-1 bg-color-heading py-4 rounded-s-lg px-5 flex items-center">
          <ul className="flex gap-10 text-sm font-bold text-white uppercase items-center">
            {NavigationData.map((item) => (
              <Link to={item.link} key={item.id}>
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className=" bg-color-theme py-4 px-5 rounded-e-lg flex items-center gap-2">
          <p className="text-base capitalize font-semibold text-white">
            Get 50% discount now
          </p>
          <p className="text-sm uppercase font-semibold text-color-theme px-3 py-1 rounded-2xl bg-white">
            sale
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
