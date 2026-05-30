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
          src="./SerivePage/Lightning Protection Banner video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] w-full items-end">
        <div className="section-container w-full pb-10 sm:pb-12 md:pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex max-w-[1100px] flex-col gap-9 px-5 text-white sm:px-6 md:px-0"
          >
            {/* Heading */}
            <h1 className="font-montserrat text-[22px] font-bold leading-[1.15] sm:text-[28px] md:text-[42px] md:leading-[1.1]">
              ESE Lightning Protection
            </h1>

            {/* Subtitle */}
            <p className="max-w-[1000px] text-[13px] leading-[1.45] text-white/90 sm:text-[15px] md:text-[20px] md:leading-[1.5]">
              Early Streamer Emission technology uses the atmospheric gradient
              to generate ionization which can subsequently increase the
              protected volume. These facilities the protection of large area,
              simplifying and reducing material and installation costs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;