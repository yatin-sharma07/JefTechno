"use client";

import { motion } from "framer-motion";

const items = [
  "Fire Prevention",
  "Life Safety",
  "Active Fire Protection",
  "Passive Fire Protection",
  "Mock Drill Review",
];

export default function GeneralFireSafety() {
  return (
    <section className="bg-[#232427] py-16 md:py-20">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#C02429] text-[24px] md:text-[32px] uppercase font-bold tracking-[4px] mb-8"
        >
          GENERAL FIRE SAFETY
        </motion.h2>

        <p className="text-white text-[16px] md:text-[18px] leading-[1.8] max-w-[1200px] mb-10">
          A fire audit that examines the complete system as an integrated whole —
          not just extinguisher counts and detector placement.
        </p>

        <p className="text-white mb-6">
          What JEF Techno Covers:
        </p>

        <div className="flex flex-wrap gap-4">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-6 py-3 text-[#232427] text-sm md:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}