"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import WhyAudit from "./sections/WhyAudit";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import FAQ from "./sections/FAQ";
import DownloadSection from "./sections/DownloadSection";
import GeneralFireSafety from "./sections/GernalFireSafety";

const ElectricalFireSafetyAudit = () => {
  
  return (
    <div className="bg-[#232427]">
      <Hero  videoSrc="/Audit Services/Electrical & Fire Safety - Audit Services.mp4" />
      <ProductIntro 
       
      />
      <DetailedContent  />
      <WhyAudit 
       
      />
      <AreaOfExpertise />
      <GeneralFireSafety/>
      <FAQ />
      <DownloadSection />
    </div>
  );
};

export default ElectricalFireSafetyAudit;
