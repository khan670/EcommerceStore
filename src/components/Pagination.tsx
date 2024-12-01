import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

interface PropType {
  totalPages?: number;
  itemsPerPage?: number;
}

const Pagination: React.FC<PropType> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [, setParams] = useSearchParams();
  const handleSearchParams = (page: number) => {
    setParams({ page: String(page) });
  };
  const handleNextPage = () => {
    const nextPage = currentPage < Number(totalPages) ? currentPage + 1 : 1;
    setCurrentPage(nextPage);
    handleSearchParams(nextPage);
  };
  const handleBtnClick = (pageNo: number) => {
    setCurrentPage(pageNo);
    handleSearchParams(pageNo);
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
