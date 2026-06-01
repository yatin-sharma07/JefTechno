"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultNavItems = [
  { label: "Home" },
  { label: "Our Business" },
  { label: "Audit Services" },
  { label: "Instrumentation Systems", isActive: true },
];

export default function ProductIntro({
  navItems = defaultNavItems,
  logoSrc = "/nav-ie.png",
 
}) {
  const [expanded, setExpanded] = useState(false);

  const introText =
    "Process plants and industrial facilities invest significantly in their instrumentation and control infrastructure — DCS systems, PLCs, 4–20 mA signal loops, Foundation Field Bus, HART protocols, transmitters, junction boxes, and field instruments. These systems are carefully designed, commissioned, and regularly maintained.\n\nYet across industries and geographies, the familiar pattern of problems recurs: unexplained trips, nuisance alarms, signal drifts, communication failures, and intermittent malfunctions that are not only difficult to diagnose but more challenging to eliminate.";

  const expandedText =
    "JEF has conducted Instrumentation Earthing Audits across more than 120 control rooms and instrumentation panel rooms, auditing over 9,500 panels, 32,053 junction boxes, and 2,04,963 field instruments and field assets.";

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
          alt="Instrumentation Systems"
          className="mb-8 w-[52px] lg:h-[80px] md:w-[80px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.h1
          className="mb-8 text-[#C02429] text-[22px] sm:text-[28px] md:text-[34px] font-bold uppercase tracking-[5px] whitespace-pre-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          WHY INSTRUMENTATION SYSTEMS
      <br />
      FAIL IN WELL-MAINTAINED PLANTS
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
              <p className="mx-auto mt-16 max-w-[1450px] text-[13px] sm:text-[15px] md:text-[20px] leading-[1.75] text-white/90">
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