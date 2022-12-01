import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const WellComeUser = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="p-4">
      <div>
        <h1 className="font-bold text-2xl py-2">
          Weelcome {user?.displayName}
        </h1>
        <div className="divider"></div>
      </div>
      <div>
        <h1 className="font-bold text-2xl py-2">Your Profile</h1>
        <div className="card">
          <div className="card-body shadow-xl">
            <div className="flex items-center gap-4 w-2/4">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div>
                <h1 className="font-bold text-2xl py-2">{user?.displayName}</h1>
                <h1 className="font-bold text-2xl py-2">{user?.email}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellComeUser;
