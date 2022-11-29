import React from "react";

const Advatise = ({ item }) => {
  const { product } = item;

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        {product.map((item) => {
          const { name, price, metingAddress, productName, date, img } = item;
          return (
            <>
              <figure>
                <img src={img} alt={productName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p className="card-subtitle">Advister Name: {name}</p>
                <p>Price : {price}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{date}</div>
                  <div className="badge badge-outline">{metingAddress}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Advatise;
