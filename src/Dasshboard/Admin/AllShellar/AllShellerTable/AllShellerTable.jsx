import React from "react";

const AllShellerTable = ({ sheller, i, hendelDelete }) => {
  const { name, email, role, photoURL, _id } = sheller;

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

export default AllShellerTable;
