import React from "react";
import pic from "../../images/06-1-copy-1536x1126.png";

const ServiceOne = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={pic} class="max-w-lg mx-10 mask mask-circle" alt="noze" />
        <div className="text-justify mx-20">
          <h1 class="text-5xl text-slate-900 font-bold">
            Wondering if <br /> you should get <br /> a NOZE?
          </h1>
          <p class="py-6 text-xl text-slate-500 w-10/12">
            Any way you slice it, it’s a no brainer.
          </p>
          <p className="text-slate-500">
            1. Reduce Virus spread <br />
            2. Watch out for Mold <br />
            3. Keep Asthma in check <br />
            4. Avoid Allergy flare ups <br />
            5. Improve your Sleep <br />
            6. Boost Productivity & Focus
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
