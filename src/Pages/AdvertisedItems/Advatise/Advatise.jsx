import React from "react";

import BookingModal from "../../BookingModal/BookingModal";
import AdvatiseCard from "./AdvatiseCard/AdvatiseCard";

const Advatise = ({ item, refetch }) => {
  const { product } = item;

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        {product.map((product) => {
          const { price, productName, img } = product;
          return (
            <>
              <AdvatiseCard
                key={product._id}
                refetch={refetch}
                product={product}
              ></AdvatiseCard>
              <>
                <BookingModal
                  img={img}
                  price={price}
                  product={product}
                  refetch={refetch}
                  product_name={productName}
                ></BookingModal>
              </>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Advatise;
