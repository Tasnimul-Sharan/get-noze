import React from "react";
import Banner from "./Banner";
import Blogs from "./Blogs";
import NozeAboutOne from "./NozeAboutOne";
import NozeAboutTwo from "./NozeAboutTwo";

const Home = () => {
  return (
    <div>
      <Banner />
      <NozeAboutOne />
      <NozeAboutTwo />
      <Blogs />
    </div>
  );
};

export default Home;
