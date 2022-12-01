import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useAdmin from "../../Hooks/useAdmin";
import useBuyer from "../../Hooks/useBuyer";
import useSeller from "../../Hooks/useShellar";
import NavBar from "../../Pages/Sheard/NavBar/NavBar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <main>
      <NavBar></NavBar>
      <section>
        <div>
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <Outlet></Outlet>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-72 text-base-content">
                <li>
                  <Link to="/dashboard">Profile</Link>
                </li>
                {isAdmin && (
                  <>
                    <li>
                      <Link to="/dashboard/alluser">All User</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/allbuyer">All Buyer</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/allshellar">All Seller</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/reportedproduct">
                        Reported Product
                      </Link>
                    </li>
                  </>
                )}
                {isSeller && (
                  <>
                    <li>
                      <Link to="/dashboard/addproduct">Add Product</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/myproduct">My Product</Link>
                    </li>
                  </>
                )}
                {isBuyer && (
                  <>
                    <li>
                      <Link to="/dashboard/myorder">My Order</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/wishlist">Wishlist</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
