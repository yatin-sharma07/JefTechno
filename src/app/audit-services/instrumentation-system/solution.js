"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import WhyAudit from "./sections/WhyAudit";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import FAQ from "./sections/FAQ";
import DownloadSection from "./sections/DownloadSection";

const InstrumentationSystemAudit = () => {
  const navItems = [
    { label: "HOME", isActive: true },
    { label: "OUR BUSINESS", isActive: true },
    { label: "AUDIT SERVICES", isActive: true },
    { label: "INSTRUMENTATION SYSTEMS", isActive: false },
  ];


  

  return (
    <div className="bg-[#232427]">
      <Hero videoSrc="/Audit Services/Instrumentation Earthing - Audit Services.mp4" />
      <ProductIntro 
       
      />
      <DetailedContent  />
      <WhyAudit 
       
      />
      <AreaOfExpertise />
      <FAQ  />
      <DownloadSection />
    </div>
  );
};

export default InstrumentationSystemAudit;
