import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="flex gap-2 mt-10 justify-center">
      <button className="bg-color-theme text-base px-3 py-2 text-white">
        1
      </button>
      <button className="bg-gray-200 text-sm px-3 py-2 text-black text-center">
        2
      </button>
      <button className="bg-gray-200 text-sm text-black px-3 py-2 text-center">
        3
      </button>
      <button className="bg-color-theme text-sm px-3 py-2 text-center text-white">
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
