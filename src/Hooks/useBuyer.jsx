import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const useBuyer = () => {
  const { user } = useContext(AuthContext);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8000/users/buyers/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsBuyer(data?.isBuyer);
          setIsBuyerLoading(false);
        });
    }
  }, [user?.email, setIsBuyer]);
  return [isBuyer, isBuyerLoading];
};

export default useBuyer;
