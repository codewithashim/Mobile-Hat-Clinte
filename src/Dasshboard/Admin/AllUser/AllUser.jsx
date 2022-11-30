import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import Loader from "../../../Pages/Sheard/Loader/Loader";
import AllUserTable from "./AllUserTable/AllUserTable";

const AllUser = () => {
  const { data: allUser = [], isLoading, refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/users");
      const data = await res.json();
      return data;
    },
  });
  const userData = allUser?.data;

  const hendelDelete = (id) => {
    fetch(`http://localhost:8000/users/${id}`, {
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
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((user, i) => {
                return (
                  <AllUserTable
                    key={user._id}
                    i={i}
                    user={user}
                    hendelDelete={hendelDelete}
                  ></AllUserTable>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllUser;
