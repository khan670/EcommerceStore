import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

interface PropType {
  totalPages?: number;
}

const Pagination: React.FC<PropType> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useSearchParams();
  const handleSearchParams = () => {
    const newParams = new URLSearchParams(params);
    newParams.set("page", `${currentPage}`);
    setParams(newParams);
  };
  const handleNextPage = () => {
    if (totalPages === currentPage) {
      setCurrentPage(1);
      return;
    }
    setCurrentPage((prev) => prev + 1);
    handleSearchParams();
  };
  const handleBtnClick = (pageNo: number) => {
    setCurrentPage(pageNo);
    handleSearchParams();
  };
  return (
    <div className="flex gap-2 mt-10 justify-center">
      {Array.from({ length: totalPages || 0 }).map((_, index) => (
        <button
          className={`${
            index + 1 === currentPage
              ? "bg-color-theme text-white"
              : "bg-gray-200 text-black"
          } text-base px-3 py-2 `}
          onClick={() => handleBtnClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {/* <button className="bg-gray-200 text-sm px-3 py-2 text-black text-center">
        2
      </button>
      <button className="bg-gray-200 text-sm text-black px-3 py-2 text-center">
        3
      </button> */}
      <button
        className="bg-color-theme text-sm px-3 py-2 text-center text-white"
        onClick={handleNextPage}
      >
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
