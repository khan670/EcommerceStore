import React, { useEffect, useRef, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoHeartOutline, IoMailOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HeaderLinks, NavigationData } from "../../data/Header";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, InitialStateType } from "../../store/CartSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniXMark } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CartData } from "../../Types/ShopTypes";
const Header: React.FC = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { cartData } = useSelector(
    (state: { cart: InitialStateType }) => state?.cart
  );
  const totalPrice = cartData.reduce(
    (acc: number, item: CartData) => acc + item.price * (item?.quantity || 1),
    0
  );

  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  const handleCartPage = () => {
    navigate("/cart");
  };
  const handleLogout = () => {
    if (userData.email) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      dispatch(clearCart());
      toast.success("Logout successfully");
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        const distanceFromTop = rect.top;
        if (distanceFromTop <= -50) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <header className="hidden md:block">
        <div className="bg-color-theme py-5 px-3 flex justify-between items-center ">
          <ul className="flex gap-5 items-center text-sm font-bold text-white capitalize">
            {HeaderLinks.map((item) => (
              <Link to={item.link} key={item.id}>
                {item.title}
              </Link>
            ))}
          </ul>
          <p className="text-white text-sm font-semibold ">
            Free shipping for all orders of 150$
          </p>
          <ul className="flex gap-5 text-sm font-bold text-white items-center">
            <button
              className="bg-color-light-gray py-2 px-3 text-color-heading rounded-lg"
              onClick={handleLogout}
            >
              {userData.email ? "Logout" : "Login"}
            </button>
            {userData.avatar && (
              <img
                src={userData.avatar}
                alt=""
                width={40}
                loading="lazy"
                height={40}
                className="rounded-full"
              />
            )}
          </ul>
        </div>
        <div
          className="py-6 bg-[#FFFFFF] px-3 flex items-center gap-5"
          ref={stickyRef}
        >
          <img src="/logo-1.png" loading="lazy" />

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
                    +(92) 33173-70405
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
                <span
                  className="text-2xl inline-block text-black bg-gray-200 p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300 cursor-pointer relative"
                  onClick={handleCartPage}
                >
                  <PiShoppingCartSimple size={20} />
                  <p className=" absolute text-xs px-1 text-white border border-gray-300 top-0 right-0  rounded-full bg-color-theme">
                    {cartData.length}
                  </p>
                </span>
                <div>
                  <p className="text-start text-sm text-color-text-body font-medium">
                    Your Cart,
                  </p>
                  <p className="text-base -mt-1 text-black font-bold inline-block">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={` mx-auto py-0 flex  ${
            isActive
              ? "fixed top-0 w-full shadow z-50"
              : "relative top-6 w-11/12 rounded-lg"
          }  z-30 overflow-visible transition-all duration-300  `}
        >
          <div
            className={`flex-1 bg-color-heading py-4 ${
              isActive ? "" : "rounded-s-lg !py-6"
            } px-5 flex items-center relative z-30`}
          >
            <ul className="flex gap-10 text-sm font-bold text-white uppercase items-center">
              {NavigationData.map((item) => {
                if (
                  (userData.name && item.title === "Register") ||
                  item.title === "login"
                )
                  return null;
                if (item.title === "Admin" && userData.role !== "admin")
                  return null;
                return (
                  <Link
                    to={item.link}
                    key={item.id}
                    className="hover:text-color-theme transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div
            className={`bg-color-theme py-4 px-5 ${
              isActive ? "" : "rounded-e-lg"
            } flex items-center gap-2`}
          >
            <p className="text-base capitalize font-semibold text-white">
              Get 50% discount now
            </p>
            <p className="text-sm uppercase font-semibold text-color-theme px-3 py-1 rounded-2xl bg-white">
              sale
            </p>
          </div>
        </div>
      </header>
      <nav className="flex md:hidden bg-white w-full z-50 py-5 px-3  items-center justify-between fixed top-0 shadow">
        <img src="/logo-1.png" alt="" width={150} height={30} loading="lazy" />
        <GiHamburgerMenu
          className="text-black"
          size={25}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </nav>
      <div
        className={`block md:hidden w-4/5 h-screen overflow-y-auto z-50 bg-white px-5 py-5  fixed top-0 transition-all duration-500  ${
          isOpen ? "right-0" : "-right-full"
        } `}
      >
        <div className="flex justify-between items-center">
          <img
            src="/logo-1.png"
            alt=""
            width={120}
            height={30}
            loading="lazy"
          />
          <span
            className="p-1 border rounded-full inline-block hover:bg-color-theme hover:text-white text-color-heading "
            onClick={() => setIsOpen(false)}
          >
            <HiMiniXMark size={15} />
          </span>
        </div>
        <div className="flex flex-col gap-5 mt-7 text-sm font-bold text-white items-center">
          {userData.avatar && (
            <img
              loading="lazy"
              src={userData.avatar}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
          )}
          <button
            className="bg-color-light-gray py-2 px-3 text-color-heading rounded-lg"
            onClick={handleLogout}
          >
            {userData.email ? "Logout" : "Login"}
          </button>
        </div>
        <div className="mt-10 w-full">
          <div className="flex flex-col gap-10 text-sm font-bold text-black uppercase items-start w-full">
            {NavigationData.map((item) => {
              if (
                (userData.name && item.title === "Register") ||
                item.title === "login"
              )
                return null;
              return (
                <Link
                  to={item.link}
                  key={item.id}
                  className="hover:text-color-theme transition-all duration-300 border-b border-b-gray-200 py-2 w-full"
                >
                  {item.title}
                </Link>
              );
            })}
            <Link
              to="/checkout"
              className="hover:text-color-theme transition-all duration-300 border-b border-b-gray-200 py-2 w-full"
            >
              Checkout
            </Link>
            <Link
              to="/about"
              className="hover:text-color-theme transition-all duration-300 border-b border-b-gray-200 py-2 w-full"
            >
              About
            </Link>
            <div className="flex gap-5 items-center  w-full">
              <span
                className="text-2xl inline-block text-black bg-gray-200 p-3 rounded-full hover:bg-color-theme hover:text-white transition-all duration-300 cursor-pointer relative"
                onClick={handleCartPage}
              >
                <PiShoppingCartSimple size={20} />
                <p className=" absolute text-xs px-1 text-white border border-gray-300 top-0 right-0  rounded-full bg-color-theme">
                  {cartData.length}
                </p>
              </span>
              <p className="text-start text-sm text-color-text-body font-medium">
                Your Cart,
              </p>
              <p className="text-sm -mt-1 text-black font-bold inline-block ml-auto">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <span className="p-2 bg-color-theme text-white rounded-lg inline-block">
                  <LuPhone />
                </span>
                <p className="text-sm font-medium capitalize">
                  Phone : +(92) 33173-70405
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="p-2 bg-color-theme text-white rounded-lg inline-block">
                  <MdOutlineLocationOn />
                </span>
                <p className="text-sm font-medium capitalize">
                  Address : kohat,pakistan
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="p-2 bg-color-theme text-white rounded-lg inline-block">
                  <IoMailOutline />
                </span>
                <p className="text-sm font-medium capitalize">
                  Email : rayankhanfeg@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
