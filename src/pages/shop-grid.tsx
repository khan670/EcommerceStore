import React, { useState } from "react";
import PageSection from "../components/layout/PageSection";
import { IoIosArrowDown } from "react-icons/io";
import { sortedBtnData } from "../data/Fashions";
import ShopCard from "../components/layout/ShopCard";
import CheckBox from "../components/Inputs/CheckBox";
import Pagination from "../components/Pagination";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductsByCategory } from "../api/Product";
import { CategoryType, ProductType } from "../Types/ShopTypes";
import { useSearchParams } from "react-router-dom";
import { getCategories } from "../api/Categories";

const ShopGrid: React.FC = () => {
  const [filters, setFilters] = useState<number | string | undefined>(1);
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const totalItemsPerpage = 10;
  const start = (page - 1) * totalItemsPerpage;
  const end = page * totalItemsPerpage;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const prefetchData = (page: number) => {
    const start = (page - 1) * totalItemsPerpage;
    const end = page * totalItemsPerpage;
    queryClient.prefetchQuery({
      queryKey: ["filter", start, end],
      queryFn: () => getProductsByCategory(filters, start, end),
    });
  };
  const query = useQuery({
    queryKey: ["filter", start, end, filters],
    queryFn: () => getProductsByCategory(filters, start, end),
    onSuccess: () => prefetchData(page + 1),
  });
  const categoryList = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });

  const categories = categoryList.data;
  const productData = query.data;
  console.log(productData);
  const handleSetProduct = (categoryId: number | string | undefined) => {
    setFilters(categoryId);
  };
  return (
    <div>
      <PageSection pageHead="Shop Grid" />
      <div className="flex flex-col md:flex-row mt-10 gap-3 px-2">
        <div className="flex flex-col items-start w-full md:w-4/5">
          {query.isLoading ? (
            <span className="loader mx-auto mt-9"></span>
          ) : (
            <>
              {" "}
              <div className="relative ml-auto">
                <button
                  className="px-2 py-1 border text-sm border-gray-200 flex gap-1 items-center "
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  Default Sorting
                  <IoIosArrowDown
                    className={`${
                      isOpen ? "rotate-180 transform" : ""
                    } transition-all duration-300`}
                  />
                </button>
                <div
                  className={`flex flex-col border border-gray-200 absolute top-8 z-20 bg-white  ${
                    isOpen ? "opacity-100 z-10" : "opacity-0 -z-[1]"
                  } transition-all duration-300 w-full`}
                >
                  {sortedBtnData.map((value) => (
                    <button className="px-2 py-1 text-sm hover:bg-color-heading hover:text-white text-start">
                      {value}
                    </button>
                  ))}
                </div>
              </div>
              {query.isLoading ? (
                <span className="loader"></span>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  mt-5 gap-5 ">
                  {productData.map((value: ProductType) => (
                    <ShopCard data={value} />
                  ))}
                </div>
              )}
              <div className="mx-auto">
                <Pagination totalPages={5} />
              </div>
            </>
          )}
        </div>
        <div className=" w-full md:w-1/5 flex flex-col gap-5">
          <div className="border border-gray-300 rounded-lg p-4">
            <h1 className="text-lg font-extrabold  text-color-heading mb-2">
              Categories
            </h1>
            <hr />
            {categoryList.isLoading ? (
              <span className="loader"></span>
            ) : (
              <div className="mt-3 flex flex-col gap-3 items-start">
                {categories.map((value: CategoryType, index: number) => {
                  if (index < 5)
                    return (
                      <CheckBox
                        checkBoxData={value}
                        handler={handleSetProduct}
                        checked={filters}
                      />
                    );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGrid;
