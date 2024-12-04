import React from "react";
import { useCollapse } from "react-collapsed";
import { IoIosArrowUp } from "react-icons/io";
import { FaqType } from "../../../Types/FaqType";
interface FaqProps {
  data: FaqType;
}
const Faq: React.FC<FaqProps> = ({ data }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div
      className="border border-gray-300 py-3 px-5 rounded w-full lg:w-3/6 mx-auto"
      {...getToggleProps()}
    >
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-base text-color-heading font-semibold">
          {data.question}
        </h1>
        <IoIosArrowUp
          className={`${
            isExpanded ? "rotate-180" : ""
          } transition-all duration-300`}
        />
      </div>
      <div {...getCollapseProps()}>
        <hr />
        <p className="text-base leading-6 mt-3 font-semibold text-color-text-body">
          {data.answer}
        </p>
      </div>
    </div>
  );
};

export default Faq;
