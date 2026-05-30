"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import WhyAudit from "./sections/WhyAudit";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import FAQ from "./sections/FAQ";
import DownloadSection from "./sections/DownloadSection";

const LPSAAAudit = () => {
  const navItems = [
    { label: "HOME", isActive: true },
    { label: "OUR BUSINESS", isActive: true },
    { label: "AUDIT SERVICES", isActive: true },
    { label: "LIGHTNING PROTECTION AUDIT", isActive: false },
  ];

  const detailedPages = [
    {
      label: "WHY AUDIT?",
      title: "WHY DO YOU NEED LPS ADEQUACY AUDIT?",
      content: `Lightning is an act of God which risks life and assets. One cannot avoid it, but a prudent approach will be to measure and manage the lightning risk for adequate protection.

The purpose of Lightning Protection System audit is to conduct lightning risk assessment and determine the level of protection required as per the latest relevant standards (IEC 62305:2024).`,
    },
    {
      label: "AUDIT BENEFITS",
      title: "BENEFITS OF LPS ADEQUACY AUDIT",
      content: `• Measure lightning risk to the structure and its contents.
• Identify structures which require protection.
• Check the healthiness of the existing LPS system.
• Ensure mitigation of risk from Radiated and Conducted Surges.
• Identify gaps with respect to latest standards.
• Recommendations for Corrective Action with BOQ & Drawings.`,
    },
    {
      label: "APPLICATION AREAS",
      title: "APPLICATION AREAS",
      content: `Our audits cover:
• Commercial & Cultural Heritage Buildings.
• Public Service Structures & Utilities.
• IT/ITES Facilities, Hospitals, and Hotels.
• Manufacturing plants, Oil & Gas, and Metro rail.
• Process plants, Wind & Solar Plants.
• Critical communication towers and substations.`,
    },
  ];

  const whyCards = [
    {
      title: "RISK-BASED APPROACH",
      description: "We conduct detailed risk assessments according to IEC 62305 to determine the precise protection level required.",
    },
    {
      title: "STANDARDS COMPLIANCE",
      description: "Our audits ensure your facility complies with the latest international and national standards, including IEC 62305:2024.",
    },
    {
      title: "CERTIFIED AUDITORS",
      description: "Audits are performed by certified lightning protection specialists with extensive field experience.",
    },
    {
      title: "ADVANCED TOOLS",
      description: "We use JEF SHIELD for rapid risk assessment and concept design, providing results in under 90 seconds.",
    },
    {
      title: "COMPREHENSIVE REPORTING",
      description: "Detailed audit reports including findings, photographs, and prioritized corrective action plans.",
    },
    {
      title: "END-TO-END SUPPORT",
      description: "Technical support from audit through design and implementation of recommended solutions.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "Is lightning protection a legal requirement?",
      answer: "In many regions and for specific building types (e.g., hazardous storage, high-rise), lightning protection is mandatory under local building codes and safety regulations.",
    },
    {
      id: 2,
      question: "What is the frequency of LPS inspections?",
      answer: "According to IEC 62305, periodic inspection and maintenance are required. The interval depends on the Lightning Protection Level (LPL) and environmental factors.",
    },
    {
      id: 3,
      question: "What does an adequacy audit cover?",
      answer: "It covers risk assessment, inspection of air termination, down conductors, earthing system, and surge protective devices (SPDs).",
    },
  ];

  return (
    <div className="bg-[#232427]">
      <Hero title="LIGHTNING PROTECTION AUDIT" videoSrc="/Audit Services/Lightning Protection Audit - Audit Services.mp4" />
      <ProductIntro 
        navItems={navItems}
        logoSrc="/Audit Services/lpsaa.png"
        title="LPS ADEQUACY AUDIT"
        introText="Lightning strikes can cause catastrophic damage to property and risk human lives. JEF’s Lightning Protection System (LPS) Adequacy Audit helps you manage and mitigate these risks by ensuring your protection systems are robust and compliant."
        expandedText="We evaluate your existing LPS against the latest international standards, identifying gaps and providing engineering solutions to ensure your assets and personnel are fully protected from both direct and indirect lightning effects."
      />
      <DetailedContent pages={detailedPages} />
      <WhyAudit 
        title="WHY US FOR LIGHTNING PROTECTION AUDIT?" 
        description="JEF is a global leader in lightning protection, with patented technologies and deep expertise in risk management across critical infrastructure."
        cards={whyCards} 
      />
      <AreaOfExpertise />
      <FAQ faqData={faqData} />
      <DownloadSection />
    </div>
  );
};

export default LPSAAAudit;
