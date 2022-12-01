import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import Loader from "../../../Pages/Sheard/Loader/Loader";

const Wishlish = () => {
  const { user } = useContext(AuthContext);

  const { data: myWishList = [], isLoading } = useQuery({
    queryKey: ["myWishList"],
    queryFn: async () => {
      const res = await fetch(
        `https://mobile-hat-server.vercel.app/wishlist?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(myWishList);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl py-2">My WishList</h1>
        <div className="divider"></div>
      </div>
      <div className="wishListContainer grid md:grid-cols-2 gap-4">
        {myWishList.map((wishList) => {
          const {
            name,
            price,
            productName,
            metingAddress,
            date,
            img,
          } = wishList;

          return (
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
              <figure>
                <img src={img} alt={productName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>Price : $ {price}</p>
                <p>Customer Name : {name}</p>
                <p>Metting Address : {metingAddress}</p>
                <p>Order Date : {date}</p>
                <div className="card-actions justify-end">
                  <Link className="btn btn-primary btn-sm">Buye Now</Link>
                  <Link className="btn btn-primary btn-sm">Report </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Wishlish;
