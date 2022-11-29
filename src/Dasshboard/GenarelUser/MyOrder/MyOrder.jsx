import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loader from "../../../Pages/Sheard/Loader/Loader";
import { AuthContext } from "../../../Context/UserContext";
import AllOrder from "./MyOrder/AllOrder";
import Swal from "sweetalert2";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrder = [], isLoading, refetch } = useQuery({
    queryKey: ["apointmentOpction"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  // hendel advatise
  const hendelAdvatise = (id) => {
    fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `Bearer ${user.accesToken}`,
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          Swal.fire(
            "Successfully Booked Now!",
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
        <h1 className="font-bold text-2xl py-2">My Order</h1>
        <div className="divider"></div>
      </div>
      <div className="orderContainer gird lg:grid-cols-3">
        {myOrder.map((order) => {
          return <AllOrder key={order._id} order={order}></AllOrder>;
        })}
      </div>
    </section>
  );
};

export default MyOrder;
