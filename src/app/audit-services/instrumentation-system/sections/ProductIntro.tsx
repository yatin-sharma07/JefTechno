"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductIntro({ navItems, logoSrc, title, introText, expandedText }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex flex-col bg-[#232427] overflow-hidden -mb-11 md:mb-0">
      <nav className="bg-[#2D2E30] flex py-4 md:py-6 w-full">
        <div className="section-container flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
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

      <header className="section-container flex flex-col items-center text-center gap-8 mt-12 md:mt-20 pb-20">
        <motion.img
          src={logoSrc}
          alt="Logo"
          className="w-[60px] md:w-[80px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.h1
          className="text-[#C02429] font-bold text-[28px] md:text-[36px] tracking-[2px] uppercase font-montserrat"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>

        <div className="flex flex-col gap-6 max-w-[1700px]">
          <div className="w-full bg-[#232427] py-5 px-6 md:px-6">
            <div className="w-full mx-auto flex flex-col gap-12 text-center">
              <p className="text-white/90 font-montserrat font-light text-[18px] md:text-[20px] leading-[1.7] tracking-[0.2px] w-full mx-auto">
                {introText}
              </p>
            </div>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -12 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -12 }}
                transition={{ duration: 0.55 }}
                className="overflow-hidden flex flex-col gap-6"
              >
                <div className="w-full bg-[#232427] px-6">
                  <div className="max-w-[1500px] mx-auto">
                    <p className="text-center text-white/90 font-montserrat font-light text-[18px] md:text-[20px] leading-[1.7] tracking-[0.2px] max-w-[1500px] mx-auto">
                      {expandedText}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-2 text-white uppercase tracking-[2px] text-sm pb-1 hover:text-[#C02429] transition-all"
        >
          {expanded ? "READ LESS" : "READ MORE"}
        </motion.button>
      </header>
    </section>
  );
}
