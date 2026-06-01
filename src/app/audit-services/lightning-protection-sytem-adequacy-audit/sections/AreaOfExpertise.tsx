"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AreaOfExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sectors = [
    {
      name: "SITE SURVEY",
      description:
        "Site Survey, data collection and measurements from qualified and experienced Engineers.",
    },
    {
      name: "LIGHTNING RISK ASSESSMENT",
      description:
        "Lightning Risk Assessment, study of existing LPS & Earthing system, inspection of air terminations & down conductors and checking the internal LPS.",
    },
    {
      name: "COST OPTIMAL SOLUTION",
      description: "Providing cost optimal solution.",
    },
    {
      name: "MINIMIZE LIGHTNING RISK",
      description: "Minimize lightning risk to your assets and personnel.",
    },
    {
      name: "RECOMMENDATIONS",
      description:
        "Recommendations by experts based on detailed site survey and in compliance with latest Indian and International Standards.",
    },
  ];

  const maxIndex = sectors.length - 1;
  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === maxIndex;

  return (
    <section
      className="relative w-full overflow-hidden text-white flex flex-col justify-center py-16 md:py-20"
      style={{
        minHeight: "920px",
        backgroundImage: "url(/AboutUs/Area_of_Expertise.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-[#1a1a1a]/75" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#C02429] uppercase mb-6 text-[26px] md:text-[32px] tracking-[3px] md:tracking-[4.53px] font-bold"
          >
            JEF VALUE ADDS
          </motion.h1>

          <div className="flex gap-4 lg:mt-2">
            <button
              onClick={prev}
              disabled={atStart}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                opacity: atStart ? 0.4 : 1,
                background: atStart ? "#ffffff" : "transparent",
                border: "1px solid white",
                color: atStart ? "#000000" : "#ffffff",
              }}
            >
              ←
            </button>

            <button
              onClick={next}
              disabled={atEnd}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                opacity: atEnd ? 0.4 : 1,
                background: atEnd ? "transparent" : "#ffffff",
                border: "1px solid white",
                color: atEnd ? "#ffffff" : "#000000",
              }}
            >
              →
            </button>
          </div>
        </div>

        <div className="relative w-full mt-14 md:mt-20 overflow-hidden">
          <div className="absolute top-[39px] left-[-50vw] right-[-50vw] h-[1px] bg-white/30 z-0" />

          <div
            className="relative flex gap-[20px] transition-transform duration-700 ease-in-out z-10"
            style={{
              transform: `translateX(-${activeIndex * (isMobile ? 290 : 366)}px)`,
            }}
          >
            {sectors.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  className="flex flex-col w-[270px] md:w-[346px] shrink-0 cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="h-[30px] flex items-end mb-[8px]">
                    <span className="uppercase tracking-[0.1em] text-[10px] md:text-[11px] text-gray-400">
                      {item.name}
                    </span>
                  </div>

                  <div className="relative w-full h-[2px] flex items-center">
                    <div
                      className={`absolute left-0 rounded-full z-10 ${
                        isActive
                          ? "w-[14px] h-[14px] bg-[#C02429]"
                          : "w-2.5 h-2.5 bg-white"
                      }`}
                    />
                  </div>

                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "#F9F7F2"
                        : "rgba(27, 24, 24, 0.85)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="mt-[28px] md:mt-[32px] p-6 md:p-8 min-h-[260px] md:h-[370px]"
                  >
                    <motion.p
                      animate={{ color: isActive ? "#312d2d" : "#e5e7eb" }}
                      transition={{ duration: 0.5 }}
                      className="text-[14px] md:text-[15px] leading-[180%]"
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}