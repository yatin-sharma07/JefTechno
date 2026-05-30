"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdditionalSpecialistStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sectors = [
    {
      name: "EMI / EMC STUDY",
      description:
        "EMC management plan, desktop survey, zone allocation, remedial measures, includes subsea cable interference to pipelines and cathodic protection systems. EMC compliance certificates issued on completion.",
    },
    {
      name: "EARTHING SYSTEM DESIGN",
      description:
        "Substation earthing grid design, step and touch potential analysis, personnel safety verification.",
    },
    {
      name: "LIGHTNING PROTECTION DESIGN",
      description:
        "Risk assessment and protection system design for process plants, substations, and offshore platforms.",
    },
    {
      name: "CABLE SIZING STUDY",
      description:
        "Thermal rating and sizing of HV cables including 132kV and 33kV submarine cables.",
    },
    {
      name: "REACTOR SIZING STUDY",
      description:
        "Shunt reactor specification and sizing for reactive compensation on long cable systems.",
    },
    {
      name: "SURGE ARRESTOR STUDY",
      description:
        "Selection and placement of surge protective devices across all voltage levels.",
    },
    {
      name: "OLTC / AVR DYNAMIC STUDY",
      description:
        "Dynamic modelling of tap changer and AVR behaviour, including stability control interaction.",
    },
    {
      name: "SUBSEA CABLE EM INTERFERENCE",
      description:
        "EM fields from subsea cables and interaction with adjacent pipe lines, structures, and control systems.",
    },
    {
      name: "PSS/E NETWORK MODELLING",
      description:
        "Grid-scale modelling for dynamic stability and HVDC converter studies.",
    },
  ];

  const maxIndex = sectors.length - 1;

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === maxIndex;

  return (
    <section
      className="relative flex w-full flex-col justify-center overflow-hidden py-16 text-white md:py-20"
      style={{
        minHeight: "620px",
        backgroundImage: "url(/AboutUs/Area_of_Expertise.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-[#1a1a1a]/75" />

      <div className="section-container relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[950px]"
          >
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="mb-6 text-[22px] font-bold uppercase tracking-[3px] text-[#C02429] md:text-[32px] md:tracking-[4.53px]"
            >
              {activeIndex <= 3
                ? "ADDITIONAL SPECIALIST STUDIES"
                : "AREAS OF EXPERTISE"}
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex gap-4 lg:mt-2"
          >
            <button
              onClick={prev}
              disabled={atStart}
              className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 md:h-12 md:w-12"
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
              className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 md:h-12 md:w-12"
              style={{
                opacity: atEnd ? 0.4 : 1,
                background: atEnd ? "transparent" : "#ffffff",
                border: "1px solid white",
                color: atEnd ? "#ffffff" : "#000000",
              }}
            >
              →
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-10 w-full overflow-hidden md:mt-14"
        >
          <div className="absolute left-[-50vw] right-[-50vw] top-[39px] z-0 h-[1px] bg-white/30" />

          <div
            className="relative z-10 flex gap-[20px] transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                activeIndex * (isMobile ? 290 : 366)
              }px)`,
            }}
          >
            {sectors.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  onClick={() => setActiveIndex(index)}
                  className="group flex w-[270px] shrink-0 cursor-pointer flex-col md:w-[346px]"
                >
                  <div className="mb-[8px] flex h-[30px] items-end">
                    <span
                      className={`uppercase tracking-[0.1em] text-[10px] transition-colors duration-300 md:text-[11px] ${
                        isActive
                          ? "font-bold text-white"
                          : "font-normal text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  <div className="relative flex h-[2px] w-full items-center">
                    {isActive ? (
                      <div className="absolute left-0 z-10 h-[14px] w-[14px] rounded-full bg-[#C02429]" />
                    ) : (
                      <div className="absolute left-0 z-10 h-2.5 w-2.5 rounded-full bg-white" />
                    )}
                  </div>

                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "#F9F7F2"
                        : "rgba(27, 24, 24, 0.85)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="mt-[28px] min-h-[210px] p-6 transition-all duration-500 ease-in-out md:mt-[32px] md:h-[260px] md:p-8"
                  >
                    <motion.p
                      animate={{
                        color: isActive ? "#312d2d" : "#e5e7eb",
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-[13px] leading-[180%] md:text-[14px]"
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}