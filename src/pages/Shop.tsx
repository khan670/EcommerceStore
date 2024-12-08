import React, { Suspense, useEffect } from "react";
const ShopCard = React.lazy(() => import("../components/layout/ShopCard"));
// import ShopCard from "../components/layout/ShopCard";
import PageSection from "../components/layout/PageSection";
import Pagination from "../components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getLimitedProduct } from "../api/Product";
import { ProductType } from "../Types/ShopTypes";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";

const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const totalItemsPerpage = 10;
  const start = (page - 1) * totalItemsPerpage;
  const end = page * totalItemsPerpage;
  const query = useQuery({
    queryKey: ["pagination", start, end],
    queryFn: () => getLimitedProduct(start, end),
  });
  useEffect(() => {
    document.title = "Roiser - Shop";
  });
  const productData = query.data;

  return (
    <Suspense fallback={<Loader />}>
      <PageSection pageHead="Shop" />
      {query.isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 mt-16">
          {productData.map((value: ProductType) => {
            return (
              <>
                <ShopCard data={value} key={value.id} />
              </>
            );
          })}
        </div>
      )}
      <Pagination totalPages={5} />
    </Suspense>
  );
};

export default Shop;
