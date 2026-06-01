"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import WhyAudit from "./sections/WhyAudit";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import FAQ from "./sections/FAQ";
import DownloadSection from "./sections/DownloadSection";
import OurCertification from "./sections/OurCertification";

const PowerQualityStudiesAudit = () => {


  


  return (
    <div className="bg-[#232427]">
      <Hero videoSrc="/Audit Services/Power Quality Testing - Audit Services.mp4" />
      <ProductIntro 
      
      />
      <DetailedContent  />
      <WhyAudit 
       
      />
      <AreaOfExpertise />
      <OurCertification/>
      <FAQ  />
      <DownloadSection />
    </div>
  );
};

export default PowerQualityStudiesAudit;
