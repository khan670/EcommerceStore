import React from "react";
import ShopCard from "../components/layout/ShopCard";
import PageSection from "../components/layout/PageSection";
import Pagination from "../components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/Product";
import { ProductType } from "../Types/ShopTypes";

const Shop: React.FC = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  const productData = query.data;

  if (query.isLoading) return <span className="loader"></span>;
  return (
    <>
      <PageSection pageHead="Shop" />
      <div className="grid grid-cols-4 gap-4 px-2 mt-16">
        {productData.map((value: ProductType) => {
          return (
            <>
              <ShopCard data={value} key={value.id} />
            </>
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default Shop;
