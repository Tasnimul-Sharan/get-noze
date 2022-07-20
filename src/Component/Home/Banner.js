import React from "react";
import NOZE from "../../images/NOZE-Hero-1.png";
import Modal from "./Modal";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen relative">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={NOZE} className="max-w-sm rounded-lg" alt="perfuom" />
          <div className="text-justify">
            <h1 class="text-5xl font-bold">
              There’s something <br /> new in the air
            </h1>
            <p class="py-6 text-xl text-slate-500 w-8/12">
              NOZE is an AI powered air quality monitor that works to keep you
              safe. Breathe easy.
            </p>
            <Modal />
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <h1 className="text-5xl text-slate-900 bg-base-200 text-start p-24 py-4">
          NOZE is making <br /> headlines.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
