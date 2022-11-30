import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useSeller from "../Hooks/useShellar";
import Loading from "../Pages/Sheard/Loader/Loader";

const ShallerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);

  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loading></Loading>;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ShallerRoute;
