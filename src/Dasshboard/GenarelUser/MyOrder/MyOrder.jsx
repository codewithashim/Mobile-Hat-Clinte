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
    const advatise = {
      services: id,
      email: user?.email,
      product: myOrder,
    };

    fetch("http://localhost:8000/advatise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `Bearer ${user.accesToken}`,
      },
      body: JSON.stringify(advatise),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          Swal.fire(
            "Successfully Advatise Now!",
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
      <div className="orderContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {myOrder.map((order) => {
          return (
            <AllOrder
              key={order._id}
              order={order}
              hendelAdvatise={hendelAdvatise}
            ></AllOrder>
          );
        })}
      </div>
    </section>
  );
};

export default MyOrder;
