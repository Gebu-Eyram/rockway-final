import ContentSection from "@/components/About/Content";
import Double from "@/components/About/Double";
import StatsSection from "@/components/About/StatsSection";
import TeamSection from "@/components/About/TeamSection";
import React from "react";

const page = () => {
  return (
    <div className="font-sans">
      <ContentSection />
      <Double />
      <TeamSection />
    </div>
  );
};

export default page;
