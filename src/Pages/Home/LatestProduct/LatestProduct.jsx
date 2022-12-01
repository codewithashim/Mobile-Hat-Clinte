import { useQuery } from "@tanstack/react-query";
import React from "react";

import Loader from "../../Sheard/Loader/Loader";
import ProductCard from "./ProductCard/ProductCard";

const LatestProduct = () => {
  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`https://mobile-hat-server.vercel.app/products`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accesToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="p-4">
      <div>
        <h1 className="font-bold text-2xl py-2">Latest Product</h1>
      </div>
      <div className="productContainer grid lg:grid-cols-3 ">
        {products.slice(0, 3).map((product) => {
          return (
            <ProductCard
              key={product._id}
              refetch={refetch}
              product={product}
            ></ProductCard>
          );
        })}
      </div>
    </section>
  );
};

export default LatestProduct;
