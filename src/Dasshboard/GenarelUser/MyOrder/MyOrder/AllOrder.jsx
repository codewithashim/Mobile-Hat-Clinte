import React from "react";
import { Link } from "react-router-dom";

const AllOrder = ({ order, hendelAdvatise }) => {
  const { productName, img, date, metingAddress, price, name, _id } = order;


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
          <Link
            className="btn btn-primary btn-sm"
            onClick={() => hendelAdvatise(_id)}
          >
            Advertise
          </Link>
          <Link className="btn btn-primary btn-sm">Pay Now</Link>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
