import HSE from "@/components/Home/HSE";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import LogoCloud from "@/components/Home/logo-cloud";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import { Map } from "@/components/Map/Map";
import React from "react";
import AboutSection from "@/components/Home/AboutSection";
import ClientSupport from "@/components/Home/Services";
import FAQ from "@/components/Home/FAQ";
import Certifications from "@/components/Home/Certifications";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <ClientSupport />
      <HSE />
      <Testimonials />
      <Certifications />
      <Map />
      <FAQ />
    </div>
  );
};

export default Home;
