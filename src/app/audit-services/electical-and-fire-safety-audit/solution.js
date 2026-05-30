"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import WhyAudit from "./sections/WhyAudit";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import FAQ from "./sections/FAQ";
import DownloadSection from "./sections/DownloadSection";

const ElectricalFireSafetyAudit = () => {
  const navItems = [
    { label: "HOME", isActive: true },
    { label: "OUR BUSINESS", isActive: true },
    { label: "AUDIT SERVICES", isActive: true },
    { label: "ELECTRICAL & FIRE SAFETY AUDIT", isActive: false },
  ];

  const detailedPages = [
    {
      label: "AUDIT OUTCOMES",
      title: "BEYOND REPORTS: DELIVERING SAFETY OUTCOMES",
      content: `Most safety audits produce reports. JEF produces outcomes. Our Electrical & Fire Safety Audit (EFSA) is a comprehensive, multi-discipline inspection of your facility's installation.

Structured in alignment with CEA Regulations 2023 (FORM I, II & III), we ensure your facility is not just compliant, but genuinely safe for personnel and assets.`,
    },
    {
      label: "FOUR DOMAINS",
      title: "OUR FOUR AUDIT DOMAINS",
      content: `1. Electrical Safety: Verified earthing, contact protection, and confirmed protective device operation.
2. Fire Safety: Comprehensive evaluation of fire detection, suppression, and emergency response systems.
3. Thermography: Infrared scanning to detect insulation degradation and overheating before they cause failure.
4. Lightning & Surge Protection: Ensuring mitigation of risk from both direct and indirect lightning effects.`,
    },
    {
      label: "CEA COMPLIANCE",
      title: "COMPLIANCE WITH CEA REGULATIONS 2023",
      content: `Our audits are specifically designed to satisfy Regulation 32 of the CEA (Measures Relating to Safety and Electric Supply) Regulations, 2023.

We provide FORM I, II, and III reports that are mandatory for regulatory compliance and insurance readiness.`,
    },
  ];

  const whyCards = [
    {
      title: "CEA 2023 COMPLIANCE",
      description: "FORM I / II / III reports satisfying Regulation 32 of the latest safety mandates.",
    },
    {
      title: "REDUCED FIRE RISK",
      description: "Identification and remediation of electrical root causes behind a majority of fire incidents.",
    },
    {
      title: "PERSONNEL SAFETY",
      description: "Verified earthing, contact protection, and confirmed protective device operation for maximum safety.",
    },
    {
      title: "ASSET PROTECTION",
      description: "Early detection of insulation degradation, overheating, and power quality issues to extend asset life.",
    },
    {
      title: "INSURANCE READINESS",
      description: "Documented evidence of periodic inspection, supporting insurance requirements and claims.",
    },
    {
      title: "PREVENTIVE MAINTENANCE",
      description: "Development of an asset-level PM schedule to ensure long-term operational reliability.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is the CEA Regulation 2023?",
      answer: "The CEA (Measures Relating to Safety and Electric Supply) Regulations, 2023, mandate periodic safety audits and inspections for electrical installations to prevent accidents and fires.",
    },
    {
      id: 2,
      question: "Why is thermography important in a safety audit?",
      answer: "Thermography detects 'hot spots' in electrical panels and connections that are invisible to the eye, allowing for repairs before they lead to fire or failure.",
    },
    {
      id: 3,
      question: "How often should a fire safety audit be conducted?",
      answer: "We recommend a comprehensive Electrical & Fire Safety Audit annually or as per the statutory requirements of your region.",
    },
  ];

  return (
    <div className="bg-[#232427]">
      <Hero title="ELECTRICAL & FIRE SAFETY AUDIT" videoSrc="/Audit Services/Electrical & Fire Safety - Audit Services.mp4" />
      <ProductIntro 
        navItems={navItems}
        logoSrc="/efsa.png"
        title="ELECTRICAL & FIRE SAFETY AUDIT"
        introText="Most fires in industrial and commercial buildings are electrical in origin. JEF’s Electrical & Fire Safety Audit (EFSA) provides a rigorous evaluation of your facility’s safety systems to identify and eliminate these risks."
        expandedText="Conducted by qualified engineers and aligned with CEA Regulations 2023, our audits provide actionable insights that protect your people, your assets, and your business continuity."
      />
      <DetailedContent pages={detailedPages} />
      <WhyAudit 
        title="WHY US FOR ELECTRICAL & FIRE SAFETY AUDIT?" 
        description="JEF combines deep electrical engineering expertise with advanced diagnostic tools to deliver the most thorough safety audits in the industry."
        cards={whyCards} 
      />
      <AreaOfExpertise />
      <FAQ faqData={faqData} />
      <DownloadSection />
    </div>
  );
};

export default ElectricalFireSafetyAudit;
