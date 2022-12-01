import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyProductCard = ({ myProduct, hendelDeleteProduct }) => {
  const {
    img,
    product_name,
    product_price,
    category,
    posting_time,
    _id,
  } = myProduct;
  return (
    <div className="card m-4 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt={product_name}
          style={{ width: "100%", objectFit: "cover" }}
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
              <Link onClick={() => hendelDeleteProduct(_id)}>
                <FaRegTrashAlt className="text-2xl text-red-500"></FaRegTrashAlt>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
