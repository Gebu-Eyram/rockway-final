import ContentSection from "@/components/About/Content";
import StatsSection from "@/components/About/StatsSection";
import TeamSection from "@/components/About/TeamSection";
import React from "react";

const page = () => {
  return (
    <div className="font-sans">
      <ContentSection />
      <StatsSection />
      <TeamSection />
    </div>
  );
};

export default page;
