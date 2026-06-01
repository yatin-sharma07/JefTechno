"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductIntro = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { label: "HOME", isActive: true },
    { label: "OUR BUSINESS", isActive: true },
    { label: "OUR SERVICES", isActive: true },
    { label: "POWER SYSTEM STUDIES", isActive: false },
  ];

  return (
    <section className="flex flex-col bg-[#232427] overflow-hidden">
      {/* Breadcrumb */}
      <nav className="bg-[#2D2E30] flex py-4 md:py-6 w-full">
        <div className="section-container flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar px-4 md:px-0">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={`text-[10px] md:text-xs tracking-[1.2px] uppercase flex-shrink-0 ${
                  item.isActive ? "text-[#C02429]" : "text-neutral-300"
                }`}
              >
                {item.label}
              </span>

              {index !== navItems.length - 1 && (
                <span className="text-neutral-500 flex-shrink-0">›</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <header className="section-container flex flex-col items-center text-center gap-8 mt-12 md:mt-20 pb-16 md:pb-24 px-4 md:px-0">
        {/* Logo */}
        <motion.img
          src="/nav-industrial.png"
          alt="Power System Studies"
          className="w-[50px] md:w-[70px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Title */}
        <motion.h1
          className="text-[#C02429] font-bold text-[24px] md:text-[36px] tracking-[2px] uppercase font-montserrat"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          POWER SYSTEM STUDIES
        </motion.h1>

        {/* Intro Text */}
        <div className="w-full max-w-[1700px]">
          <p className="text-white/90 font-montserrat font-light text-[14px] md:text-[20px] leading-[1.8] tracking-[0.2px] whitespace-pre-line text-center">
            {`The electrical power system is the backbone of every process plant — determining not just whether a facility can operate, but whether the plant can operate safely, reliably, continuously, and within the envelope that protects people and equipment across every condition the system will encounter.

Inadequate power system analysis carries real consequences: protective devices operating out of sequence, undersized circuit breakers, and switching overvoltages exceeding insulation limits. These are recurring outcomes, not theoretical risks.`}
          </p>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden w-full"
            >
              <div className="max-w-[1700px] mx-auto">
                <p className="text-center text-white/90 font-montserrat font-light text-[14px] md:text-[20px] leading-[1.8] tracking-[0.2px] whitespace-pre-line">
                  {`JEF offers a genuinely rare combination of deep technical expertise across the full spectrum of power system studies — from load flow, short circuit, and protection coordination to arc flash, electromagnetic transient, and insulation coordination analyses. This is supported by independent, multi-software capability spanning ETAP, PSCAD/EMTDC, PSS®E, DIgSILENT, SKM, and DSA Tools, and a proven track record across process and oil & gas industries.

We don't offer a study service — we offer specialist engineering capability.`}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-2 text-white uppercase tracking-[2px] text-xs md:text-sm pb-1 hover:text-[#C02429] transition-all"
        >
          {expanded ? "READ LESS" : "READ MORE"}
        </motion.button>
      </header>
    </section>
  );
};

export default ProductIntro;