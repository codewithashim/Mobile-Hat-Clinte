import React from "react";
import AdvertisedItems from "../../AdvertisedItems/AdvertisedItems";
import Cetagorys from "../Cetagorys/Cetagorys";
import Hero from "../Hero/Hero/Hero";
import LatestProduct from "../LatestProduct/LatestProduct";

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
        <Cetagorys></Cetagorys>
      </section>
      <section>
        <LatestProduct></LatestProduct>
      </section>
    </main>
  );
};

export default Home;
