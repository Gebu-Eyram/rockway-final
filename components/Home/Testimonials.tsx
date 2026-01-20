"use client";
import React from "react";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import { LuQuote } from "react-icons/lu";

const testimonials = [
  {
    name: "Bernard A.",
    role: "Operations Manager",
    company: "GlobalPetrol Ltd.",
    content: `
					Rockway Oilfields Services, an ideal partner with reliable supply services and local expertise. They streamline our operations and remain a key pillar of our success.					`,
  },
  {
    name: "Patrick D",
    role: "Energy Corp LTD",
    company: "Energy Corp Ltd.",
    content: `Rockway Oilfields Services exceeded expectations with their top-notch oil and gas solutions. Their global network and dedication to safety ensured successful project outcomes. A trusted partner for our success.`,
    rating: 5,
  },
  {
    name: "Ronald M.",
    role: "Safety Officer",
    company: "Horizon Energy Inc",
    content: `Rockway's expertise in oil and gas services and tailored solutions have been invaluable. They consistently deliver exceptional results, making them a leader in the industry.`,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-16 bg-background overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <BlurFade>
          <div className=" mb-12">
            <h2 className="text-3xl font-semibold  mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl inter">
              What Our Clients Say
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <BlurFade key={index} delay={index * 0.1} inView className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <div className="h-full flex flex-col bg-gray-100/70 rounded-4xl p-4">
                  <div className="mb-4 flex items-center gap-2 w-full justify-between">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full border">
                      <p className="text-xl font-semibold text-gray-700">
                        {testimonial.name.charAt(0)}
                      </p>
                    </div>
                    <div className="h-12 overflow-hidden bg-white flex items-center justify-center rounded-full border px-4">
                      <Image
                        src={
                          index === 0
                            ? "/testimonials/global-petrol.png"
                            : index === 1
                              ? "/testimonials/energycorp.webp"
                              : "/testimonials/horizon-energy.jpg"
                        }
                        alt="Global Petrol Logo"
                        width={100}
                        height={40}
                      />
                      <p></p>
                    </div>
                  </div>

                  <LuQuote className=" h-10 w-10 rotate-180 text-gray-400 m-4 my-8" />
                  <div className="p-4 h-full flex flex-col justify-between">
                    <blockquote className=" text-xl font-sans leading-[100%] mb-4 ">
                      {testimonial.content}
                    </blockquote>
                    <div>
                      <p className="font-medium text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
