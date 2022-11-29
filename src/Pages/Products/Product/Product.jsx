import React from "react";
import { Link } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";

const Product = ({ product,refetch }) => {
  const {_id, product_name, product_price, category, posting_time, img } = product;

  const HendlBookNow = () => {
    console.log("book now");
  };

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
              <div>
                <label
                  htmlFor="bookignModal"
                  onClick={() => HendlBookNow()}
                  // disabled={.length === 0}
                  className="btn btn-primary"
                >
                  Book Now
                </label>
              </div>

              <Link className="btn btn-primary">Add Wishlist</Link>
            </div>
          </div>
        </div>
        <BookingModal
          key={_id}
          product={product}
          refetch={refetch}
          product_name={product_name}
        ></BookingModal>
      </div>
    </>
  );
};

export default Product;
