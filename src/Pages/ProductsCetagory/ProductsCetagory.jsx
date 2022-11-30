import React from "react";
import { useLoaderData } from "react-router-dom";
import CetegoryCard from "./CetegoryCard/CetegoryCard";

const ProductsCetagory = () => {
  const getCetagoryProducts = useLoaderData();

  return (
    <section className="px-4">
      <div className="productCetagoryTitle py-2">
        <h1>
          <span className="text-3xl pt-3 font-bold text-blue-500">
            Total {getCetagoryProducts.length} Product
          </span>{" "}
        </h1>
      </div>
      <div className="cetagoryContainer grid lg:grid-cols-3 ">
        {getCetagoryProducts.map((product) => {
          return (
            <>
              <CetegoryCard key={product._id} product={product}></CetegoryCard>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsCetagory;
