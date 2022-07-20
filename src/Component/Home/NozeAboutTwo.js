import React from "react";
import nazoabout from "../../images/NOZEabout2.mp4";

const NozeAboutTwo = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <video
          src={nazoabout}
          controls
          autoPlay
          muted
          class="max-w-lg rounded-lg shadow-2xl"
        />
        <div className="text-justify">
          <h1 class="text-5xl font-bold">Break the Mold</h1>
          <p class="py-6 w-10/12">
            NOZE monitors the air for spores and other markers associated with
            the most common types of indoor mold. Our mold index will tell you
            if it's likely that there’s mold around and whether your space is in
            danger of being a breeding ground.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NozeAboutTwo;
