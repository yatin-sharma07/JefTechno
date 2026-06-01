"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex overflow-hidden h-screen flex-col bg-[#232427] relative">
      <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="./SerivePage/CLPS products.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute top-[60%] md:top-[75%] inset-x-0 z-10 flex justify-center">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col gap-[16px] text-white"
            >
              {/* Heading */}
              <h1 className="font-montserrat font-lg text-[24px] md:text-[40px] leading-[1.2] md:leading-[100%] tracking-[0.5px] uppercase mb-4">
                COMPREHENSIVE LIGHTNING PROTECTION SOLUTIONS
              </h1>

              {/* Body */}
              <p className="font-montserrat font-normal text-[16px] md:text-[19px] leading-[1.5]">
                From risk assessment and system design to type-tested components
                and surge protection — JEF delivers comprehensive lightning
                protection for industrial, commercial, and infrastructure
                facilities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
