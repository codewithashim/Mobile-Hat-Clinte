import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/UserContext";
import Loader from "../../../Pages/Sheard/Loader/Loader";
import MyProductCard from "./MyProductCard/MyProductCard";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const { data: myProducts = [], isLoading, refetch } = useQuery({
    queryKey: ["myWishList"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/myproducts?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const hendelDeleteProduct = (id) => {
    fetch(`http://localhost:8000/myproducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          Swal.fire(
            "Successfully Deleted!",
            "You clicked the button!",
            "success"
          );
          refetch();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${data.message}`,
          });
        }
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl py-2">Add Product</h1>
        <div className="divider"></div>
      </div>
      <div className="myOrderContainer grid md:grid-cols-2 gap-4">
        {myProducts.map((myProduct) => {
          return (
            <MyProductCard
              key={myProduct._id}
              myProduct={myProduct}
              hendelDeleteProduct={hendelDeleteProduct}
            ></MyProductCard>
          );
        })}
      </div>
    </section>
  );
};

export default MyProduct;
