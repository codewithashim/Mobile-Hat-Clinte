import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const loginByGoogle = ({ hendelGoogleLogin }) => {
  return (
    <Link className="btn btn-outline w-full" onClick={hendelGoogleLogin}>
      {" "}
      <FaGoogle className="mx-2 text-2xl"></FaGoogle> CONTINUE WITH GOOGLE
    </Link>
  );
};

export default loginByGoogle;
