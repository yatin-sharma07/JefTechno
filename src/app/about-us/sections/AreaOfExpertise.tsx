"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ExcellenceinElectricalEngineering() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectors = [
    {
      name: "DATA CENTERS",
      description:
        "Earthing health assessment, surge protection, EMC management, and power quality studies for critical IT infrastructure.",
    },
    {
      name: "OIL & GAS",
      description:
        "Offshore platforms, artificial islands, subsea cable systems, onshore processing facilities, and EPC/EPCC project support across the full power systems study programme.",
    },
    {
      name: "RENEWABLE ENERGY",
      description:
        "Earthing audits compliant with CEA Regulations 2023, LPS for solar and wind installations, and power system studies.",
    },
    {
      name: "MANUFACTURING PLANT",
      description:
        "Full range of services across automobile, steel, heavy industry, metro rail, hospitals, commercial buildings.",
    },
    {
      name: "POWER UTILITIES",
      description:
        "EHV and HV substation earthing, earth grid simulation, LPS design, and power system studies.",
    },
    {
      name: "PROCESS PLANT",
      description:
        "Petrochemicals, chemicals, pharmaceuticals, fertilisers, food and beverages.",
    },
  ];

  const maxIndex = sectors.length - 1;

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));

  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === maxIndex;

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        text-white
        flex
        flex-col
        justify-center

        px-5
        md:px-10
        xl:px-[94px]

        py-16
        md:py-20
      "
      style={{
        minHeight: "920px",
        backgroundImage: "url(/AboutUs/Area_of_Expertise.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#1a1a1a]/75" />

      <div className="relative z-10 w-full max-w-[1540px] mx-auto">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[950px]"
          >
            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                text-[#C02429]
                uppercase
                mb-6

                text-[26px]
                md:text-[32px]

                tracking-[3px]
                md:tracking-[4.53px]

                font-bold
              "
            >
              AREAS OF EXPERTISE
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                text-gray-300

                text-[15px]
                md:text-[16px]

                leading-[180%]

                max-w-[900px]
              "
            >
              We provide the below-mentioned solutions for Transmission &amp;
              Distribution Utilities, Oil &amp; Gas, Infrastructure, and such
              other customers. Earthing/Grounding Studies, Lightning Protection
              Studies, Power System Studies, Power Quality Studies,
              Instrumentation Earthing
            </motion.p>
          </motion.div>

          {/* NAV BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="flex gap-4 lg:mt-2"
          >
            {/* PREV */}
            <button
              onClick={prev}
              disabled={atStart}
              className="
                w-11
                h-11
                md:w-12
                md:h-12

                rounded-full
                flex
                items-center
                justify-center

                transition-all
                duration-300
              "
              style={{
                opacity: atStart ? 0.4 : 1,
                background: atStart ? "#ffffff" : "transparent",
                border: "1px solid white",
                color: atStart ? "#000000" : "#ffffff",
              }}
            >
              ←
            </button>

            {/* NEXT */}
            <button
              onClick={next}
              disabled={atEnd}
              className="
                w-11
                h-11
                md:w-12
                md:h-12

                rounded-full
                flex
                items-center
                justify-center

                transition-all
                duration-300
              "
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

        {/* SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full mt-14 md:mt-20 overflow-hidden"
        >
          {/* GLOBAL LINE */}
          <div className="absolute top-[39px] left-[-50vw] right-[-50vw] h-[1px] bg-white/30 z-0" />

          {/* TRACK */}
          <div
            className="
              relative
              flex
              gap-[20px]
              transition-transform
              duration-700
              ease-in-out
              z-10
            "
            style={{
              transform: `translateX(-${
                activeIndex *
                (window.innerWidth < 768 ? 290 : 366)
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
                  className="
                    flex
                    flex-col
                    

                    w-[270px]
                    md:w-[346px]

                    shrink-0
                    cursor-pointer
                    group
                  "
                  onClick={() => setActiveIndex(index)}
                >
                  {/* LABEL */}
                  <div className="h-[30px] flex items-end mb-[8px]">
                    <span
                      className={`
                        uppercase
                        tracking-[0.1em]

                        text-[10px]
                        md:text-[11px]

                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "font-bold text-white"
                            : "font-normal text-gray-400 group-hover:text-white"
                        }
                      `}
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* DOT */}
                  <div className="relative w-full h-[2px] flex items-center">
                    {isActive ? (
                      <div className="absolute left-0 w-[14px] h-[14px] bg-[#C02429] rounded-full z-10" />
                    ) : (
                      <div className="absolute left-0 w-2.5 h-2.5 bg-white rounded-full z-10" />
                    )}
                  </div>

                  {/* CARD */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "#F9F7F2"
                        : "rgba(27, 24, 24, 0.85)",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                      mt-[28px]
                      md:mt-[32px]
                      rounded-lg

                      p-6
                      md:p-8

                      transition-all
                      duration-500
                      ease-in-out

                      min-h-[260px]
                      md:h-[360px]
                    "
                  >
                    <motion.p
                      animate={{
                        color: isActive
                          ? "#312d2d"
                          : "#e5e7eb",
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="
                        text-[14px]
                        md:text-[15px]

                        leading-[180%]
                      "
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