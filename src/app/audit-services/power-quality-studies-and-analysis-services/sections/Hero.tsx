"use client";

import { motion } from "framer-motion";

const Hero = ({
  title = "POWER QUALITY STUDIES AND ANALYSIS SERVICES",
  videoSrc,
}) => {
  return (
    <section className="relative h-[75vh] sm:h-[85vh] lg:h-screen overflow-hidden bg-[#232427] font-montserrat">
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full items-end pb-14 sm:pb-20 lg:pb-28">
        <div className="section-container w-full px-5 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-[1500px] text-white"
          >
            <h1 className="mb-4 text-[23px] sm:text-[25px] md:text-[30px] lg:text-[36px] font-bold uppercase leading-[1.15] tracking-[1px]">
              {title}
            </h1>

            <p className="max-w-[1500px] text-[13px] sm:text-[15px] md:text-[17px] lg:text-[22px] leading-[1.7] text-white/90">
              Stop random equipment trips and sudden breakdowns. Identify hidden
              power issues early to protect your machinery, reduce downtime, and
              cut operational costs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;