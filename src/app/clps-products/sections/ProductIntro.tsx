"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", isActive: true },
  { label: "OUR BUSINESS", isActive: true },
  { label: "OUR PRODUCTS", isActive: true },
  { label: "CLPS", isActive: false },
];

export default function ProductIntro() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex flex-col bg-[#232427] overflow-hidden -mb-11 md:mb-0">
      {/* Breadcrumb */}
      <nav className="bg-[#2D2E30] hidden md:flex py-6 px-18 w-full">
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={`text-xs tracking-wide uppercase ${
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

      {/* Content */}
      <header className="flex flex-col items-center text-center gap-8 w-full px-5 md:px-8 max-w-[1400px] mx-auto mt-12 md:mt-20 pb-20">
        {/* Logo */}
        <motion.img
          src="./clps/clpf-logo.png"
          alt="Lightning Logo"
          className="w-[60px] md:w-[80px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Heading */}
        <motion.h1
          className="text-[#C02429] font-bold text-[28px] md:text-[36px] tracking-[2px] uppercase font-montserrat"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          LIGHTNING PROTECTION SOLUTIONS
        </motion.h1>

        {/* Original text */}
        <div className="flex flex-col gap-6 max-w-[1200px]">
          <div className="w-full bg-[#232427] py-5 px-6 md:px-16">
  <div className="max-w-[1280px] mx-auto flex flex-col gap-12 text-center">
    
    <p
      className="
        text-white/90
        font-montserrat
        font-light
        text-[18px]
        md:text-[20px]
        leading-[1.7]
        tracking-[0.2px]
        max-w-[1220px]
        mx-auto
      "
    >
      The energy from lightning strikes rarely stays at the point of impact —
      a single strike can propagate through power cables, data lines, earthing
      networks, and the building fabric, causing failures across a wide area.
    </p>

    <p
      className="
        text-white/90
        font-montserrat
        font-light
        text-[18px]
        md:text-[20px]
        leading-[1.7]
        tracking-[0.2px]
        max-w-[1220px]
        mx-auto
      "
    >
      Effective lightning protection doesn't stop strikes. It directs energy
      along a controlled path to earth, bypassing the structure, its occupants,
      and internal systems — turning a potentially destructive event into a
      managed discharge.
    </p>

  </div>
</div>

          {/* Expandable content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -12 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -12 }}
                transition={{ duration: 0.55 }}
                className="overflow-hidden flex flex-col gap-6"
              >
               <div className="w-full bg-[#232427] px-6  ">
  <div className="max-w-[1280px] mx-auto">
    <p
      className="
        text-center
        text-white/90
        font-montserrat
        font-light
        text-[18px]
        md:text-[20px]
        leading-[1.7]
        tracking-[0.2px]
        max-w-[1240px]
        mx-auto
      "
    >
      JEF offers design, supply, installation, and commissioning of complete
      lightning protection systems compliant with IEC 62305:2024. The CLPS
      range covers every required component: air termination, down conductors,
      earthing, equipotential bonding, and surge protective devices for power,
      signal, instrumentation, data, and telecoms lines — all type-tested to
      IEC 62561, validated upto 200 kA on the 10/350 μs waveform.
    </p>
  </div>
</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Button */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="
            mt-2
            text-white
            uppercase
            tracking-[2px]
            text-sm
           
            pb-1
            hover:text-[#C02429]
            transition-all
          "
        >
          {expanded ? "READ LESS" : "READ MORE"}
        </motion.button>
      </header>
    </section>
  );
}