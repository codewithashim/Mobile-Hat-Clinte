import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReportedItem from "./ReportedItem/ReportedItem";
import Loader from "../../../Pages/Sheard/Loader/Loader";
import Swal from "sweetalert2";

const ReportedProducts = () => {
  const { data: reportedProducts = [], isLoading, refetch } = useQuery({
    queryKey: ["reportedProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/products/report/");
      const data = await res.json();
      return data;
    },
  });
  const reportedProductsData = reportedProducts?.data;

  const hendelDelete = (id) => {
    fetch(`http://localhost:8000/products/report/${id}`, {
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
    return <Loader />;
  }

  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl py-2">Reported Product</h1>
        <div className="divider"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Img</th>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reportedProductsData?.map((product, i) => {
              return (
                <ReportedItem
                  key={product?._id}
                  product={product}
                  i={i}
                  hendelDelete={hendelDelete}
                ></ReportedItem>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReportedProducts;
