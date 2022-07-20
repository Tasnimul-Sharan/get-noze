import React from "react";
import AboutProduct from "./AboutProduct";
import Achivement from "./Achivement";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Connected from "./Connected";
import Important from "./Important";
import Inspired from "./Inspired";
import Matters from "./Matters";
import NozeAboutOne from "./NozeAboutOne";
import NozeAboutTwo from "./NozeAboutTwo";
import ServiceOne from "./ServiceOne";

const Home = () => {
  return (
    <div>
      <Banner />
      <Inspired />
      <NozeAboutOne />
      <NozeAboutTwo />
      <Matters />
      <Important />
      <AboutProduct />
      <ServiceOne />
      <Achivement />
      <Blogs />
      <Connected />
    </div>
  );
};

export default Home;
