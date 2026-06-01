"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", isActive: true },
  { label: "OUR BUSINESS", isActive: true },
  { label: "OUR SERVICES", isActive: true },
  { label: "ESE LIGHTNING PROTECTION", isActive: false },
];

export default function ProductIntro() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex flex-col bg-[#232427] overflow-hidden">
      <nav className="bg-[#2D2E30] flex py-3 md:py-5 w-full">
        <div className="section-container flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar px-4 md:px-0">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={`text-[10px] sm:text-[11px] md:text-xs tracking-[1.2px] uppercase flex-shrink-0 ${
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

      <header className="section-container flex flex-col items-center text-center gap-6 md:gap-8 mt-10 md:mt-16 pb-14 md:pb-20 px-4 md:px-0">
        <motion.img
          src="./nav-ese-lightning-protection.png"
          alt="Nimbus Logo"
          className="w-[52px] md:w-[70px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.h1
          className="text-[#C02429] font-bold text-[20px] sm:text-[24px] md:text-[32px] tracking-[1.5px] md:tracking-[2px] uppercase font-montserrat leading-[1.35]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          EXTERNAL LIGHTNING PROTECTION - NIMBUS®
        </motion.h1>

        <div className="flex flex-col gap-5 md:gap-6 max-w-[1500px]">
          <p className="text-white/90 font-montserrat font-light text-[14px] sm:text-[16px] md:text-[20px] leading-[1.7] tracking-[0.2px]">
            Capture system - Air terminal
          </p>

          <p className="text-white/90 font-montserrat font-light text-[14px] sm:text-[16px] md:text-[20px] leading-[1.7] tracking-[0.2px]">
            NIMBUS - Lightning rod with streaming device (ESE).
          </p>

          <p className="text-white/90 font-montserrat font-light text-[14px] sm:text-[16px] md:text-[20px] leading-[1.7] tracking-[0.2px] max-w-[1350px] mx-auto">
            Nimbus® is the series of new generation lightning rods with
            electronic early streaming emission (ESE). Radius of protection up
            to 100 m based on emission times of 15 μs, 30 μs, 45 μs and 60 μs.
          </p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -12 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -12 }}
                transition={{ duration: 0.55 }}
                className="overflow-hidden"
              >
                <div className="mt-8 text-left max-w-[1400px] mx-auto">
                  <h2 className="text-[#C02429] font-montserrat text-[18px] md:text-[22px] font-medium mb-6">
                    Features
                  </h2>

                  <ul className="flex flex-col gap-5 text-white/90 font-montserrat font-light text-[14px] sm:text-[16px] md:text-[19px] leading-[1.7]">
                    <li>
                      • Tested with lightning currents up to 200 kA (10/350 μs)
                    </li>
                    <li>
                      • Highest quality: AISI 316 stainless steel and
                      non-expendable components.
                    </li>
                    <li>
                      • Tested and certified by independent laboratories.
                    </li>
                    <li>• Extended 10 year warranty.</li>
                    <li>
                      • Nimbus®, which protect more than 45,000 installations
                      worldwide, a fact that bears witness to its performance,
                      quality and warranty and our service.
                    </li>
                    <li>
                      • The nimbus® lightning rods exceed the requirements of the
                      new version of standard NFC 17-102 v2011, with the goal of
                      making them more robust, without sacrificing their compact
                      size and with a significant weight reduction.
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
}