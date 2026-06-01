"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultNavItems = [
  { label: "Home" },
  { label: "Our Business" },
  { label: "Audit Services" },
  { label: "Power Quality Studies and Analysis Services", isActive: true },
];

export default function ProductIntro({
  navItems = defaultNavItems,
  logoSrc = "/nav-lps.png",
}) {
  const [expanded, setExpanded] = useState(false);

  const introText =
    "At JEF, we specialize in providing top-notch Power Quality Studies to ensure your electrical systems operate efficiently and reliably. With years of experience and a team of experts, we help you identify and mitigate power quality issues that can affect your operations.";

  const expandedText =
    "JEF has a large number of class ‘A’ power analysers and highly trained engineers & technicians to carry out complete power quality measurements for various applications including Renewable Energy, Industries, Airports, Data Centre etc.\n\nWith a large team of qualified engineers around the globe, we cater to the requirements of clients in the entire India, GCC & North Africa areas.";

  return (
    <section className="bg-[#232427] font-montserrat text-white overflow-hidden">
      <nav className="bg-[#2D2E30] py-4 md:py-5">
        <div className="section-container flex items-center gap-2 overflow-x-auto whitespace-nowrap px-5 md:px-0 no-scrollbar">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={`text-[6px] md:text-[11px] uppercase tracking-[1px] ${
                  item.isActive ? "text-[#C02429]" : "text-neutral-300"
                }`}
              >
                {item.label}
              </span>

              {index !== navItems.length - 1 && (
                <span className="text-neutral-500">›</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      <header className="section-container flex flex-col items-center px-5 py-16 text-center md:px-0 md:py-24">
        <motion.img
          src={logoSrc}
          alt="Power Quality Studies"
          className="mb-8 w-[52px] lg:h-[80px] md:w-[80px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.h1
          className="mb-8 text-[#C02429] text-[22px] sm:text-[28px] md:text-[34px] font-bold uppercase tracking-[5px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          POWER QUALITY STUDIES AND
          <br />
          ANALYSIS SERVICES
        </motion.h1>

        <p className="mx-auto max-w-[1450px] text-[13px] sm:text-[15px] md:text-[20px] leading-[1.75] text-white/90 whitespace-pre-line">
          {introText}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="mx-auto mt-16 max-w-[1450px] text-[13px] sm:text-[15px] md:text-[20px] leading-[1.75] text-white/90 whitespace-pre-line">
                {expandedText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 text-[11px] md:text-[13px] uppercase tracking-[2px] text-white transition-all hover:text-[#C02429]"
        >
          {expanded ? "READ LESS" : "READ MORE"}
        </motion.button>
      </header>
    </section>
  );
}