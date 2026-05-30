"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] overflow-hidden bg-[#232427]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="./SerivePage/CLPS products.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-[100svh] w-full items-end">
        <div className="section-container w-full pb-10 sm:pb-12 md:pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex max-w-[1200px] flex-col gap-3 px-5 text-white sm:px-6 md:px-0"
          >
            <h1 className="font-montserrat text-[20px] font-bold uppercase leading-[1.15] tracking-[0.4px] sm:text-[24px] md:text-[36px] md:leading-[1.1] md:mb-6">
              Internal Lightning Protection — Surge Protective Devices
              <br className="hidden md:block" />
              and Lightning Protection Zones
            </h1>

            <p className="max-w-[920px] text-[13px] leading-[1.45] text-white/90 sm:text-[15px] md:text-[20px] md:leading-[1.5]">
              Neutralizing the invisible risk: High-voltage lightning and
              internal switching transients safeguard sensitive electronic
              components and extend equipment service life from relentless,
              repetitive surge events.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;