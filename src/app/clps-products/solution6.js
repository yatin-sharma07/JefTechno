"use client";

import React, { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import WhyJefCLPS from "./sections/WhyJefCLPS";
import FAQ from "./sections/FAQ";
import Download from "./sections/Download";


const LPS = () => {
  const [showLightningPanel, setShowLightningPanel] = useState(false);

  useEffect(() => {
    if (showLightningPanel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLightningPanel]);

  return (
    <div className="bg-[#232427]">
      {/* Landing Img Section */}
      <Hero />

      {/* Product Introduction & Read More Panel */}
      <ProductIntro 
        showLightningPanel={showLightningPanel} 
        setShowLightningPanel={setShowLightningPanel} 
      />

      {/* Detailed Content (Standard Framework, Parts, LPL, etc.) */}
      <DetailedContent />

      {/* Why JEF CLPS Section */}
      <WhyJefCLPS />

      {/* FAQ Section */}
      <FAQ />

      {/* Download Section */}
      <Download />

      {/* Our Services Section (Circle Slider) */}
    
    </div>
  );
};

export default LPS;
