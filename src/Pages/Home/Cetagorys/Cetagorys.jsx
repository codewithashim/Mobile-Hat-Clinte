import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cetagorys = () => {
  const [cetagorys, setCetagorys] = useState([]);

  useEffect(() => {
    fetch("https://mobile-hat-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCetagorys(data));
  }, []);

  return (
    <section className="p-4">
      <div>
        <h1 className="text-4xl font-bold text-blue-500">
          Find By Cetagory Products
        </h1>
      </div>
      <div className="cetagoryContainer grid lg:grid-cols-4">
        {cetagorys.map((cetagory) => {
          const { categoryName, details } = cetagory;
          return (
            <div className="card bg-base-100 m-4 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <p>{details}</p>
                <div className="card-actions">
                  <Link
                    to={`/category/${categoryName}`}
                    className="btn btn-primary btn-sm"
                  >
                    See All Product
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cetagorys;
