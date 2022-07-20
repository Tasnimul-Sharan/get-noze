import React from "react";
import nozeabout from "../../images/NOZEabout1.mp4";

const NozeAboutOne = () => {
  return (
    <div class="hero min-h-screen my-2">
      <div class="hero-content flex-col lg:flex-row">
        <video
          src={nozeabout}
          controls
          autoPlay
          muted
          class="max-w-lg rounded-lg shadow-2xl"
        />
        <div className="text-justify mx-10">
          <h1 class="text-5xl font-bold">Сonquer the Virus</h1>
          <p class="py-6 w-10/12">
            Noze tracks the airborne markers (VOCs) associated with the
            Coronavirus family. Our AI uses that information to deliver a
            real-time risk index that will not only tell you if your space is
            prone to spreading the virus, but whether there’s a chance the virus
            is actually in the air.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NozeAboutOne;
