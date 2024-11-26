import { BsBoxSeam } from "react-icons/bs";
import { footerServices, Stores } from "../data/FooterData";
import { HiPhone } from "react-icons/hi";

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
      <div className="mt-5 flex justify-between">
        <div>
          <h1 className="text-base text-color-heading font-extrabold">
            About Store
          </h1>
          <div className="flex items-center gap-5 mt-5">
            <span className="bg-white text-color-theme p-3 inline-block rounded-full">
              <HiPhone size={25} />
            </span>
            <div>
              <p className="text-base text-gray-500 font-semibold">
                Have Question? Call Us 24/7
              </p>
              <p className="text-2xl font-bold text-color-theme">
                +123 456 7890
              </p>
            </div>
          </div>
          <div
            className="
          mt-6 flex gap-1 flex-col"
          >
            <p className="text-base text-gray-500 font-medium">
              Monday - Friday:{" "}
              <span className="inline-block font-bold text-color-heading">
                8:00am - 6:00pm
              </span>
            </p>
            <p className="text-base text-gray-500 font-medium">
              Saturday:{" "}
              <span className="inline-block font-bold text-color-heading">
                8:00am - 6:00pm
              </span>
            </p>
            <p className="text-base text-gray-500 font-medium">
              Sunday:{""}
              <span className="inline-block font-bold text-color-heading">
                Service Close
              </span>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-base text-color-heading font-extrabold">
            Our Stores
          </h1>
          <div>
            {Stores.map((value) => (
              <p className="text-base text-gray-500 font-medium">{value}</p>
            ))}
          </div>
          <div>
            <h1 className="text-base text-color-heading font-extrabold">
              Shop Categories
            </h1>
          </div>
          <div>
            <h1 className="text-base text-color-heading font-extrabold">
              Useful links
            </h1>
          </div>
          <div>
            <h1 className="text-base text-color-heading font-extrabold">
              Our Newsletter
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
