import React from "react";
import videofile from "../../images/WALP.mp4";

const AboutProduct = () => {
  return (
    <div className="my-32">
      <video src={videofile} controls autoPlay muted className="max-w-full" />
    </div>
  );
};

export default AboutProduct;
