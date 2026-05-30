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
  const navItems = [
    { label: "HOME", isActive: true },
    { label: "OUR BUSINESS", isActive: true },
    { label: "AUDIT SERVICES", isActive: true },
    { label: "EARTHING HEALTH ASSESSMENT", isActive: false },
  ];

  const detailedPages = [
    {
      label: "CONVENTIONAL ASSESSMENT",
      title: "THE GAP IN CONVENTIONAL EARTHING ASSESSMENT",
      content: `Standard practice is to measure the resistance of the earth electrode and compare it against the design value. If within acceptable limits, the earthing system is considered satisfactory and safe.

This has a significant limitation addressed in both IEEE Std 80 and IEEE Std 81. A ground grid has multiple parallel current paths. A corroded joint, disconnected riser, or isolated grid section creates a local deficiency without changing the overall measured resistance — the healthy parallel paths continue to return a satisfactory reading.

JEF's Earthing Health Assessment is designed specifically to address these gaps.`,
    },
    {
      label: "DETERIORATION FACTORS",
      title: "WHY EARTHING SYSTEMS DETERIORATE",
      content: `An earthing system which is adequate during commissioning may become deficient over its service life through several mechanisms:

• Environmental corrosion — electrochemical interaction between buried conductors and soil.
• Galvanic corrosion — dissimilar metals in contact accelerate corrosion.
• Thermal and mechanical stress at joints — repeated fault events loosen mechanical joints.
• Changes to the installation — plant modifications and extensions.
• Workmanship at installation — under-torqued clamps and incomplete welds.`,
    },
    {
      label: "WHAT IS AT STAKE",
      title: "WHAT IS AT STAKE",
      content: `A deficient earthing system puts three things at risk:

1. Protection system operation — Fault current may be insufficient to operate protection in time.
2. Personnel safety — Exposure to hazardous touch and step potentials.
3. Asset integrity — Potential for fire and equipment damage during faults.`,
    },
  ];

  const whyCards = [
    {
      title: "ASSESSMENT, NOT JUST TESTING",
      description: "Each test result is interpreted in the context of the complete earthing system to produce directly actionable findings.",
    },
    {
      title: "CARRIED OUT ON LIVE SYSTEM",
      description: "Designed for live systems, eliminating the production impact that would make comprehensive testing impractical.",
    },
    {
      title: "LOCATION-SPECIFIC FINDINGS",
      description: "JEF’s methodology pinpoints the specific location of each deficiency — open riser, isolated grid section, or corroded connection.",
    },
    {
      title: "MODELLING AND SIMULATION",
      description: "Computer modelling using CDEGS software produces quantitative assessments of GPR and potential distribution.",
    },
    {
      title: "COMPLIANCE WITH STANDARDS",
      description: "Findings are in accordance with IEEE Std 80-2013, IEEE Std 81-2025, IS 3043-2018, and CEA Regulations 2023.",
    },
    {
      title: "EXPERIENCED ENGINEERS",
      description: "All assessments are carried out by qualified electrical engineers with experience across diverse critical infrastructure.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "Why is earth resistance alone not enough?",
      answer: "Earth resistance only measures the path to earth, not the integrity of the entire grid. A low resistance reading can mask disconnected risers or isolated grid sections.",
    },
    {
      id: 2,
      question: "Is a shutdown required for the assessment?",
      answer: "No, JEF's methodology is designed for live systems, ensuring zero impact on your operations.",
    },
    {
      id: 3,
      question: "How often should an Earthing Health Assessment be conducted?",
      answer: "We recommend a comprehensive assessment every 3 to 5 years, or after significant plant expansions.",
    },
  ];

  return (
    <div className="bg-[#232427]">
      <Hero title="EARTHING HEALTH ASSESSMENT" videoSrc="/Audit Services/Earthing Audit - Audit Services.mp4" />
      <ProductIntro 
        navItems={navItems}
        logoSrc="/Audit Services/eha logo.png"
        title="EARTHING HEALTH ASSESSMENT"
        introText="Most earthing systems are designed carefully, installed correctly, and then largely forgotten. JEF’s Earthing Health Assessment is a systematic, multi-parameter evaluation of the earthing system as a whole — not just the earth electrode in isolation."
        expandedText="The assessment assesses the condition of buried conductors, the integrity of connections throughout the grid, the adequacy of earth loop impedance for protective device operation, and the safety of the installation for personnel and assets."
      />
      <DetailedContent pages={detailedPages} />
      <WhyAudit 
        title="WHY US FOR EARTHING HEALTH ASSESSMENT?" 
        description="As a pioneer in Earthing integrity testing services, we at JEF have over two decades of experience covering 300,000 riser connections spread across 18 countries. With several patents in this field, our level of expertise is unmatched."
        cards={whyCards} 
      />
      <AreaOfExpertise />
      <FAQ faqData={faqData} />
      <DownloadSection />
    </div>
  );
};

export default EarthingHealthAssessment;
