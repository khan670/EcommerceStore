import React from "react";
import PageSection from "../components/layout/PageSection";
import Heading from "../components/Heading";
import InputField from "../components/Inputs/InputField";
import Button from "../components/Buttons/Button";

const Contact: React.FC = () => {
  return (
    <div>
      <PageSection pageHead="Contact" />

      <div className="mt-5 bg-color-light-gray p-20  flex flex-col lg:flex-row gap-10">
        <div className="lg:w-3/4 w-full">
          <Heading text="Get In Touch" />
          <div className="flex flex-col gap-5 items-start">
            <div className="flex gap-5 mt-10 w-full">
              <InputField type="text" label="Your Name" className="w-full" />
              <InputField
                type="Email"
                label="Email Address"
                className="w-full"
              />
            </div>
            <InputField label="Subject" type="text" className="w-full" />
            <div className={`flex flex-col gap-1 w-full`}>
              <label htmlFor="" className="text-sm font-semibold ">
                Write Your Message
              </label>
              <textarea
                name=""
                id=""
                className="text-sm border border-gray-300 px-2 py-2 focus:outline-none rounded"
              ></textarea>
            </div>
            <Button text="Submit Message" isRed={true} isWhite={false} />
          </div>
        </div>
        <div className="p-5 bg-white lg:w-1/4 w-full rounded-lg border border-gray-300">
          <img src="/storeImage.png" alt="" className="w-full object-cover" />
          <h1 className="text-xl mt-2 font-extrabold text-color-heading ">
            Store
          </h1>
          <div className="flex flex-col gap-2 mt-3">
            <p className="text-base font-medium text-color-text-body">
              Pakistan — Office 12, 3rd Floor, Building B
            </p>
            <p className="text-base font-medium text-color-text-body">
              Main Boulevard, Gulberg III, Lahore, PK 54660
            </p>
            <p className="text-base font-medium text-color-text-body">
              Phone: +92 300 1234567
            </p>
            <p className="text-base font-medium text-color-text-body">
              Email: contact.pk@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
