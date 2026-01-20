import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Certifications = () => {
  return (
    <section
      id="certs"
      aria-labelledby="management-title"
      className="relative flex w-full inter scroll-my-24 flex-col items-center justify-center overflow-hidden  px-10    "
    >
      {/* Lines */}
      <div className="pointer-events-none inset-0 select-none">
        {/* Left vertical line */}
        <div className="absolute inset-y-0 left-0 -my-20 w-px">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Right vertical line */}
        <div className="absolute inset-y-0 right-0 -my-20 w-px">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Top horizontal line */}
        <div className="absolute top-0 left-0 right-0 w-full h-px">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Bottom horizontal line */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-px">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
      </div>
      <div className="py-20">
        <p className="mt-2 text-3xl font-semibold text-center mb-3 tracking-tighter text-balance text-gray-900 md:text-4xl">
          Certified Excellence You Can Trust
        </p>
        <p className="text-center text-gray-600 text-base max-w-2xl mx-auto mb-8">
          Our ISO certifications demonstrate our commitment to maintaining the
          highest standards in quality, safety, and environmental management
          across all operations.
        </p>
        <Image
          src="/rockway-certs.jpg"
          width={1200}
          height={200}
          alt="Certifications and Affiliations"
          className="mx-auto h-auto min-w-sm md:min-w-md lg:min-w-2xl w-full max-w-5xl pointer-events-none"
        />
        <Link href={"/contact"} className="flex justify-center mt-8">
          <Button size="lg" className="font-medium">
            Talk to Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Certifications;
