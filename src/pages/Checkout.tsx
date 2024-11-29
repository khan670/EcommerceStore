import React from "react";
import PageSection from "../components/layout/PageSection";
import Heading from "../components/Heading";
import InputField from "../components/Inputs/InputField";
import Button from "../components/Buttons/Button";

const Checkout: React.FC = () => {
  return (
    <div>
      <PageSection pageHead="Checkout" />
      <div className="grid grid-cols-2 mt-5 px-3 gap-5">
        <div>
          <Heading text="Billing Details" className="!text-2xl" />
          <div className="flex flex-col gap-3 mt-5">
            <InputField label="Email Address*" type="email" />
            <div className="flex gap-3 w-full">
              <InputField label="First Name*" type="text" className="w-full" />
              <InputField label="Last Name*" type="text" className="w-full" />
            </div>
            <InputField label="Company Name(optional)*" type="text" />
            <InputField label="Country / Region*" type="text" />
            <InputField label="Street Address*" type="text" />
            <InputField type="text" />
            <InputField label="Town / City*" type="text" />
            <InputField label="State*" type="text" />
            <InputField label="Phone*" type="text" />
          </div>
        </div>
        <div>
          <Heading text="Your order" className="!text-2xl" />
          <div className="p-5 mt-5 bg-color-light-gray border border-gray-300 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-base uppercase font-bold text-color-text-body">
                product
              </h1>
              <h1 className="text-base uppercase font-bold text-color-text-body">
                Price
              </h1>
            </div>
            <hr />
            {[1, 2, 3, 4].map((value) => (
              <>
                <div className="mt-4 pb-4 flex gap-5 items-center ">
                  <img
                    src={`/fashion-${value}.png`}
                    alt=""
                    width={70}
                    height={70}
                    className="rounded"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-sm text-color-theme font-medium uppercase">
                      Headphone
                    </h1>
                    <h1 className="text-lg capitalize font-extrabold">
                      Surge Shield Safeguard
                    </h1>
                  </div>
                  <p className="text-base ml-auto uppercase font-bold text-color-text-body">
                    $500.00
                  </p>
                </div>
                <hr />
              </>
            ))}
            <div className="flex justify-between items-center py-5">
              <h1 className="text-base capitalize font-bold text-color-text-body">
                subtotal
              </h1>
              <p className="text-base ml-auto uppercase font-bold text-color-heading">
                $500.00
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center py-5">
              <h1 className="text-base capitalize font-bold text-color-text-body">
                Shipping
              </h1>
              <p className="text-base ml-auto uppercase font-bold text-color-heading">
                $500.00
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center py-5">
              <h1 className="text-base capitalize font-bold text-color-text-body">
                Total Price:
              </h1>
              <p className="text-base ml-auto uppercase font-bold text-color-theme">
                $500.00
              </p>
            </div>
            <Button
              text="Place your order "
              isRed={true}
              isWhite={false}
              className="w-full mt-5
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
