import React from "react";
import Image from "next/image";

const Double = () => {
  return (
    <div className="grid max-w-7xl inter mx-auto p-4 gap-6 lg:grid-cols-2">
      <div className="">
        <p className="text-sky-600 font-medium mb-6 uppercase text-sm">
          Our Mission
        </p>
        <h2 className="text-3xl font-semibold  mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl max-w-2xl ">
          Empowering our clients to achieve excellence
        </h2>
        <p className="mb-6">
          We provide high-value services that empower our clients to achieve
          their key objectives. We partner with E&P companies of all sizes to
          maximize production, efficiency, and profitability while minimizing
          downtime.
        </p>
        <div className="relative h-80 w-full rounded-xl overflow-hidden">
          <Image
            src="/hero-2.jpg"
            alt="Oil Rig Operations"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="">
        <p className="text-sky-600 font-medium mb-6 uppercase text-sm">
          Our Mission
        </p>
        <h2 className="text-3xl font-semibold  mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl max-w-2xl ">
          Building a global force in energy services
        </h2>
        <p className="mb-6">
          We aim to be a global force in service provision, building lasting
          partnerships with energy companies worldwide through innovation,
          reliability, and excellence that drives sustainable growth and
          operational success.
        </p>
        <div className="relative h-80 w-full rounded-xl overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Offshore Oil Platform"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Double;
