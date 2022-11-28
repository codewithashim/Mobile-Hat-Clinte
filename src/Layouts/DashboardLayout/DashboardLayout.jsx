import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../../Pages/Sheard/NavBar/NavBar";

const DashboardLayout = () => {
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
                {/* {isAdmin && (
                  <>
                    <li>
                      <Link to="/dashboard/users">Users</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/addDoctors">Add Doctors</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/manegDoctors">Maneg Doctors</Link>
                    </li>
                  </>
                )} */}
                <li>
                  <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard/wishlist">WishList</Link>
                </li>
                <li>
                  <Link to="/dashboard/myorder">My Order</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
