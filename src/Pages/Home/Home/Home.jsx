import React from "react";
import AdvertisedItems from "../../AdvertisedItems/AdvertisedItems";
import Cetagorys from "../Cetagorys/Cetagorys";
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
        <Cetagorys></Cetagorys>
      </section>
    </main>
  );
};

export default Home;
