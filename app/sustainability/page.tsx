"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Leaf,
  Users,
  Shield,
  Sun,
  Recycle,
  Droplets,
  Trees,
} from "lucide-react";

const SustainabilityPage = () => {
  const esgPillars = [
    {
      title: "Environmental",
      icon: Leaf,
      items: [
        "Carbon footprint reduction",
        "Waste minimization",
        "Water conservation",
        "Biodiversity protection",
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      title: "Social",
      icon: Users,
      items: [
        "Local community development",
        "Employee welfare",
        "Diversity & inclusion",
        "Education support",
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Governance",
      icon: Shield,
      items: [
        "Ethical business practices",
        "Transparent reporting",
        "Risk management",
        "Regulatory compliance",
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
  ];

  const initiatives = [
    {
      title: "Renewable Energy Integration",
      description:
        "Exploring solar and renewable energy solutions to reduce our carbon footprint and support Ghana's clean energy transition.",
      icon: Sun,
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
    },
    {
      title: "Waste Management",
      description:
        "Comprehensive waste reduction, recycling, and responsible disposal programs across all operations.",
      icon: Recycle,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      title: "Water Stewardship",
      description:
        "Efficient water use practices and protection of water resources in areas where we operate.",
      icon: Droplets,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Environmental Conservation",
      description:
        "Supporting reforestation projects and habitat preservation in local communities.",
      icon: Trees,
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600",
    },
  ];

  const communityStats = [
    { number: "50+", label: "Scholarships Awarded" },
    { number: "1000+", label: "People Trained" },
    { number: "10", label: "Community Projects" },
    { number: "$2M+", label: "Community Investment" },
  ];

  const communityPrograms = [
    {
      title: "Education Scholarships",
      description:
        "Supporting promising students from host communities to pursue higher education in STEM fields.",
    },
    {
      title: "Skills Development",
      description:
        "Vocational training programs to build local capacity and create employment opportunities.",
    },
    {
      title: "Healthcare Initiatives",
      description:
        "Medical outreach programs and health facility improvements in underserved communities.",
    },
    {
      title: "Infrastructure Support",
      description:
        "Contributing to community infrastructure including schools, water systems, and roads.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 py-8 lg:py-20 inter">
      {/* Hero Section */}
      <BlurFade delay={0.1}>
        <div className="mb-16 relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200 via-emerald-100 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-10 right-0 w-48 h-48 bg-gradient-to-bl from-green-100 via-emerald-50 to-transparent rounded-full blur-3xl opacity-50"></div>

          <div className="relative">
            <span className="inline-block px-4 py-2 text-sm border border-gray-300 rounded-full mb-6">
              Sustainability & ESG
            </span>
            <h1 className="text-3xl font-semibold font-sans mb-6 tracking-tighter text-balance text-gray-900 md:text-5xl max-w-3xl">
              Building a sustainable future through responsible operations
            </h1>
            <p className="text-lg font-sans text-gray-600 max-w-2xl">
              Building a sustainable future through responsible operations,
              community engagement, and environmental stewardship.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* ESG Framework Section */}
      <div className="mb-20">
        <BlurFade delay={0.2}>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 tracking-tight text-gray-900">
              Our Approach
            </h2>
            <h3 className="text-3xl font-semibold mb-4 tracking-tighter text-gray-900 md:text-4xl">
              ESG Framework
            </h3>
            <p className="text-gray-600 max-w-3xl">
              Our ESG strategy is integrated into every aspect of our business,
              guiding decisions and driving sustainable value creation.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {esgPillars.map((pillar, index) => (
            <BlurFade key={index} delay={0.3 + index * 0.1} inView>
              <div
                className={`${pillar.color} border rounded-2xl p-6 h-full hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`w-12 h-12 ${pillar.iconColor} bg-white rounded-xl flex items-center justify-center mb-4`}
                >
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                  {pillar.title}
                </h4>
                <ul className="space-y-2">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className={`mr-2 mt-1 ${pillar.iconColor}`}>•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Environmental Initiatives Section */}
      <div className="mb-20">
        <BlurFade delay={0.1} inView>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 tracking-tight text-gray-900">
              Taking Action
            </h2>
            <h3 className="text-3xl font-semibold mb-4 tracking-tighter text-gray-900 md:text-4xl">
              Environmental Initiatives
            </h3>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((initiative, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1} inView>
              <div
                className={`${initiative.color} border rounded-2xl p-6 hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`w-12 h-12 ${initiative.iconColor} bg-white rounded-xl flex items-center justify-center mb-4`}
                >
                  <initiative.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {initiative.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Community Development Section */}
      <div className="mb-12">
        <BlurFade delay={0.1} inView>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 tracking-tight text-gray-900">
              Making a Difference
            </h2>
            <h3 className="text-3xl font-semibold mb-4 tracking-tighter text-gray-900 md:text-4xl">
              Community Development
            </h3>
            <p className="text-gray-600 max-w-3xl">
              We believe in shared prosperity. Our community development
              programs create lasting positive impact in the regions where we
              operate.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {communityPrograms.map((program, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1} inView>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {program.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Community Stats */}
        <BlurFade delay={0.4} inView>
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-sky-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default SustainabilityPage;
