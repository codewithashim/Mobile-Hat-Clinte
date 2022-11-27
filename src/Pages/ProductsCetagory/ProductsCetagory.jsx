import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductsCetagory = () => {
  const getCetagoryProducts = useLoaderData();
  console.log(getCetagoryProducts);
  return (
    <section className="px-4">
      <div className="productCetagoryTitle py-2">
        <h1>
          <span className="text-4xl font-bold text-blue-500">
            Products Cetagory
          </span>{" "}
        </h1>
      </div>
      <div></div>
    </section>
  );
};

export default ProductsCetagory;
