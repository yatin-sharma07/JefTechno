"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const downloads = [
  {
    id: 1,
    image: "/AboutUs/Download.png",
    title: "POWER QUALITY STUDIES GUIDE",
    date: "December 11, 2025",
    href: "#",
  },
  {
    id: 2,
    image: "/AboutUs/Download.png",
    title: "POWER QUALITY ANALYSIS GUIDE",
    date: "December 11, 2025",
    href: "#",
  },
];

export default function DownloadSection() {
  return (
    <section className="w-full bg-[#232427] py-16 md:py-24 overflow-hidden">
      <div className="section-container">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-[1250px]">
          {downloads.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    max-w-[554px]
                    h-[220px]
                    md:h-[300px]
                    object-cover
                  "
                />
              </motion.div>

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
                    mb-3
                  "
                >
                  {item.title}
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
                  {item.date}
                </motion.p>

                <motion.a
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  href={item.href}
                  className="
                    inline-flex
                    items-center
                    gap-8
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
          ))}
        </div>
      </div>
    </section>
  );
}