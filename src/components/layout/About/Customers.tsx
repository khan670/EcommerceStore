import React from "react";
import Heading from "../../Heading";
import Rattings from "../../Rattings";

const Customers = () => {
  return (
    <div className="mt-10 bg-color-theme px-2 py-10">
      <Heading text="Happy Customers" className="text-white text-center" />
      <div className="grid grid-cols-3 mt-20 gap-5">
        {[1, 2, 3].map((value) => (
          <div key={value}>
            <div className="bg-white p-10 rounded-lg relative">
              <div className="flex justify-between items-center">
                <h1 className="font-bold ">Product Quality</h1>
                <Rattings ratting={3} />
              </div>
              <p className="text-base leading-6 mt-3 font-semibold text-color-text-body">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate aspernatur temporibus odit, deserunt nemo accusamus
                suscipit quis aperiam sequi aliquam."
              </p>
              <img
                src="/customer-shape.png"
                alt=""
                className="absolute left-10 -bottom-5"
              />
            </div>
            <div className="flex  items-center gap-3 mt-10  ml-3">
              <img
                src="/fashion-1.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-white ">
                <h1 className="text-base font-bold">Rayan khan</h1>
                <p className="text-sm mt-1">Head of Idea</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
