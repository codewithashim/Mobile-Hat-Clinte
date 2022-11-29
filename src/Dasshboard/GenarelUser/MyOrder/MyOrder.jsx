import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loader from "../../../Pages/Sheard/Loader/Loader";
import { AuthContext } from "../../../Context/UserContext";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrder = [], refetch, isLoading } = useQuery({
    queryKey: ["apointmentOpction"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      const mainData = data;
      return mainData;
    },
  });

  console.log(myOrder);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <h1>My Order comming........</h1>
    </section>
  );
};

export default MyOrder;
