import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";

const Advatise = ({ item, refetch }) => {
  const { product } = item;

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        {product.map((product) => {
          const {
            name,
            price,
            metingAddress,
            productName,
            date,
            img,
          } = product;
          return (
            <>
              <figure>
                <img src={img} alt={productName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p className="card-subtitle">Advister Name: {name}</p>
                <p>Price : {price}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{date}</div>
                  <div className="badge badge-outline">
                    {" "}
                    <FaMapMarkerAlt className="mx-2"></FaMapMarkerAlt>{" "}
                    {metingAddress}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="bookignModal"
                    className="btn btn-primary btn-sm mx-2"
                  >
                    Book Now
                  </label>
                  <Link className="btn btn-primary btn-sm m-2">
                    Add Wishlist
                  </Link>
                </div>
              </div>

              <>
                <BookingModal
                  img={img}
                  price={price}
                  product={product}
                  refetch={refetch}
                  product_name={productName}
                ></BookingModal>
              </>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Advatise;
