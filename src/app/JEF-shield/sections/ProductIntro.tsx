"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", isActive: true },
  { label: "OUR BUSINESS", isActive: true },
  { label: "OUR PRODUCTS", isActive: true },
  { label: "ESE", isActive: false },
];

export default function ProductIntro() {
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
          src="/nav-jef-shield.png"
          alt="ESE Logo"
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
          JEF SHIELD AND JEF E-BUILD - DESIGN AND INSTALLATION <br />TOOLS
          
        </motion.h1>

       

       
      </header>
    </section>
  );
}
