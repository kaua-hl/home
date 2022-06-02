import React from "react";
import Apartments from "../../components/Home/Apartments/Apartments";
import Banner from "../../components/Home/Banner/Banner";
import Features from "../../components/Home/Features/Features";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Apartments />
    </div>
  );
};

export default Home;
