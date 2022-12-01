import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import Loader from "../../../Pages/Sheard/Loader/Loader";
import AllShellerTable from "./AllShellerTable/AllShellerTable";

const AllShellar = () => {
  const { data: totalSheller = [], isLoading, refetch } = useQuery({
    queryKey: ["totalSheller"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/users/seller/`);
      const data = await res.json();
      return data;
    },
  });
  const shellerData = totalSheller.data;
  console.log(shellerData);

  const hendelDelete = (id) => {
    fetch(`http://localhost:8000/users/seller/${id}`, {
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
        <h1 className="font-bold text-2xl py-2">All Shellar</h1>
        <div className="divider"></div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Sheller Pic</th>
                <th>Sheller Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
    {
      totalSheller?.data?.map((sheller, i) => {
        return(
          <AllShellerTable 
            key={sheller._id}
            sheller={sheller}
            i={i}
            hendelDelete={hendelDelete}
          ></AllShellerTable>
        )
      })
    }

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllShellar;
