import React from "react";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/products`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accesToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <section>
      <h1>Hello product</h1>
    </section>
  );
};

export default Product;
