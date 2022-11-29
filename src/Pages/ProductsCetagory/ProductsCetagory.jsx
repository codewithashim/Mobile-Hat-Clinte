import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

const ProductsCetagory = () => {
  const getCetagoryProducts = useLoaderData();
  const HendlBookNow = () => {
    console.log("book now");
  };

  return (
    <section className="px-4">
      <div className="productCetagoryTitle py-2">
        <h1>
          <span className="text-3xl pt-3 font-bold text-blue-500">
            Total {getCetagoryProducts.length} Product
          </span>{" "}
        </h1>
      </div>
      <div className="cetagoryContainer grid lg:grid-cols-3 ">
        {getCetagoryProducts.map((product) => {
          const {
            _id,
            product_name,
            product_price,
            category,
            posting_time,
            img,
          } = product;

          return (
            <div
              className="productCard card m-4 bg-base-100 shadow-xl"
              key={product._id}
            >
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
                img={img}
                product={product}
                product_name={product_name}
              ></BookingModal>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsCetagory;
