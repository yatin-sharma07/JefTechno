"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const industriesData = [
  {
    id: 0,
    title: "Renewable Energy",
    image: "/HomePageImg/IndustriesWeServe/weServe6.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector1.png",
    description:
      "We offer comprehensive solutions for the solar and wind power segments.",
    points: [
      "Lightning Protection & Grounding: Comprehensive lightning protection and grounding solutions, including Supply and Installation, Testing and Commissioning.",
      "Design Services: Design and detailed engineering for specialized renewable energy infrastructure.",
      "Safety & Analysis: LPS adequacy studies and root cause analysis to ensure plant reliability.",
    ],
  },

  {
    id: 1,
    title: "Power Utilities",
    image: "/HomePageImg/IndustriesWeServe/weServe1.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector2.png",
    description:
      "We deliver specialized technical and engineering services to enhance the reliability of power utility systems.",
    points: [
      "System Studies: Comprehensive power quality and power system studies.",
      "Health Assessments: Grounding system health assessments and risk analysis.",
      "Protection Solutions: Design, engineering and installation of lightning protection and grounding systems.",
    ],
  },

  {
    id: 2,
    title: "Data Centers",
    image: "/HomePageImg/IndustriesWeServe/weServe2.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector3.png",
    description:
      "We provide end-to-end electrical safety and reliability solutions tailored for mission-critical data centre environments.",
    points: [
      "Uptime Assurance: Power quality studies and monitoring to prevent unexplained equipment failures or process interruptions.",
      "Advanced Protection: Automated lightning protection risk assessment and design using proprietary JEF Shield technology.",
      "Safety Compliance: Comprehensive electrical and fire safety audits to ensure 24/7 operational continuity.",
    ],
  },

  {
    id: 3,
    title: "Manufacturing Plant",
    image: "/HomePageImg/IndustriesWeServe/weServe3.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector4.png",
    description:
      "We assist manufacturing facilities in solving complex electrical issues and reducing downtime through innovative technical services.",
    points: [
      "Operational Reliability: Root cause analysis for sensor/DCS malfunctions and unexplained tripping.",
      "Safety Audits: Electrical & Fire Safety Audits using automated safety audit tool for accurate, real-time safety monitoring.",
      "Earthing & LPS Design: Technically superior grounding and lightning protection designs that meet international standards.",
    ],
  },

  {
    id: 4,
    title: "Process Plant",
    image: "/HomePageImg/IndustriesWeServe/weServe4.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector5.png",
    description:
      "Our expertise in high-risk environments ensures that process plants maintain the highest levels of safety and efficiency.",
    points: [
      "Specialized Studies: EMI/EMC studies to ensure electromagnetic compatibility and prevent interference in sensitive systems.",
      "Risk Mitigation: Root cause analysis and adequacy studies to avoid costly process interruptions.",
      "Engineered Protection: Custom-designed external lightning protection and grounding solutions implemented by domain experts.",
    ],
  },

  {
    id: 5,
    title: "Oil & Gas",
    image: "/HomePageImg/IndustriesWeServe/weServe5.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector6.png",
    description:
      "We offer comprehensive solutions for the oil and gas segment, addressing both safety and corrosion challenges.",
    points: [
      "Interference Modelling: AC interference studies using computer modelling and simulation for buried pipelines.",
      "Asset Protection: Comprehensive lightning protection and grounding solutions including design, supply, and installation.",
      "Performance Analysis: Detailed adequacy studies and root cause analysis for onshore and offshore facilities.",
    ],
  },
];
export default function OurIndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="
        w-full
        h-auto
        lg:h-screen
        bg-black
        overflow-hidden
        flex
        flex-col
        lg:flex-row
      "
    >
      {industriesData.map((industry, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={industry.id}
            onMouseEnter={() => setActiveIndex(index)}
            initial={{
              opacity: 0,
              y: 140,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              delay: index * 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              relative
              overflow-hidden
              cursor-pointer
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]

              w-full
              min-h-[420px]
              lg:min-h-0

              ${
                isActive
                  ? "lg:flex-[3]"
                  : "lg:flex-1"
              }
            `}
          >
            {/* BG */}
            <motion.img
              src={industry.image}
              alt={industry.title}
              className={`
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                ${
                  isActive
                    ? "scale-105"
                    : "scale-100"
                }
              `}
            />

            {/* OVERLAY */}
            <div
              className={`
                absolute
                inset-0
                transition-all
                duration-700
                ${
                  isActive
                    ? "bg-black/45"
                    : "bg-black/60"
                }
              `}
            />

            {/* CONTENT WRAPPER */}
            <div className="relative z-20 h-full px-5 sm:px-8 py-8 sm:py-10 flex flex-col">
              {/* TITLE */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-[2px] h-[50px] sm:h-[60px] bg-[#C02429] mt-1 shrink-0" />

                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={industry.icon}
                    alt={industry.title}
                    className={`
                      w-[22px]
                      h-[22px]
                      sm:w-[28px]
                      sm:h-[28px]
                      object-contain
                      transition-all
                      duration-700
                      ${
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-80 scale-95"
                      }
                    `}
                  />

                  <h2
                    className={`
                      text-white
                      whitespace-nowrap
                      text-[16px]
                      sm:text-[25px]
                      font-light
                      text-left
                      transition-all
                      duration-700

                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-90"
                      }
                    `}
                  >
                    {industry.title}
                  </h2>
                </div>
              </div>

              {/* EXPANDABLE */}
              <div
                className={`
                  mt-10
                  sm:mt-16
                  lg:mt-24
                  overflow-hidden
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    isActive
                      ? "max-h-[1000px]"
                      : "max-h-0"
                  }
                `}
              >
                {/* delayed fade after expand */}
                <motion.div
                  initial={false}
                  animate={
                    isActive
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 40,
                        }
                  }
                  transition={{
                    duration: 0.7,
                    delay: isActive ? 0.5 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p
                    className="
                      text-white
                      text-[14px]
                      sm:text-[16px]
                      leading-[1.8]
                      mb-8
                      sm:mb-10
                      max-w-[500px]
                      text-left
                    "
                  >
                    {industry.description}
                  </p>

                  <ul className="space-y-5 sm:space-y-8 max-w-[520px]">
                    {industry.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={false}
                        animate={
                          isActive
                            ? {
                                opacity: 1,
                                x: 0,
                              }
                            : {
                                opacity: 0,
                                x: 30,
                              }
                        }
                        transition={{
                          duration: 0.55,
                          delay: isActive
                            ? 1 + idx * 0.12
                            : 0,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          text-white/95
                          text-[14px]
                          sm:text-[16px]
                          leading-[1.8]
                          flex
                          gap-3
                          sm:gap-4
                        "
                      >
                        <span>•</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.section>
  );
}