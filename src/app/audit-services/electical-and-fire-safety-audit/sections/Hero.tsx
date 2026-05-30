"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({ title, videoSrc }) => {
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
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="absolute top-[70%] md:top-[65%] lg:top-[70%] xl:top-[75%] inset-x-0 z-10 flex justify-center">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col gap-[16px] text-white px-6 md:px-0"
            >
              <h1 className="font-montserrat font-lg text-[40px] md:text-[40px] leading-[1.2] md:leading-[100%] tracking-[0.5px] uppercase mb-4 sm:font-bold">
                {title}
              </h1>

              <div className="flex gap-6 items-center self-start mt-4">
                <Link href={'/get-in-touch'}>
                  <button className="uppercase px-6 md:px-10 py-2 md:py-3 bg-white border border-solid border-zinc-900 border-opacity-10 text-black text-[14px] md:text-[16px] font-medium hover:bg-red-700 hover:text-white transition-all rounded-[50px]">
                    Get in touch
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
