"use client";

import React, { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import Download from "./sections/Download";

const JEFShield = () => {
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
      <Hero />
      <ProductIntro />
      <DetailedContent />
      <Download />
    </div>
  );
};

export default JEFShield;
