"use client";

import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "HOME", isActive: true },
  { label: "OUR BUSINESS", isActive: true },
  { label: "CONSULTING SERVICES", isActive: true },
  { label: "ROOT CAUSE ANALYSIS", isActive: false },
];

export default function ProductIntro() {
  return (
    <section className="flex flex-col bg-[#232427] overflow-hidden">
      <nav className="bg-[#2D2E30] flex py-4 md:py-6 w-full">
        <div className="section-container flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap px-4 md:px-0">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={`text-[8px] md:text-xs tracking-[1.2px] uppercase flex-shrink-0 ${
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

      <header className="section-container flex flex-col items-center text-center gap-6 mt-10 md:mt-14 pb-12 md:pb-16 px-4 md:px-0">
        <motion.img
          src="/nav-industrial.png"
          alt="Root Cause Analysis Logo"
          className="w-[48px] md:w-[64px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.h1
          className="text-[#C02429] font-bold text-[22px] md:text-[32px] tracking-[4px] uppercase font-montserrat leading-[1.2]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ROOT CAUSE ANALYSIS
        </motion.h1>

        <motion.p
          className="max-w-[1300px] text-white/90 font-montserrat font-light text-[13px] md:text-[17px] leading-[1.7] tracking-[0.2px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Understanding and addressing the root causes of electrical system
          failures is essential for maintaining operational efficiency <br /> and
          safety. JEF offers comprehensive Root Cause Analysis (RCA) services to
          identify underlying issues, prevent recurring <br /> problems, and optimize
          system performance across industries.
        </motion.p>
      </header>
    </section>
  );
}