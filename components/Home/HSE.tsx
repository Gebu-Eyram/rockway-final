import Image from "next/image";
import Link from "next/link";
import React from "react";

const HSE = () => {
  return (
    <div className="w-full inter mx-auto py-8 px-4 max-w-7xl grid lg:grid-cols-2 gap-6">
      <div className="bg-muted/20 flex flex-col items-start justify-center rounded-3xl p-6">
        <h2 className="text-3xl font-semibold  mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl inter">
          Delivering Excellence with Safety at Our Core
        </h2>
        <Link href="/services" className="mb-6 ">
          <button className="bg-sky-600 text-background py-4 px-6 rounded-full text-sm hover:bg-sky-800">
            Our HSE Commitment
          </button>
        </Link>
        <p className="text-muted-foreground">
          <span className="font-medium text-foreground! ">
            High quality service delivery{" "}
          </span>
          to ensure that our clients achieve their operational goals while
          maintaining the highest safety standards in every project we
          undertake.
        </p>
        <p className="text-muted-foreground mt-6">
          <span className="font-medium text-foreground! ">
            Real time monitoring{" "}
          </span>
          and transparent communication are at the heart of our operations,
          ensuring our clients are always informed and confident in our
          services.
        </p>
      </div>
      <div className="h-140 bg-muted rounded-3xl relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HSE;
