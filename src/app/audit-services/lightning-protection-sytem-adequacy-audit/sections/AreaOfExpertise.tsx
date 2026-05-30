"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AreaOfExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sectors = [
    {
      name: "DATA CENTERS",
      description:
        "Earthing health assessment, surge protection, EMC management, and power quality studies for critical IT infrastructure.",
    },
    {
      name: "OIL & GAS",
      description:
        "Offshore platforms, artificial islands, subsea cable systems, onshore processing facilities, and EPC/EPCC project support across the full power systems study programme.",
    },
    {
      name: "RENEWABLE ENERGY",
      description:
        "Earthing audits compliant with CEA Regulations 2023, LPS for solar and wind installations, and power system studies.",
    },
    {
      name: "MANUFACTURING PLANT",
      description:
        "Full range of services across automobile, steel, heavy industry, metro rail, hospitals, commercial buildings.",
    },
    {
      name: "POWER UTILITIES",
      description:
        "EHV and HV substation earthing, earth grid simulation, LPS design, and power system studies.",
    },
    {
      name: "PROCESS PLANT",
      description:
        "Petrochemicals, chemicals, pharmaceuticals, fertilisers, food and beverages.",
    },
  ];

  const maxIndex = sectors.length - 1;

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));

  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === maxIndex;

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        text-white
        flex
        flex-col
        justify-center
        py-16
        md:py-20
      "
      style={{
        minHeight: "920px",
        backgroundImage: "url(/AboutUs/Area_of_Expertise.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#1a1a1a]/75" />

      <div className="section-container relative z-10">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <h2 className="text-[#C02429] text-[28px] md:text-[36px] font-bold tracking-[2px] leading-[1.2] uppercase">
              Area of Expertise
            </h2>
            <div className="w-16 h-1 bg-[#C02429]" />
            <p className="max-w-[600px] text-[16px] md:text-[18px] leading-[1.6] text-white/80">
              JEF provides specialized engineering services across diverse industrial sectors, ensuring safety, reliability, and compliance with international standards.
            </p>
          </motion.div>

          {/* RIGHT CONTENT - NAVIGATION (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 mt-4">
            {sectors.map((sector, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left text-[14px] font-bold tracking-[1px] uppercase transition-all duration-300 ${
                  activeIndex === index ? "text-[#C02429]" : "text-white/40 hover:text-white"
                }`}
              >
                {sector.name}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN SLIDER SECTION */}
        <div className="mt-16 md:mt-24 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[24px] md:text-[32px] font-bold text-white uppercase tracking-[1px]">
                {sectors[activeIndex].name}
              </h3>
              <p className="max-w-[800px] text-[18px] md:text-[22px] leading-[1.6] text-white/90">
                {sectors[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex items-center gap-8 mt-12 md:mt-16">
            <button
              onClick={prev}
              disabled={atStart}
              className={`p-3 border border-white/20 rounded-full transition-all duration-300 ${
                atStart ? "opacity-20 cursor-not-allowed" : "hover:bg-[#C02429] hover:border-[#C02429]"
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="flex items-center gap-4">
              <span className="text-[24px] font-bold text-[#C02429]">
                {(activeIndex + 1).toString().padStart(2, '0')}
              </span>
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="text-[18px] text-white/40">
                {sectors.length.toString().padStart(2, '0')}
              </span>
            </div>
            <button
              onClick={next}
              disabled={atEnd}
              className={`p-3 border border-white/20 rounded-full transition-all duration-300 ${
                atEnd ? "opacity-20 cursor-not-allowed" : "hover:bg-[#C02429] hover:border-[#C02429]"
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
