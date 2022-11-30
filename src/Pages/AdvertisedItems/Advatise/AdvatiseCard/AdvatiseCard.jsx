import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Context/UserContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdvatiseCard = ({ product, refetch }) => {
  const { user } = useContext(AuthContext);
  const { price, productName, img, name, date, metingAddress, _id } = product;
  const email = user?.email;

  const addtoWishList = () => {
    const wishList = {
      email,
      productId: _id,
      product_name: productName,
      product_price: price,
      // eslint-disable-next-line no-dupe-keys
      email,
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
      <figure>
        <img
          src={img}
          alt={productName}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p className="card-subtitle">Advister Name: {name}</p>
        <p>Price : {price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{date}</div>
          <div className="badge badge-outline">
            {" "}
            <FaMapMarkerAlt className="mx-2"></FaMapMarkerAlt> {metingAddress}
          </div>
        </div>

        <div>
          <label htmlFor="bookignModal" className="btn btn-primary btn-sm mx-2">
            Book Now
          </label>
          <Link
            className="btn btn-primary btn-sm m-2"
            onClick={() => addtoWishList()}
          >
            Add Wishlist
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdvatiseCard;
