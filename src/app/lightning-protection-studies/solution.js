"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";

import Download from "./sections/Download";

const LightningProtectionStudies = () => {
  return (
    <div className="bg-[#232427]">
      <Hero />
      <ProductIntro />
      <DetailedContent />
      
      <Download />
    </div>
  );
};

export default LightningProtectionStudies;
