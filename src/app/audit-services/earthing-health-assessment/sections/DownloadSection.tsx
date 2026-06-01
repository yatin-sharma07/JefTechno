"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="w-full bg-[#232427] py-16 md:py-24 overflow-hidden">
      <div className="section-container">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-[#C02429]
            uppercase
            font-bold
            tracking-[2px]
            md:tracking-[3px]
            text-[24px]
            md:text-[32px]
            mb-10
          "
        >
          Download
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="
            w-full
          "
        >
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <img
              src="/AboutUs/Download.png"
              alt="Registration Guide"
              className="
                max-w-[554px]
                h-[300px]
                md:h-[369px]
               
                object-cover
              "
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="pt-5"
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                text-white
                uppercase
                text-[18px]
                md:text-[20px]
                tracking-[1px]
                mb-2
              "
            >
              Registration Guide
            </motion.h3>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                text-white/65
                text-sm
                mb-5
              "
            >
              Explore our comprehensive registration guide for detailed insights.
            </motion.p>

            <motion.a
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              href="#"
              className="
                inline-flex
                items-center
                gap-2
                text-white
                text-sm
                font-bold
                tracking-[1px]
                uppercase
                hover:text-[#C02429]
                transition-colors
              "
            >
              SELECT TO DOWNLOAD
              <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
