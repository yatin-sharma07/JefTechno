"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import FAQ from "./sections/FAQ";
import Download from "./sections/Download";

const EarthingStudies = () => {
  return (
    <div className="bg-[#232427]">
      <Hero />
      <ProductIntro />
      <DetailedContent />
      <FAQ />
      <Download />
    </div>
  );
};

export default EarthingStudies;
