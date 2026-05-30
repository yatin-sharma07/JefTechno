"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import WhyAudit from "./sections/WhyAudit";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import FAQ from "./sections/FAQ";
import DownloadSection from "./sections/DownloadSection";

const InstrumentationSystemAudit = () => {
  const navItems = [
    { label: "HOME", isActive: true },
    { label: "OUR BUSINESS", isActive: true },
    { label: "AUDIT SERVICES", isActive: true },
    { label: "INSTRUMENTATION SYSTEMS", isActive: false },
  ];

  const detailedPages = [
    {
      label: "WHY AUDIT?",
      title: "WHY INSTRUMENTATION SYSTEMS FAIL",
      content: `Process plants and industrial facilities invest significantly in DCS, PLCs, and signal loops. Yet, unexplained trips, nuisance alarms, and intermittent malfunctions recur.

JEF's Instrumentation Earthing Audit identifies the root causes that standard electrical testing misses — such as ground loops and shield termination errors.`,
    },
    {
      label: "AUDIT SCOPE",
      title: "COMPREHENSIVE AUDIT SCOPE",
      content: `Our audit covers:
• Control room and instrumentation panel rooms.
• DCS/PLC panels and I/O modules.
• Junction boxes and field instrument terminations.
• Shielding and grounding of 4–20 mA and digital signals.
• Earth bar isolation and bonding integrity.`,
    },
    {
      label: "VALUE DELIVERED",
      title: "JEF'S VALUE ADD",
      content: `JEF has audited over 120 control rooms and 9,500 panels globally.

Our technical team uses class 'A' power analysers and specialized equipment to ensure your instrumentation systems operate with maximum reliability and minimum noise.`,
    },
  ];

  const whyCards = [
    {
      title: "REDUCES ELECTRICAL NOISE",
      description: "By identifying and eliminating ground loops and shield termination errors that corrupt sensitive signals.",
    },
    {
      title: "PREVENTS FALSE ALARMS",
      description: "By addressing root causes that standard electrical testing does not detect, reducing nuisance trips.",
    },
    {
      title: "IMPROVES RELIABILITY",
      description: "By eliminating intermittent failure modes that recur when earthing problems are left uncorrected.",
    },
    {
      title: "ENHANCES SAFETY",
      description: "By identifying isolated grounding elements and earth bar mix-ups that represent safety hazards.",
    },
    {
      title: "PROCESS STABILITY",
      description: "By restoring signal integrity and eliminating operational disruptions caused by system noise.",
    },
    {
      title: "STANDARD COMPLIANCE",
      description: "Audit reports referenced to IEEE 1050, IEEE 1100, and IEC 61000 standards.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How does instrumentation earthing differ from power earthing?",
      answer: "Power earthing is for safety and fault clearing, while instrumentation earthing is specifically designed to minimize electrical noise and ensure signal integrity.",
    },
    {
      id: 2,
      question: "Can these audits be done on a running plant?",
      answer: "Yes, our audit methodology is non-intrusive and can be performed while the plant is in operation.",
    },
    {
      id: 3,
      question: "What are the typical findings in such audits?",
      answer: "Common findings include multiple ground points on shields, mixed signal/power earths, and high-impedance connections in the reference grid.",
    },
  ];

  return (
    <div className="bg-[#232427]">
      <Hero title="INSTRUMENTATION SYSTEMS" videoSrc="/Audit Services/Instrumentation Earthing - Audit Services.mp4" />
      <ProductIntro 
        navItems={navItems}
        logoSrc="/Instrumentation Study.png"
        title="INSTRUMENTATION SYSTEM AUDIT"
        introText="Instrumentation systems are the brain of a process plant. JEF’s Instrumentation Earthing Audit ensures these systems are free from electrical noise and signal interference, preventing unexplained malfunctions."
        expandedText="We have audited over 9,500 panels and 2,04,963 field instruments across diverse industries, providing actionable insights to enhance process stability and reliability."
      />
      <DetailedContent pages={detailedPages} />
      <WhyAudit 
        title="WHY US FOR INSTRUMENTATION EARTHING AUDIT?" 
        description="With experience auditing thousands of panels and field assets, JEF provides unmatched expertise in ensuring the integrity of your instrumentation and control systems."
        cards={whyCards} 
      />
      <AreaOfExpertise />
      <FAQ faqData={faqData} />
      <DownloadSection />
    </div>
  );
};

export default InstrumentationSystemAudit;
