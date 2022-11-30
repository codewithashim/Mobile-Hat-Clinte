import { useQuery } from "@tanstack/react-query";
import React from "react";
import Product from "./Product/Product";
import Loader from "../../Pages/Sheard/Loader/Loader";
// import Swal from "sweetalert2";

const Products = () => {
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

  // const addtoWishList = (id) => {
  //   fetch(`http://localhost:8000/wishlist/${id}`, {
  //     method: "POST",
  //     headers: {
  //       authorization: `bearer ${localStorage.getItem("accesToken")}`,
  //     },
  //     body: JSON.stringify({ id }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.success) {
  //         Swal.fire("Added Wishlist!", "You clicked the button!", "success");
  //       }
  //     });
  //   refetch();
  // };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="p-6">
      <div className="productTitle p-4">
        <h1 className="text-blue-500 font-bold text-2xl">Products</h1>
      </div>
      <div className="productContainer grid lg:grid-cols-3 ">
        {products.map((product) => {
          return (
            <Product
              key={product._id}
              refetch={refetch}
              product={product}
            ></Product>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
