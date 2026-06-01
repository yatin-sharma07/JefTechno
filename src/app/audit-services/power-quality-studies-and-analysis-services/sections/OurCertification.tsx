"use client";

import { motion } from "framer-motion";

const standards = [
  "IEEE 1159 and IEEE 1100 standards for monitoring and mitigating power quality issues",
  "IEC 61000 series for electromagnetic compatibility and power quality",
];

export default function OurCertification() {
  return (
    <section className="w-full bg-[#232427] py-14 md:py-20 font-montserrat overflow-hidden">
      <div className="section-container px-5 md:px-0">
        <motion.h2
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 text-[#C02429] text-[22px] sm:text-[26px] md:text-[32px] font-bold uppercase tracking-[3px] md:tracking-[4px] leading-[1.35]"
        >
          Our Certifications and Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 max-w-[1250px] text-white text-[13px] sm:text-[15px] md:text-[20px] leading-[1.7]"
        >
          JEF is committed to excellence and quality. Our team is certified and
          trained in the latest standards and practices, including:
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex max-w-[950px] flex-col gap-5"
        >
          {standards.map((item) => (
            <motion.span
              key={item}
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="w-fit max-w-full rounded-full bg-white px-5 sm:px-7 md:px-10 py-3 text-[12px] sm:text-[14px] md:text-[20px] text-[#232427] leading-[1.5]"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}