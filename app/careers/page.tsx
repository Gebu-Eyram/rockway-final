"use client";

import React, { useState } from "react";
import Link from "next/link";
import { JobOpenings } from "@/constants";
import { BlurFade } from "@/components/ui/blur-fade";

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = [
    "All",
    "Development",
    "Design",
    "Marketing",
    "Customer Service",
    "Operations",
    "Finance",
    "Management",
  ];

  const filteredJobs =
    selectedDepartment === "All"
      ? JobOpenings
      : JobOpenings.filter((job) => job.department === selectedDepartment);

  return (
    <div className="max-w-7xl mx-auto p-4 py-8 lg:py-20">
      {/* Hero Section */}
      <BlurFade delay={0.1}>
        <div className="mb-12 relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200 via-purple-100 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-10 right-0 w-48 h-48 bg-gradient-to-bl from-pink-100 via-purple-50 to-transparent rounded-full blur-3xl opacity-50"></div>

          <div className="relative">
            <span className="inline-block px-4 py-2 text-sm border border-gray-300 rounded-full mb-6">
              We&apos;re hiring!
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Be part of our mission
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              We&apos;re looking for passionate people to join us on our mission.
              We value flat hierarchies, clear communication, and full ownership
              and responsibility.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Department Filters */}
      <BlurFade delay={0.2}>
        <div className="mb-8 flex flex-wrap gap-3">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDepartment(dept)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedDepartment === dept
                ? "bg-gray-900 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {dept === "All" ? "View all" : dept}
          </button>
        ))}
        </div>
      </BlurFade>

      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.map((job, index) => (
          <BlurFade key={index} delay={0.3 + index * 0.05} inView>
            <div className="flex items-center justify-between p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-3">{job.description}</p>
              <div className="flex gap-2">
                {job.remote && (
                  <span className="inline-flex items-center px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-700">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    100% remote
                  </span>
                )}
                <span className="inline-flex items-center px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-700">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {job.type}
                </span>
              </div>
            </div>
            <Link
              href={`/careers/${job.slug}`}
              className="ml-6 inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors group"
            >
              Apply
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            </div>
          </BlurFade>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No openings in this department at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
