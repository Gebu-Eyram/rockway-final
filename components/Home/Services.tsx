"use client";
import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { HardHat } from "lucide-react";
import { GiFuelTank, GiOilRig } from "react-icons/gi";
import { BlurFade } from "@/components/ui/blur-fade";
import { chemicals } from "@/public/chemicals";
import { Dialog, DialogPopup, DialogPanel } from "@/components/ui/dialog";
import ServiceDialog from "./ServiceDialog";
import { RiBrushLine, RiPaletteLine, RiSettings3Line } from "react-icons/ri";

interface SubService {
  name: string;
  desc: string;
}

interface Service {
  title: string;
  desc: string;
  subServices: SubService[];
}

const ClientSupportInner = () => {
  const [percentage, setPercentage] = useState(98);
  const [activeImageIndex, setActiveImageIndex] = useState(1); // 0: pipe, 1: ppe, 2: valves
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [open, setOpen] = useState(false);

  const carouselImages = [
    "/services/pipe.webp",
    "/services/ppe.jpg",
    "/services/valves.webp",
  ];

  const Chemicals = [
    {
      name: "Methanol",
      formula: "CH₃OH",
      image: chemicals.METHANOL,
      relevance:
        "Hydrate prevention, wellbore cleaning, solvent extraction, fuel blending",
    },
    {
      name: "Mono Ethylene Glycol (MEG)",
      formula: "C₂H₆O₂",
      image: chemicals.MEG,
      relevance:
        "Hydrate inhibition, pipeline antifreeze, subsea protection, corrosion control",
    },
    {
      name: "Tri Ethylene Glycol (TEG)",
      formula: "C₆H₁₄O₄",
      image: chemicals.TEG,
      relevance:
        "Gas dehydration, moisture absorption, natural gas processing, vapor recovery",
    },
  ];

  const marineServices = [
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
  ];

  const services = [
    {
      title: "Inspection, testing and Certification",
      desc: "We offer support for operations with advanced technologies in various areas including inspection, maintenance, monitoring, certification, and data management.",
      subServices: [
        {
          name: "Inspection Services",
          desc: "Advanced inspection technologies for equipment and facilities.",
        },
        {
          name: "Testing Services",
          desc: "Comprehensive testing to ensure quality and safety.",
        },
        {
          name: "Certification",
          desc: "Official certification for compliance and standards.",
        },
      ],
    },
    {
      title: "PPE, Pipes, Valves, Oil & Gas Equipment supplies",
      desc: "Our team provides a wide range of high-quality oilfields supplies and ensures the highest standards in order to support rigs, vessel services, fabrication, maintenance, and engineering for full optimization.",
      subServices: [
        {
          name: "PPE Supplies",
          desc: "Personal protective equipment for safety.",
        },
        {
          name: "Pipes and Fittings",
          desc: "High-quality pipes and fittings.",
        },
        {
          name: "Valves and Actuators",
          desc: "Valves and actuators for control.",
        },
        {
          name: "Oil & Gas Equipment",
          desc: "Specialized equipment for oil and gas operations.",
        },
      ],
    },
    {
      title: "Marine & Subsea Services",
      desc: "Rockway specialize in providing innovative, cost effective, subsea solutions using our fleet of industry leading ROV assets.",
      subServices: marineServices.map((name) => ({
        name,
        desc: `Detailed service for ${name.toLowerCase()}.`,
      })),
    },
    {
      title: "Chemical Supplies",
      desc: "Rockway offers a wide range of chemicals to support the operations of the oil and gas industry.",
      subServices: Chemicals.map((chem) => ({
        name: chem.name,
        desc: chem.relevance,
      })),
    },
    {
      title: "Fabric Maintenance",
      desc: "Rockway is a supplier of integrated fabric maintenance solutions for all structures in the upstream industry.",
      subServices: [
        {
          name: "Condition Surveys",
          desc: "Assessing the condition of structures.",
        },
        {
          name: "Surface Preparation",
          desc: "Preparing surfaces for maintenance.",
        },
        { name: "Coating Solutions", desc: "Applying protective coatings." },
        {
          name: "Chemical Products",
          desc: "Supply of various chemical products.",
        },
      ],
    },
    {
      title:
        "Engineering, Design, Procurement, Construction, And Installation (EPCI)",
      desc: "We provide Engineering Design, Procurement, Construction and Installation (EPCI) services to the oil & gas, petroleum and petrochemical industries.",
      subServices: [
        {
          name: "Process/Chemical Engineering",
          desc: "Engineering for processes and chemicals.",
        },
        {
          name: "Civil & Structural Engineering",
          desc: "Civil and structural design.",
        },
        {
          name: "Mechanical & Equipment",
          desc: "Mechanical engineering and equipment.",
        },
        { name: "Piping", desc: "Piping design and installation." },
        { name: "Electrical", desc: "Electrical engineering." },
        { name: "Instrumentation", desc: "Instrumentation systems." },
        { name: "Automation", desc: "Automation solutions." },
        { name: "Commissioning", desc: "Commissioning services." },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random percentage between 72 and 98
      const randomPercentage = Math.floor(Math.random() * (98 - 72 + 1)) + 72;
      setPercentage(randomPercentage);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % 3);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % marineServices.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [activeChemicalIndex, setActiveChemicalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChemicalIndex((prev) => (prev + 1) % Chemicals.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const filledBars = Math.round((percentage / 100) * 25);

  const getColor = () => {
    if (percentage >= 90) return "#3b82f6"; // blue
    if (percentage >= 80) return "#22c55e"; // green
    return "#f97316"; // orange
  };

  return (
    <>
      <section
        aria-label="Client Support and Communication"
        id="support"
        className="relative inter w-full max-w-7xl mx-auto  scroll-mt-24 "
      >
        <div className="p-2">
          <div className="  p-4 gap-12 py-8">
            <div>
              <h2 className="text-3xl font-semibold  mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl">
                Our Services
              </h2>
            </div>

            {/* Left - Visual Display */}
            <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <BlurFade delay={0.2} inView>
                <div
                  className="w-full cursor-pointer"
                  onClick={() => {
                    setSelectedService(services[0]);
                    setOpen(true);
                  }}
                >
                  <div className="bg-gray-100 flex flex-col gap-2  rounded-2xl w-full h-80 p-2 relative">
                    <Image
                      src="/services/inspection.webp"
                      alt="Support Image 1"
                      width={400}
                      height={320}
                      className="rounded-2xl object-cover w-full h-38 border shadow-sm shadow-gray-200"
                    />
                    <div className="absolute top-41 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 border rounded-full  h-16 w-16 flex items-center justify-center shadow-sm shadow-gray-200 z-10">
                      <div className="h-14 w-14 bg-white border rounded-full flex items-center justify-center">
                        <Image
                          src="/logo.png"
                          alt="Logo"
                          width={40}
                          height={40}
                          className="object-contain h-10"
                        />
                      </div>
                    </div>
                    <div className="bg-white w-full h-full rounded-2xl border p-2 shadow-sm shadow-gray-200 flex flex-col justify-center">
                      <div className="p-3">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <motion.div
                              key={percentage}
                              className="text-2xl font-bold"
                              style={{ color: getColor() }}
                            >
                              {percentage}%
                            </motion.div>
                          </div>
                          <div
                            className="text-sm font-semibold"
                            style={{ color: getColor() }}
                          >
                            Asset integrity
                          </div>
                        </div>
                        <svg
                          width="100%"
                          height="48"
                          viewBox="0 0 250 48"
                          preserveAspectRatio="none"
                        >
                          {Array.from({ length: 25 }).map((_, i) => (
                            <motion.rect
                              key={i}
                              x={i * 10}
                              y="0"
                              width="8"
                              height="48"
                              rx="3"
                              animate={{
                                fill: i < filledBars ? getColor() : "#e5e7eb",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          ))}
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 w-full  capitalize  tracking-tight font-sans  line-clamp-2 leading-[104%]  mt-4 text-lg font-medium">
                    Inspection, testing and Certification
                  </p>
                  <p className="line-clamp-3 w-full text-gray-600 text-sm mt-3">
                    We offer support for operations with advanced technologies
                    in various areas including inspection, maintenance,
                    monitoring, certification, and data management.
                  </p>
                </div>
              </BlurFade>
              <BlurFade delay={0.4} inView>
                <div
                  className="w-full cursor-pointer"
                  onClick={() => {
                    setSelectedService(services[1]);
                    setOpen(true);
                  }}
                >
                  <div className="bg-gray-100 rounded-2xl w-full h-80 overflow-hidden relative p-4 flex items-start justify-center">
                    <div className="absolute bottom-[10%]   inset-x-0 z-20 m-auto size-fit">
                      <div className="bg-white z-1 h-10 relative flex size-fit w-fit items-center gap-2 rounded-xl border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                        {activeImageIndex === 0 && (
                          <>
                            <GiOilRig className="size-5 text-blue-500" />
                            High-Quality Pipes
                          </>
                        )}
                        {activeImageIndex === 1 && (
                          <>
                            <HardHat className="size-5 text-yellow-500" />
                            High-Quality PPE
                          </>
                        )}
                        {activeImageIndex === 2 && (
                          <>
                            <RiSettings3Line className="size-5 text-purple-500" />
                            High-Quality Valves
                          </>
                        )}
                      </div>
                      <div className="bg-white absolute inset-2 -bottom-2 mx-auto rounded-xl border px-3 py-4 text-xs font-medium shadow-md shadow-zinc-950/5"></div>
                    </div>
                    {/* Stacked Card Divs */}
                    <div className="relative w-48 h-48">
                      {/* Pipe */}
                      <motion.div
                        animate={{
                          x: activeImageIndex === 0 ? 0 : -2,
                          rotate: activeImageIndex === 0 ? 0 : -10,
                          scale: activeImageIndex === 0 ? 1 : 0.9,
                          zIndex: activeImageIndex === 0 ? 10 : 1,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 origin-bottom-left"
                      >
                        <Image
                          src="/services/pipe.webp"
                          alt="Pipe"
                          width={192}
                          height={192}
                          className="rounded-xl object-cover w-full h-full border shadow-md shadow-zinc-950/5"
                        />
                      </motion.div>
                      {/* PPE */}
                      <motion.div
                        animate={{
                          x:
                            activeImageIndex === 1
                              ? 0
                              : activeImageIndex === 0
                                ? 2
                                : -2,
                          rotate:
                            activeImageIndex === 1
                              ? 0
                              : activeImageIndex === 0
                                ? 10
                                : -10,
                          scale: activeImageIndex === 1 ? 1 : 0.9,
                          zIndex: activeImageIndex === 1 ? 10 : 1,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 origin-bottom"
                      >
                        <Image
                          src="/services/ppe.jpg"
                          alt="PPE"
                          width={192}
                          height={192}
                          className="rounded-xl object-cover w-full h-full border shadow-md shadow-zinc-950/5"
                        />
                      </motion.div>
                      {/* Valves */}
                      <motion.div
                        animate={{
                          x: activeImageIndex === 2 ? 0 : 2,
                          rotate: activeImageIndex === 2 ? 0 : 10,
                          scale: activeImageIndex === 2 ? 1 : 0.9,
                          zIndex: activeImageIndex === 2 ? 10 : 1,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 origin-bottom-right"
                      >
                        <Image
                          src="/services/valves.webp"
                          alt="Valves"
                          width={192}
                          height={192}
                          className="rounded-xl object-cover w-full h-full border shadow-md shadow-zinc-950/5"
                        />
                      </motion.div>
                    </div>

                    {/* Overlay Stack */}
                  </div>
                  <p className="text-gray-700  capitalize  tracking-tight font-sans   leading-[104%]  mt-4 text-lg font-medium line-clamp-1">
                    PPE, Pipes, Valves, Oil & Gas Equipment supplies
                  </p>
                  <p className="line-clamp-3  text-gray-600 text-sm mt-3">
                    Our team provides a wide range of high-quality oilfields
                    supplies and ensures the highest standards in order to
                    support rigs, vessel services, fabrication, maintenance, and
                    engineering for full optimization. Rockway prides itself of
                    engaging the services of the best vendors in the industry to
                    provide oil and gas supplies with the highest standards in
                    order to support your maintenance and repairs for full
                    optimization. Fasteners, Pipes, Pipes Fittings, Tube
                    Fittings, Rill Bits and Taps, Solar Lights, Askets & Seals,
                    Valeves and Actuators, Flanges, PPE Supplies, Marine
                    Products: Floats, Buoy, Bumpers, Shaft Bearings Fenders,
                    Naval Bearings.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={0.6} inView>
                <div
                  className="w-full cursor-pointer"
                  onClick={() => {
                    setSelectedService(services[2]);
                    setOpen(true);
                  }}
                >
                  <div className="bg-gray-100 rounded-2xl w-full h-80 overflow-hidden flex flex-col  relative p-2">
                    {/* Fade overlay at bottom */}
                    <div className="absolute top-39 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 border rounded-full  h-16 w-16 flex items-center justify-center shadow-sm shadow-gray-200 z-10">
                      <div className="h-14 w-14 bg-white border rounded-full flex items-center justify-center">
                        <Image
                          src="/logo.png"
                          alt="Logo"
                          width={40}
                          height={40}
                          className="object-contain h-10"
                        />
                      </div>
                    </div>

                    <div className="bg-white w-full  h-40 rounded-2xl  border p-2 shadow-sm shadow-gray-200 flex items-center px-4 justify-center">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={activeServiceIndex}
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -50, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="text-2xl font-semibold text-gray-800 leading-tight text-center"
                        >
                          {marineServices[activeServiceIndex]}
                        </motion.p>
                      </AnimatePresence>

                      {/* Next service preview at bottom */}
                    </div>
                    <div className="bg-white p-1  border rounded-2xl shadow-sm shadow-gray-200  h-38 mt-2 flex items-center justify-center">
                      <Image
                        src="/services/rov.jpg"
                        alt="Support Image 1"
                        width={400}
                        height={320}
                        className="rounded-2xl object-cover w-full h-full border  shadow-sm shadow-gray-200"
                      />
                    </div>
                  </div>
                  <p className="text-gray-700  capitalize  tracking-tight font-sans   leading-[104%]  mt-4 text-lg font-medium line-clamp-1">
                    Marine & Subsea Services
                  </p>
                  <p className="line-clamp-3  text-gray-600 text-sm mt-3">
                    Rockway specialize in providing innovative, cost effective,
                    subsea solutions using our fleet of industry leading ROV
                    assets. Our ROV services includes: Marine & Subsea Services
                    Products and Services Seabed survey pre-spud and end of hole
                    surveys (sonar and/or video camera), Removal of drill
                    cuttings from wellheads/templates using ROV water jetting,
                    Tool or dredging skid support, Open hole drilling support
                    Casing and drill string assistance, Scour protection and
                    seabed samples scopes, Video inspection of guide base, BOP,
                    and riser, including observation of latching operations,
                    Deployment and recovery of corrosion caps and rig
                    transponders, Manual valve operations using ROV manipulator,
                    hydraulic valves, electrical connections, and gas bubble
                    watch.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={0.8} inView>
                <div
                  className="w-full cursor-pointer"
                  onClick={() => {
                    setSelectedService(services[3]);
                    setOpen(true);
                  }}
                >
                  <div className="bg-gray-100 rounded-2xl w-full h-80 overflow-hidden relative p-4 flex items-center justify-center">
                    <div className="w-full  rounded-2xl ">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeChemicalIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="px-4 py-2"
                        >
                          <div className=" font-medium">
                            {Chemicals[activeChemicalIndex].name}
                          </div>
                          <div className="text-sm text-gray-500  font-sans">
                            {Chemicals[activeChemicalIndex].formula}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      <div className="bg-white border-t p-4 shadow rounded-2xl">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeChemicalIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            <Image
                              src={Chemicals[activeChemicalIndex].image}
                              alt={Chemicals[activeChemicalIndex].name}
                              width={300}
                              height={200}
                              className="object-contain w-full h-40"
                            />
                          </motion.div>

                          <div className="p-2 border rounded-md">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={Chemicals[activeChemicalIndex].relevance}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs text-gray-600 line-clamp-1"
                              >
                                {Chemicals[activeChemicalIndex].relevance}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700  capitalize  tracking-tight font-sans   leading-[104%]  mt-4 text-lg font-medium line-clamp-1">
                  Chemical Supplies
                </p>
                <p className="line-clamp-3  text-gray-600 text-sm mt-3">
                  Rockway offers a wide range of chemicals to support the
                  operations of the oil and gas industry. Our product line
                  includes general and standard chemicals such as Methanol, Mono
                  Ethylene Glycol (MEG), and Tri Ethylene Glycol (TEG), as well
                  as specialty chemicals that are tailored to meet specific
                  needs. In addition, we provide customized solutions and
                  services to our clients, including oilfields chemical
                  services, latex services, and laboratory services. Fabric
                  Maintenance Rockway is a supplier of integrated fabric
                  maintenance solutions for all structures in the upstream
                  industry. We offer a comprehensive range of site services
                  which, coupled with our in-house management expertise and
                  technical capability, enables us to assist in enhancing and
                  maintaining assert integrity. Our Fabric maintenance
                  activities include Condition Surveys, Surface Preparation,
                  Coating Solutions, Supply of chemical products for various
                  applications including wax inhibition, well-bore cleaning,
                  corrosion prevention, scale removal, H2S neutralization,
                  oxygen and H2S scavenging, and SRB removal. our
                  services-Rockway oilfields.
                </p>
              </BlurFade>
              <BlurFade delay={0.8} inView>
                <div
                  className="w-full cursor-pointer"
                  onClick={() => {
                    setSelectedService(services[4]);
                    setOpen(true);
                  }}
                >
                  <div className="bg-gray-100 rounded-2xl w-full h-80 overflow-hidden relative p-4 flex items-start justify-center">
                    <div className="absolute inset-0 z-20 m-auto size-fit">
                      <div className="bg-white z-1 min-h-10 relative flex size-fit w-fit items-center gap-2 rounded-xl border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                        {activeImageIndex === 0 && (
                          <div>
                            <div className="flex items-center gap-2 text-sm">
                              <GiFuelTank className="size-5 text-blue-500" />
                              <div>
                                <p> Condition Surveys</p>
                                <p className="text-xs text-muted-foreground">
                                  Visual inspection, ultrasonic thickness
                                  gauging
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {activeImageIndex === 1 && (
                          <div>
                            <div className="flex items-center gap-2 text-sm">
                              <RiBrushLine className="size-5 text-yellow-500" />
                              <div>
                                <p> Surface Preparation</p>
                                <p className="text-xs text-muted-foreground">
                                  Abrasive blasting, power tool cleaning, water
                                  jetting
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {activeImageIndex === 2 && (
                          <div>
                            <div className="flex items-center gap-2 text-sm">
                              <RiPaletteLine className="size-5 text-purple-500" />
                              <div>
                                <p> Coating Solutions</p>
                                <p className="text-xs text-muted-foreground">
                                  Protective coatings, anti-corrosion systems,
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="bg-white absolute inset-2 -bottom-2 mx-auto rounded-xl border px-3 py-4 text-xs font-medium shadow-md shadow-zinc-950/5"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700  capitalize  tracking-tight font-sans   leading-[104%]  mt-4 text-lg font-medium line-clamp-1">
                  Fabric Maintenance
                </p>
                <p className="line-clamp-3  text-gray-600 text-sm mt-3">
                  Rockway is a supplier of integrated fabric maintenance
                  solutions for all structures in the upstream industry. We
                  offer a comprehensive range of site services which, coupled
                  with our in-house management expertise and technical
                  capability, enables us to assist in enhancing and maintaining
                  assert integrity. Our Fabric maintenance activities include
                  Condition Surveys, Surface Preparation, Coating Solutions,
                  Supply of chemical products for various applications including
                  wax inhibition, well-bore cleaning, corrosion prevention,
                  scale removal, H2S neutralization, oxygen and H2S scavenging,
                  and SRB removal.
                </p>
              </BlurFade>
              <BlurFade delay={0.8} inView>
                <div
                  className="w-full cursor-pointer"
                  onClick={() => {
                    setSelectedService(services[5]);
                    setOpen(true);
                  }}
                >
                  <div className="bg-gray-100 rounded-2xl w-full h-80 overflow-hidden relative  flex items-start justify-end">
                    <Image
                      src={"/engineering.jpg"}
                      alt="Support Image 1"
                      fill
                      className=" h-full object-cover -bottom-[12%] left-0 absolute "
                    />
                  </div>
                </div>
                <p className="text-gray-700  capitalize  tracking-tight font-sans   leading-[104%]  mt-4 text-lg font-medium line-clamp-1">
                  Engineering, Design, Procurement, Construction, And
                  Installation (EPCI)
                </p>
                <p className="line-clamp-3  text-gray-600 text-sm mt-3">
                  We provide Engineering Design, Procurement, Construction and
                  Installation (EPCI) services to the oil & gas, petroleum and
                  petrochemical industries. We have trained up an elite team of
                  engineers who are capable of all our Engineering services to
                  include Process/Chemical, Civil & Structural, Mechanical &
                  Equipment, Piping, Tankage, Electrical, Instrumentation,
                  Automation and Commissioning. Providing high quality &
                  responsible maintenance and EPC services for our customers,
                  our services yield significant benefits such as lowered
                  operational costs, improved deployment time and with resource
                  optimization.
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPopup>
          <DialogPanel>
            <ServiceDialog service={selectedService} />
          </DialogPanel>
        </DialogPopup>
      </Dialog>
    </>
  );
};

const ClientSupport = () => {
  return <ClientSupportInner />;
};

export default ClientSupport;
