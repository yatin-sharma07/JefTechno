"use client";

import { motion } from "framer-motion";

const standards = [
  "IEC 62305-1:2024",
  "IEC 62305-2:2024",
  "IEC 62305-3:2024",
  "IEC 62305-4:2024",
  "IEC 62561 series",
  "IEC 61643-11",
  "IS/IEC 62305",
  "NBC 2016",
  "IS 3043",
];

export default function ReferenceStandards() {
  return (
    <section className="w-full bg-[#232427] py-14 md:py-20 font-montserrat">
      <div className="section-container px-5 md:px-0">
        <motion.h2
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-[#C02429] text-[22px] md:text-[32px] font-bold uppercase tracking-[4px]"
        >
          Reference Standards
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex max-w-[900px] flex-wrap gap-x-4 gap-y-9"
        >
          {standards.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-7 py-3 text-[13px] md:text-[15px] text-[#232427] leading-none"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}