import React from "react";

const AllBuyerTable = ({ buyer, i, hendelDelete }) => {
  const { name, email, role, photoURL, _id } = buyer;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img
          src={photoURL}
          alt={name}
          className=" rounded-full object-cover"
          style={{
            width: "2rem",
          }}
        />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <button
          className="btn btn-sm btn-error"
          onClick={() => hendelDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AllBuyerTable;
