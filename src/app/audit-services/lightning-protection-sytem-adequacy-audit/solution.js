"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";

import AreaOfExpertise from "./sections/AreaOfExpertise";
import FAQ from "./sections/FAQ";
import DownloadSection from "./sections/DownloadSection";
import ReferenceStandards from "./sections/ReferenceStandards";

const LPSAAAudit = () => {
 


 
  return (
    <div className="bg-[#232427]">
      <Hero title="LIGHTNING PROTECTION AUDIT" videoSrc="/Audit Services/Lightning Protection Audit - Audit Services.mp4" />
      <ProductIntro 
       
      />
      <DetailedContent  />
     
      <AreaOfExpertise />
      <ReferenceStandards/>
      <FAQ  />
      <DownloadSection />
    </div>
  );
};

export default LPSAAAudit;
