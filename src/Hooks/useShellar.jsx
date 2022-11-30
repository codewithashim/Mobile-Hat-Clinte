import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const useSeller = () => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8000/users/seller/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data?.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [user?.email, setIsSeller]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
