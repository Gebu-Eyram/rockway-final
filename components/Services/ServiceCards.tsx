"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

interface Service {
  title: string;
  desc: string;
  includes: string[];
  image: string;
}

const ServiceCards = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services = [
    {
      title: "Inspection, testing and Certification",
      desc: "We offer support for operations with advanced technologies in various areas including inspection, maintenance, monitoring, certification, and data management.",
      includes: ["Inspection Services", "Testing Services", "Certification"],
      image: "/services/inspection.webp",
    },
    {
      title: "PPE, Pipes, Valves, Oil & Gas Equipment supplies",
      desc: "Our team provides a wide range of high-quality oilfields supplies and ensures the highest standards in order to support rigs, vessel services, fabrication, maintenance, and engineering for full optimization.",
      includes: [
        "PPE Supplies",
        "Pipes and Fittings",
        "Valves and Actuators",
        "Oil & Gas Equipment",
      ],
      image: "/services/ppe.jpg",
    },
    {
      title: "Marine & Subsea Services",
      desc: "Rockway specialize in providing innovative, cost effective, subsea solutions using our fleet of industry leading ROV assets.",
      includes: [
        "Seabed survey (pre-spud)",
        "End of hole surveys (sonar-based)",
        "End of hole surveys (video camera-based)",
        "Removal of drill cuttings from wellheads using ROV water jetting",
        "Removal of drill cuttings from templates using ROV water jetting",
        "Tool skid support",
        "Dredging skid support",
        "Open hole drilling support",
        "Casing assistance",
        "Drill string assistance",
        "Scour protection",
        "Seabed sampling",
        "Video inspection of guide base",
        "Video inspection of BOP (Blowout Preventer)",
        "Video inspection of riser (including latching operations observation)",
        "Deployment of corrosion caps and rig transponders",
        "Recovery of corrosion caps and rig transponders",
        "Manual valve operations using ROV manipulator",
        "Hydraulic valve operations",
        "Electrical connections",
        "Gas bubble watch",
      ],
      image: "/services/rov.jpg",
    },
    {
      title: "Chemical Supplies",
      desc: "Rockway offers a wide range of chemicals to support the operations of the oil and gas industry.",
      includes: [
        "Methanol",
        "Mono Ethylene Glycol (MEG)",
        "Tri Ethylene Glycol (TEG)",
      ],
      image: "/services/chemicals.webp",
    },
    {
      title: "Fabric Maintenance",
      desc: "Rockway is a supplier of integrated fabric maintenance solutions for all structures in the upstream industry.",
      includes: [
        "Condition Surveys",
        "Surface Preparation",
        "Coating Solutions",
        "Chemical Products",
      ],
      image: "/services/fabric.jpg",
    },
    {
      title:
        "Engineering, Design, Procurement, Construction, And Installation (EPCI)",
      desc: "We provide Engineering Design, Procurement, Construction and Installation (EPCI) services to the oil & gas, petroleum and petrochemical industries.",
      includes: [
        "Process/Chemical Engineering",
        "Civil & Structural Engineering",
        "Mechanical & Equipment",
        "Piping",
        "Electrical",
        "Instrumentation",
        "Automation",
        "Commissioning",
      ],
      image: "/engineering.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 py-8 lg:py-20 inter">
      <BlurFade delay={0.1}>
        <div>
          <h2 className="text-3xl font-semibold  mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl max-w-2xl ">
            Delivering Exceptional Oilfield Services Tailored to Your Needs
          </h2>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.05} inView>
            <div
              className="w-full bg-gray-100 rounded-2xl cursor-pointer p-2"
              onClick={() => {
                setSelectedService(service);
                setOpen(true);
              }}
            >
              <div className="mb-4 p-4">
                <p className="text-gray-700 capitalize tracking-tight font-sans leading-[104%] mt-4 text-lg font-medium line-clamp-1">
                  {service.title}
                </p>
                <p className="line-clamp-2 text-gray-600     text-sm mt-3">
                  {service.desc}
                </p>
              </div>
              <div className="bg-gray-100 rounded-2xl w-full h-80 overflow-hidden relative flex items-start justify-end">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="h-full object-cover -bottom-[12%] left-0 absolute"
                />
              </div>

              {/* <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Includes:
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                {service.includes.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
                {service.includes.length > 3 && (
                  <li className="text-gray-500 italic">
                    +{service.includes.length - 3} more...
                  </li>
                )}
              </ul>
            </div> */}
            </div>
          </BlurFade>
        ))}
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="flex flex-col p-0 font-sans min-w-lg">
          {selectedService && (
            <>
              <SheetHeader className="sticky top-0 bg-white z-10 border-b p-6">
                <SheetTitle className="text-xl font-semibold">
                  {selectedService.title}
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto px-6 py-6">
                <p className="text-base text-gray-600 mb-6">
                  {selectedService.desc}
                </p>

                <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2 pb-4">
                    {selectedService.includes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 text-sm"
                      >
                        <span className="mr-3 mt-1 text-blue-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="sticky bottom-0 left-0 right-0 bg-white border-t p-6 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="flex-1">Get a Quote</Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ServiceCards;
