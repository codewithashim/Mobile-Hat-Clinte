import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../Sheard/Loader/Loader";

import Advatise from "./Advatise/Advatise";

const AdvertisedItems = () => {
  const { data: advatiseProduct = [], isLoading, refetch } = useQuery({
    queryKey: ["apointmentOpction"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/advatise`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      {advatiseProduct?.length !== 0 && (
        <>
          <section className="p-6">
            <div className="advataiseTitle py-2">
              <h1>
                <span className="text-4xl font-bold text-blue-500">
                  Advertised Itmes
                </span>{" "}
              </h1>
            </div>
            <div className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {advatiseProduct?.map((item) => {
                  return <Advatise key={item?._id} refetch={refetch} item={item}></Advatise>;
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AdvertisedItems;
