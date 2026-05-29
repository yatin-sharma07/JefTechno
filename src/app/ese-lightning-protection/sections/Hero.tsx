"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
            src="./ESE/ESE.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute top-[70%] md:top-[65%] lg:top-[70%] xl:top-[75%] inset-x-0 z-10 flex justify-start w-full">
          <div className="w-full md:ml-10 lg:ml-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col gap-[16px] text-white lg:mb-20"
            >
              {/* Heading */}
              <h1 className="font-montserrat font-lg text-[40px] md:text-[40px] leading-[1.2] md:leading-[100%] tracking-[0.5px] uppercase mb-4 sm:font-bold">
                ESE 
              </h1>

              {/* Body */}
              <div className=" mt-2  mx-auto w-full">
               <p className="font-md sm:text-[12px] md:text-[18px] lg:text-[22px]">Preventing Plant Shutdowns and Revenue Loss from Lightning strikes, deploy scientifically validated protection <br /> designed specifically for high-risk, open-area solar installations.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
