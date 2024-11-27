import { HiPhone } from "react-icons/hi";
import {
  footerServices,
  ShopCategories,
  Stores,
  UseFullLinks,
} from "../data/FooterData";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-3 mt-10">
      <div className="bg-white p-5 rounded flex justify-between">
        {footerServices.map((value) => {
          const Icon = value.icon;
          return (
            <div className="flex items-center gap-4  [&:not(:first-child)]:border-l border-r-gray-300 px-4 py-2">
              <Icon size={30} />
              <div>
                <h1 className="font-extrabold text-lg">{value.heading}</h1>
                <p className="text-sm text-gray-400 font-normal">
                  {value.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex justify-between gap-3 mb-5">
        {/* about store */}
        <div className="flex flex-col gap-5 w-1/5">
          <h1 className="text-lg font-extrabold">About Store</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg bg-white p-4 rounded-full inline-block text-color-theme">
              <HiPhone />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-500 ">
                Have Question? Call Us 24/7
              </p>
              <a
                href="tel:+258 3692 2569"
                className="text-xl font-extrabold text-color-theme"
              >
                +258 3692 2569
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="text-color-text-body text-sm font-medium">
                Monday - Friday:
              </p>
              <p className="text-black font-bold text-sm">8:00am - 6:00pm</p>
            </div>
            <div className="flex gap-2">
              <p className="text-color-text-body text-sm font-medium">
                Saturday:
              </p>
              <p className="text-black font-bold text-sm">9:00am - 4:00pm</p>
            </div>
            <div className="flex gap-2">
              <p className="text-color-text-body text-sm font-medium">Sunday</p>
              <p className="text-black font-bold text-sm">Service Closed</p>
            </div>
          </div>
        </div>
        {/* ############# Our Stores   ################### */}
        <div className="w-1/5">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-lg font-extrabold">Our Store</h1>
            <div className="flex flex-col gap-3">
              {Stores.map((value) => (
                <p className="text-sm text-color-text-body font-semibold hover:text-color-theme transition-all duration-300 cursor-pointer">
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* ################  Shop Categories  ############################ */}
        <div className="w-1/5">
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-extrabold">Shop Categories</h1>
            <div className="flex flex-col gap-3">
              {ShopCategories.map((value) => (
                <p className="text-sm text-color-text-body font-semibold hover:text-color-theme transition-all duration-300 cursor-pointer cursor-pointer">
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* ######################   Useful Links   ############################### */}
        <div className="w-1/5">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-extrabold">Usefull Links</h1>
            <div className="flex flex-col gap-3">
              {UseFullLinks.map((value) => (
                <p className="text-sm text-color-text-body font-semibold hover:text-color-theme transition-all duration-300 cursor-pointer">
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* ######################## our news later ######################### */}
        <div className="w-1/5">
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-extrabold">Our Newsletter</h1>
            <div>
              <p className="text-color-text-body font-medium">
                Subscribe to the mailing list to receive updates one the new
                arrivals and other discounts
              </p>
              <div className="bg-white flex p-2 w-full rounded mt-3">
                <input type="text" className="w-4/5 focus:outline-none" />
                <button className="text-sm py-1 px-2 bg-color-theme text-white rounded font-medium">
                  Subscribe
                </button>
              </div>
              <p className="text-base font-medium text-color-text-body mt-3">
                I would like to receive news and special offer
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-bold ">Payment System:</h1>
          <div className="flex gap-3">
            <FaCcVisa size={25} />
            <FaCcMastercard size={25} />
            <FaCcPaypal size={25} />
            <SiPayoneer size={25} />
          </div>
        </div>
        <div>
          <p className="text-color-heading text-base">
            Copyright & Design 2024
            <span className="text-color-theme"> ©Roiser</span>. All Right
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
