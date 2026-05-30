"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import WhyAudit from "./sections/WhyAudit";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import FAQ from "./sections/FAQ";
import DownloadSection from "./sections/DownloadSection";

const PowerQualityStudiesAudit = () => {
  const navItems = [
    { label: "HOME", isActive: true },
    { label: "OUR BUSINESS", isActive: true },
    { label: "AUDIT SERVICES", isActive: true },
    { label: "POWER QUALITY STUDIES", isActive: false },
  ];

  const detailedPages = [
    {
      label: "WHY STUDY?",
      title: "IMPORTANCE OF POWER QUALITY STUDIES",
      content: `In today's highly automated industrial environment, power quality issues can lead to expensive downtime, equipment damage, and production losses.

JEF specializes in identifying and mitigating issues like harmonics, voltage sags, swells, and transients to ensure your systems operate at peak efficiency.`,
    },
    {
      label: "MEASUREMENT",
      title: "COMPREHENSIVE MEASUREMENT & ANALYSIS",
      content: `We use class 'A' power analysers to capture high-resolution data over extended periods. Our analysis includes:
• Harmonic distortion (THDv and THDi).
• Voltage unbalance and frequency variations.
• Inrush current and motor starting analysis.
• Power factor and reactive power management.`,
    },
    {
      label: "VALUE ADD",
      title: "JEF'S VALUE ADD",
      content: `With highly trained engineers and a fleet of advanced instruments, JEF caters to clients across India, GCC, and North Africa.

Our reports provide not just data, but actionable engineering recommendations to resolve identified power quality problems.`,
    },
  ];

  const whyCards = [
    {
      title: "VOLTAGE QUALITY",
      description: "Assessing sags, swells, unbalance, and harmonics in the voltage supply to protect sensitive electronics.",
    },
    {
      title: "CURRENT QUALITY",
      description: "Analyzing current distortions and their impact on equipment like transformers and motors.",
    },
    {
      title: "FREQUENCY STABILITY",
      description: "Ensuring the system frequency remains stable and within acceptable limits for continuous operation.",
    },
    {
      title: "TRANSIENT ANALYSIS",
      description: "Identifying and mitigating short-duration high-energy disturbances that cause immediate equipment failure.",
    },
    {
      title: "HARMONIC MITIGATION",
      description: "Designing and implementing solutions to reduce harmonic levels and comply with IEEE 519 standards.",
    },
    {
      title: "OPERATIONAL EFFICIENCY",
      description: "Improving power factor and reducing losses to lower energy costs and extend asset life.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What are the common signs of poor power quality?",
      answer: "Common signs include frequent equipment failure, flickering lights, overheating of motors/transformers, and unexplained tripping of breakers.",
    },
    {
      id: 2,
      question: "How long does a power quality study take?",
      answer: "A typical study involves monitoring for 24 hours to 7 days, depending on the load profile and specific issues being investigated.",
    },
    {
      id: 3,
      question: "What standards do you follow for power quality?",
      answer: "We primarily follow IEEE 519 for harmonics and IEEE 1159 for general power quality monitoring and analysis.",
    },
  ];

  return (
    <div className="bg-[#232427]">
      <Hero title="POWER QUALITY STUDIES" videoSrc="/Audit Services/Power Quality Testing - Audit Services.mp4" />
      <ProductIntro 
        navItems={navItems}
        logoSrc="/Audit Services/lpsaa.png"
        title="POWER QUALITY STUDIES"
        introText="Power quality issues are often invisible but can be devastating to industrial operations. JEF’s Power Quality Studies use state-of-the-art monitoring tools to identify disturbances and provide solutions that ensure reliable performance."
        expandedText="Our expert team analyzes complex electrical data to resolve issues like harmonics and voltage fluctuations, helping you reduce downtime and improve the lifespan of your critical electrical assets."
      />
      <DetailedContent pages={detailedPages} />
      <WhyAudit 
        title="WHY US FOR POWER QUALITY STUDIES?" 
        description="JEF possesses one of the largest fleets of class 'A' power analysers and a global team of power quality experts to handle the most challenging electrical environments."
        cards={whyCards} 
      />
      <AreaOfExpertise />
      <FAQ faqData={faqData} />
      <DownloadSection />
    </div>
  );
};

export default PowerQualityStudiesAudit;
