import React, { useContext } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Context/UserContext";
import BookingModal from "../../../BookingModal/BookingModal";

const ProductCard = ({ product, refetch }) => {
  const {
    _id,
    product_name,
    product_price,
    category,
    posting_time,
    img,
  } = product;

  const { user } = useContext(AuthContext);

  const addtoWishList = () => {
    const email = user?.email;
    const wishList = {
      productId: _id,
      product_name,
      product_price,
      email,
      category,
      posting_time,
      img,
    };

    fetch(`https://mobile-hat-server.vercel.app/wishlist/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accesToken")}`,
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

  const hendelReportedItems = (id) => {
    fetch(`https://mobile-hat-server.vercel.app/products/report/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        try {
          Swal.fire(
            "Successfully Reported!",
            "You clicked the button!",
            "success"
          );
          refetch();
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${data.message}`,
          });
        }
      });
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
                <label htmlFor="bookignModal" className="btn btn-primary">
                  <FaCartPlus
                    title="Book Now"
                    className="text-2xl"
                  ></FaCartPlus>
                </label>
              </div>
              <Link className="btn btn-primary" onClick={() => addtoWishList()}>
                <FaHeart title="Wish List" className="text-2xl"></FaHeart>
              </Link>

              <Link
                className="btn btn-primary"
                onClick={() => hendelReportedItems(_id)}
              >
                Report Product
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

export default ProductCard;
