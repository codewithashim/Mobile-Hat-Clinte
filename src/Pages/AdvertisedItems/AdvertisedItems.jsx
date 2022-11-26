import React from "react";

const AdvertisedItems = () => {
  return (
    <section className="px-4">
      <div className="advataiseTitle py-2">
        <h1>
          <span className="text-4xl font-bold text-blue-500">
            Advertised Itmes
          </span>{" "}
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
      </div>
    </section>
  );
};

export default AdvertisedItems;
