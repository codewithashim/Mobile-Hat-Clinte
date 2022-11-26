import React from "react";
import AdvertisedItems from "../../AdvertisedItems/AdvertisedItems";
import ProductsCetagory from "../../ProductsCetagory/ProductsCetagory";
import Hero from "../Hero/Hero/Hero";

const Home = () => {
  return (
    <main>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <AdvertisedItems></AdvertisedItems>
      </section>
      <section>
        <ProductsCetagory></ProductsCetagory>
      </section>
    </main>
  );
};

export default Home;
