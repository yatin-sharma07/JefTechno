"use client";

import { motion } from "framer-motion";

const Download = () => {
  return (
    <section className="w-full bg-[#232427] py-16 md:pt-[80px] md:pb-[120px] overflow-hidden">
      <div className="section-container flex flex-col gap-10 md:gap-[61px]">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-montserrat font-bold text-[32px] md:text-[32px] leading-[1.2] md:leading-[55px] uppercase text-[#C02429]"
        >
          Download
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex flex-col gap-6"
        >
          <div className="w-full overflow-hidden">
            <img
              src="/AboutUs/Download.png"
              alt="ESE Lightning Protection Guide"
              className="max-w-[554px] max-h-[369px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-montserrat font-normal text-[20px] md:text-[24px] leading-[1.2] uppercase text-white">
              ESE LIGHTNING PROTECTION GUIDE
            </h3>

            <p className="font-montserrat font-light text-[14px] md:text-[16px] leading-[1.5] text-[#D0D0D0]">
              May 29, 2026
            </p>

            <a
              href="/pdfs/ese-lightning-protection-guide.pdf"
              download
              className="flex items-center gap-6 group w-fit"
            >
              <span className="font-montserrat font-medium text-[14px] uppercase text-white group-hover:text-[#C02429] transition-colors duration-300 tracking-[1.5px]">
                Select To Download
              </span>

              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#C02429] group-hover:border-[#C02429] transition-all duration-300">
                <img
                  src="/clps/download-icon.png"
                  alt="Download"
                  className="w-4 h-4 group-hover:invert transition-all invert"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
