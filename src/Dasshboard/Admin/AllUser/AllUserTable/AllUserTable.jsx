import React from "react";
import { Link } from "react-router-dom";

const AllUserTable = ({ user, i, hendelDelete }) => {
  const { email, name, photoURL, role, _id } = user;

  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img
          src={photoURL}
          alt={name}
          className="rounded-full"
          style={{ width: "2rem" }}
        />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <Link
          onClick={() => hendelDelete(_id)}
          className="btn btn-error btn-sm"
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default AllUserTable;
