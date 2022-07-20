import React from "react";

const Inspired = () => {
  return (
    <section className="my-16">
      <div className="text-justify mx-28">
        <h1 className="text-5xl text-violet-900">
          Anything but <br /> ordinary.
        </h1>
        <p className="text-violet-400 text-xl">
          Some would say it's out of this world. That’s not far off.
        </p>
      </div>
      <div>
        <div class="carousel w-full my-10">
          <div id="slide1" class="carousel-item relative w-full">
            <h1>Nasa Inspired</h1>
            <img
              src="https://placeimg.com/800/200/arch"
              class="max-w-lg mask mask-circle mx-auto"
            />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspired;
