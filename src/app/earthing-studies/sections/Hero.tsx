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
        <source
          src="./AboutUs/JEF About us.mp4"
          type="video/mp4"
        />
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
            className="flex max-w-[980px] flex-col gap-3 px-5 text-white sm:px-6 md:px-0"
          >
            <h1 className="font-montserrat text-[22px] font-bold uppercase leading-[1.15] tracking-[0.4px] sm:text-[26px] md:text-[36px] md:leading-[1.1]">
              EARTHING &amp; GROUNDING SOLUTIONS
            </h1>

            <p className="max-w-[940px] text-[13px] leading-[1.45] text-white/90 sm:text-[15px] md:text-[20px] md:leading-[1.5]">
              JEF Maintenance-free earthing uses carbon-based backfill with
              electronic conduction, providing stable, moisture-independent
              performance for 15+ years without maintenance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;