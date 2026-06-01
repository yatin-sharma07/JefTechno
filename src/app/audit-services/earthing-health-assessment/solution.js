"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import WhyAudit from "./sections/WhyAudit";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import FAQ from "./sections/FAQ";
import DownloadSection from "./sections/DownloadSection";

const EarthingHealthAssessment = () => {
 

  return (
    <div className="bg-[#232427]">
      <Hero title="EARTHING HEALTH ASSESSMENT" videoSrc="/Audit Services/Earthing Audit - Audit Services.mp4" />
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

export default EarthingHealthAssessment;
