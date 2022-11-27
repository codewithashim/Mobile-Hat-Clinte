import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    product_name,
    product_price,
    category,
    posting_time,
    img,
  } = product;
  return (
    <>
      <div className="card m-4 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt={product_name}
            style={{ width: "100%", height: "15rem", objectFit: "cover" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{product_price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <p>Posting Time : {posting_time}</p>
            <div className="flex gap-2 items-center">
              <Link className="btn btn-primary">Book Now</Link>
              <Link className="btn btn-primary">Add Wishlist</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;