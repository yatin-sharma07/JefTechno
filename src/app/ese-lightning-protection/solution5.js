"use client";

import React, { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import FAQ from "./sections/FAQ";
import Download from "./sections/Download";

const ESELightningProtection = () => {
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

      {/* Product Introduction & Breadcrumb */}
      <ProductIntro />

      {/* Detailed Content (ESE Technology, Features, NLP 2200, etc.) */}
      <DetailedContent />

      {/* FAQ Section */}
      <FAQ />

      {/* Download Section */}
      <Download />
    </div>
  );
};

export default ESELightningProtection;
