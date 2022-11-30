import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import Loader from "../../../Pages/Sheard/Loader/Loader";
import AllBuyerTable from "./AllBuyerTable/AllBuyerTable";

const AllBuyer = () => {
  const { data: allBuyer = [], isLoading, refetch } = useQuery({
    queryKey: ["allBuyer"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/users/buyer`);
      const data = await res.json();
      return data;
    },
  });
  const buyerData = allBuyer?.data;

  const hendelDelete = (id) => {
    fetch(`http://localhost:8000/users/buyer/${id}`, {
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
    <section className="p-4">
      <div>
        <h1 className="font-bold text-2xl py-2">All User</h1>
        <div className="divider"></div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Buyer Pic</th>
                <th>Buyer Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {buyerData?.map((buyer, i) => {
                return (
                  <>
                    <AllBuyerTable
                      key={buyer._id}
                      buyer={buyer}
                      hendelDelete={hendelDelete}
                      i={i}
                    ></AllBuyerTable>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllBuyer;
