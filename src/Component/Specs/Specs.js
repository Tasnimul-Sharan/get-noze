import React from "react";
import outline from "../../images/Outline-768x561.png";

const Specs = () => {
  return (
    <section>
      <div className="bg-black p-28 flex justify-center items-center ">
        <img src={outline} className="max-w-lg " alt="" />
      </div>
      <div>
        <div class="hero min-h-screen">
          <div class="hero-content flex-col">
            <div className="m-0">
              <h1 class="text-5xl font-bold text-violet-900">Specifications</h1>
            </div>
            <div className="mx-28 my-5 text-start text-violet-900">
              <div
                tabindex="0"
                class="collapse collapse-plus border border-base-300 rounded-box my-5"
              >
                <div class="collapse-title text-xl font-medium">
                  What's in the box?
                </div>
                <div class="collapse-content collapse-plus">
                  <p>
                    NOZE Device <br /> Power Adaptor <br /> Cable Quick <br />{" "}
                    Start Guide
                  </p>
                </div>
              </div>
              <div
                tabindex="1"
                class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
              >
                <div class="collapse-title text-xl font-medium">
                  Dimensions & Weight
                </div>
                <div class="collapse-content">
                  <p>
                    Width: 86mm <br /> Depth: 86mm <br /> Height: 167mm <br />{" "}
                    Weight: 650g
                  </p>
                </div>
              </div>
              <div
                tabindex="2"
                class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
              >
                <div class="collapse-title text-xl font-medium">Power</div>
                <div class="collapse-content">
                  <p>
                    Input: 100–240 V AC 0.2 A <br /> DC Output: 5 V DC 3.0 A
                  </p>
                </div>
              </div>
              <div
                tabindex="3"
                class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
              >
                <div class="collapse-title text-xl font-medium">
                  Connectivity
                </div>
                <div class="collapse-content">
                  <p>
                    802.11 a/b/g/n (2.4 GHz) Wi-Fi <br />
                    Bluetooth Low Energy
                  </p>
                </div>
              </div>
              <div
                tabindex="4"
                class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
              >
                <div class="collapse-title text-xl font-medium">
                  Requirements
                </div>
                <div class="collapse-content">
                  <p>
                    Nearby electrical socket <br />
                    WiFi Network <br />
                    Compatible mobile device with iOS 8 or later, or Android 4
                    or later <br />
                    The free NOZE app
                  </p>
                </div>
              </div>
              <div
                tabindex="5"
                class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
              >
                <div class="collapse-title text-xl font-medium">
                  Detection Ranges
                </div>
                <div class="collapse-content">
                  <p>
                    Mould Index: 1 to 10 <br />
                    Virus Index: 1 to 10 <br />
                    Carbon Dioxide: 0.1 to 2000 ppm <br />
                    Ammonia: 0.1 to 50 ppm <br />
                    Formaldehyde: 0.1 to 2 ppm <br />
                    Butanal: 0.1 to 50 ppm <br />
                    Nitrogen Dioxide: 0.1 to 5 ppm <br />
                    Ethanol: 1000 ppm to 3000 ppm <br />
                    Tobacco Odour: Present/Absent <br />
                    PM 2.5: 0 to 1000 μg/m3 <br />
                    PM 10: 0 to 1000 μg/m3 <br />
                    Humidity: 10% to 80%
                  </p>
                </div>
              </div>
              <div
                tabindex="6"
                class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
              >
                <div class="collapse-title text-xl font-medium">Warranty</div>
                <div class="collapse-content">
                  <p>One-year limited warranty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
