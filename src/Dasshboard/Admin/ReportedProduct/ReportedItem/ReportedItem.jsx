import React from "react";

const ReportedItem = ({ product, i, hendelDelete }) => {
  const { _id, product_name, product_price, img } = product;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img
          src={img}
          alt={product_name}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </td>
      <td>{product_name}</td>
      <td>{product_price}</td>
      <td>
        <button className="btn btn-error" onClick={() => hendelDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReportedItem;
