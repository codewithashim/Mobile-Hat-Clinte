import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BookingModal from "../../BookingModal/BookingModal";

const Product = ({ product, refetch }) => {
  const {
    _id,
    product_name,
    product_price,
    category,
    posting_time,
    img,
  } = product;

  const HendlBookNow = () => {
    console.log("book now");
  };

  const addtoWishList = () => {
    const wishList = {
      productId: _id,
      product_name,
      product_price,
      category,
      posting_time,
      img,
    };

    fetch(`http://localhost:8000/wishlist/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `bearer ${localStorage.getItem("accesToken")}`,
      },
      body: JSON.stringify(wishList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          Swal.fire(
            "Successfully Added to WishList!",
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
    refetch();
    console.log("add to wishlist");
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
                  className="btn btn-primary"
                >
                  Book Now
                </label>
              </div>
              <Link className="btn btn-primary" onClick={() => addtoWishList()}>
                Add Wishlist
              </Link>
            </div>
          </div>
        </div>
        <BookingModal
          key={_id}
          img={img}
          price={product_price}
          product={product}
          refetch={refetch}
          product_name={product_name}
        ></BookingModal>
      </div>
    </>
  );
};

export default Product;
