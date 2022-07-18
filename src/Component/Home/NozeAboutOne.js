import React from "react";
import nozeabout from "../../images/NOZEabout1.mp4";

const NozeAboutOne = () => {
  return (
    <div class="hero min-h-screen my-2">
      <div class="hero-content flex-col lg:flex-row">
        <video src={nozeabout} class="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default NozeAboutOne;
