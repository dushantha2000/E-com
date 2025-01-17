import React from "react";
import Hero from "./common/Hero";
import LatestProduct from "./common/LatestProduct";
import FeaturedProduct from "./common/FeaturedProduct";
import Layout from "./common/Layout";

function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <LatestProduct />
  <FeaturedProduct />
      </Layout>

     
    </>
  );
}

export default Home;
