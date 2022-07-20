import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-5xl text-violet-900">FAQs</h1>
      <div className="mx-28 my-5 text-start text-violet-900">
        <div
          tabindex="0"
          class="collapse collapse-plus border border-purple-500-focus rounded-box my-5"
        >
          <div class="collapse-title text-xl font-medium">
            How is NOZE different from other air quality monitors?
          </div>
          <div class="collapse-content collapse-plus">
            <p>
              The technology behind NOZE is based on a digital nose sensor (also
              known as an e-nose). With this sensor, NOZE can precisely detect a
              wide range of pollutants and chemicals. In contrast, almost all
              other air quality monitors on the market today use a bundle of
              off-the-shelf sensors that are limited in what they can detect and
              can vary widely in quality, accuracy and reliability
            </p>
          </div>
        </div>
        <div
          tabindex="1"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
        >
          <div class="collapse-title text-xl font-medium">
            What is a digital nose?
          </div>
          <div class="collapse-content">
            <p>
              A digital nose is a breakthrough technology that digitizes the
              sense of smell. It’s similar to how the camera digitized the sense
              of sight and the microphone digitized the sense of hearing.
            </p>
          </div>
        </div>
        <div
          tabindex="2"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
        >
          <div class="collapse-title text-xl font-medium">
            What is the Virus Risk Index?
          </div>
          <div class="collapse-content">
            <p>
              The Virus Risk Index is an AI-powered tool built into NOZE to help
              make indoor spaces safer places to live, work, and visit by
              monitoring the risk of virus transmission (tracking how conducive
              the air is to spreading the virus) and the risk of virus presence
              tracking the likelihood that the virus is in the air
            </p>
          </div>
        </div>
        <div
          tabindex="3"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
        >
          <div class="collapse-title text-xl font-medium">
            How does the Virus Risk Index work?
          </div>
          <div class="collapse-content">
            <p>
              The Virus Risk Index is a 10 point scale where values between 1
              and 8 indicate an increasing risk of virus transmission, while
              values of 9 and 10 indicate a likelihood that the virus pathogen
              is present. To calculate this score, our AI analyzes five things:
              Airborne Volatiles related to the Coronavirus and Influenza,
              Particulate Matter, Temperature, Humidity and Carbon Dioxide.
            </p>
          </div>
        </div>
        <div
          tabindex="4"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
        >
          <div class="collapse-title text-xl font-medium">
            What space can it cover?
          </div>
          <div class="collapse-content">
            <p>
              The molecules in every gas and odour have different properties
              which impact how far they can travel and how fast they can be
              detected. A good rule of thumb for a typical indoor space is that
              NOZE can cover an area of up to 800 square feet (80 square meters)
              without barriers like walls or doors.
            </p>
          </div>
        </div>
        <div
          tabindex="5"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
        >
          <div class="collapse-title text-xl font-medium">
            How many NOZE devices do I need?
          </div>
          <div class="collapse-content">
            <p>
              If you want to monitor different rooms at the same time, we
              suggest that you place one NOZE in each room, depending on the
              layout. If you only have one NOZE then you should monitor the room
              where you spend most of your time or are the most concerned about.
            </p>
          </div>
        </div>
        <div
          tabindex="6"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
        >
          <div class="collapse-title text-xl font-medium">
            What is the Warranty on NOZE?
          </div>
          <div class="collapse-content">
            <p>NOZE comes with a one-year limited warranty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
