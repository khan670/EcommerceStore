import React from "react";
import Heading from "../../Heading";

const Team: React.FC = () => {
  return (
    <div className="px-3 bg-color-light-gray py-20">
      <Heading text="Meet With Team" className="text-center mt-3" />
      <div className="grid grid-cols-4 gap-5 mt-10">
        {[1, 2, 3, 4].map((value) => (
          <div
            className="px-2 group overflow-hidden cursor-pointer"
            key={value}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src="/fashion-1.png"
                alt=""
                className="group-hover:scale-105 transform transition-all duration-300"
              />
            </div>
            <p className="text-color-text-body mt-4 text-xs uppercase font-bold text-center">
              Design Director
            </p>
            <h1 className="text-xl font-extrabold text-color-heading text-center mt-2">
              Henry David Wilson
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
