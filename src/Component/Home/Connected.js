import React from "react";
import Modal from "./Modal";

const Connected = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-full">
          <h1 class="text-5xl">Stay connected with NOZE</h1>
          <p class="py-6 text-slate-500">
            NOZE is an AI powered air quality monitor <br /> that works to keep
            you safe. Breathe easy.
          </p>
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Connected;
