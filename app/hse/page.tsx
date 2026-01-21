import React from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Shield, Heart, Leaf, AlertTriangle, Award, FileText, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HSEPage = () => {
  const stats = [
    { value: "5M+", label: "Safe Man-hours" },
    { value: "0", label: "Lost Time Incidents (2023)" },
    { value: "100%", label: "Safety Training Compliance" },
    { value: "99.9%", label: "HSE Performance Rating" },
  ];

  const commitments = [
    {
      icon: Shield,
      title: "Zero Harm Culture",
      description:
        "We believe all injuries and incidents are preventable. Every employee has the authority to stop unsafe work.",
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
      description:
        "Comprehensive health programs including regular medical checks, wellness initiatives, and mental health support.",
    },
    {
      icon: Leaf,
      title: "Environmental Protection",
      description:
        "Minimizing environmental impact through pollution prevention, waste management, and resource conservation.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description:
        "Systematic identification, assessment, and control of risks across all operations and activities.",
    },
  ];

  const safetyPrograms = [
    {
      icon: Users,
      title: "Safety Training",
      description:
        "Comprehensive training programs for all personnel including orientation, specialized courses, and regular refreshers.",
    },
    {
      icon: FileText,
      title: "Incident Reporting",
      description:
        "Robust system for reporting and investigating incidents, near-misses, and hazards to prevent recurrence.",
    },
    {
      icon: Award,
      title: "Safety Recognition",
      description:
        "Programs to recognize and reward individuals and teams demonstrating outstanding safety performance.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <BlurFade delay={0.1}>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Health, Safety & Environment
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Safety is not just a priority at Rockway—it's a core value embedded in
                everything we do.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="bg-gray-50 py-16 md:py-32">
        <div className="mx-auto max-w-7xl border-t px-6">
          <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6">
            Our Commitment
          </span>
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <BlurFade delay={0.1} inView>
              <div>
                <p className="text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
                  HSE Policy Framework
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="mt-6 sm:mt-0">
                <p className="text-gray-600">
                  Our comprehensive HSE management system ensures the safety of our people,
                  protection of the environment, and operational excellence.
                </p>
              </div>
            </BlurFade>
          </div>

          <div className="mt-12 md:mt-24 grid gap-8 sm:grid-cols-2">
            {commitments.map((commitment, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <commitment.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-600">{commitment.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Programs Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl border-t px-6">
          <span className="text-caption -ml-6 -mt-3.5 block w-max bg-white px-6">
            Safety Programs
          </span>
          <div className="mt-12 md:mt-24">
            <BlurFade delay={0.1} inView>
              <p className="text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl mb-12">
                Our Safety Initiatives
              </p>
            </BlurFade>
            <div className="grid gap-8 md:grid-cols-3">
              {safetyPrograms.map((program, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                  <div className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors">
                    <program.icon className="w-10 h-10 text-gray-900 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Team Section */}
      <section className="bg-gray-50 py-16 md:py-32">
        <div className="mx-auto max-w-7xl border-t px-6">
          <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6">
            Safety Team
          </span>
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <BlurFade delay={0.1} inView>
              <div>
                <p className="text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
                  Meet Our HSE Professionals
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="mt-6 sm:mt-0">
                <p className="text-gray-600">
                  Our dedicated safety team works tirelessly to maintain the highest standards
                  of health, safety, and environmental protection across all operations.
                </p>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.3} inView>
            <div className="mt-12 md:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((member, index) => (
                <div key={index} className="group overflow-hidden">
                  <img
                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                    src="/engineer.webp"
                    alt="HSE team member"
                    width="826"
                    height="1239"
                  />
                  <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                    <div className="flex justify-between">
                      <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                        HSE Manager
                      </h3>
                      <span className="text-xs">_0{index + 1}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Safety & Environment
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-32 relative">
        <div className="mx-auto max-w-7xl border-t px-6">
          <span className="text-caption -ml-6 -mt-3.5 block w-max bg-white px-6">
            Certifications
          </span>
          
          {/* Lines decoration */}
          <div className="pointer-events-none select-none absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-px">
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
            <div className="absolute inset-y-0 right-0 w-px">
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
          </div>

          <div className="mt-12 md:mt-24">
            <BlurFade delay={0.1} inView>
              <p className="text-3xl font-semibold text-center mb-3 tracking-tighter text-balance text-gray-900 md:text-4xl">
                Certified Excellence You Can Trust
              </p>
              <p className="text-center text-gray-600 text-base max-w-2xl mx-auto mb-8">
                Our ISO certifications demonstrate our commitment to maintaining the
                highest standards in quality, safety, and environmental management
                across all operations.
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <Image
                src="/rockway-certs.jpg"
                width={1200}
                height={200}
                alt="Certifications and Affiliations"
                className="mx-auto h-auto min-w-sm md:min-w-md lg:min-w-2xl w-full max-w-5xl pointer-events-none"
              />
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <Link href={"/contact"} className="flex justify-center mt-8">
                <Button size="lg" className="font-medium">
                  Talk to Us
                </Button>
              </Link>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HSEPage;
