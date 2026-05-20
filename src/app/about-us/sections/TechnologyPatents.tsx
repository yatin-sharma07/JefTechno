"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const technologyData = [
  {
    id: 0,
    title: "TECHNOLOGY AND PATENTS",
    image: "/AboutUs/brownng.png",
    description:
      "9 granted patents — India, United States, European Union. JEF's proprietary tools are not incremental improvements to existing approaches. They are purpose-built responses to specific gaps in what the industry was delivering.",
  },

  {
    id: 1,
    title: "JEF Shield",
    image: "/HomePageImg/IndustriesWeServe/weServe2.png",
    description:
      "Automated LPS risk assessment and design to IEC 62305-2. Complete report, drawings, and BOM in under 90 seconds.",
  },

  {
    id: 2,
    title: "JEF Safety Audit Tool",
    image: "/HomePageImg/IndustriesWeServe/weServe1.png",
    description:
      "World's first automated safety audit tool. 16000+ reports, 630,000+ data points, 230,000+ images, zero data mix-up. Patented.",
  },

  {
    id: 3,
    title: "JEF E-Build",
    image: "/HomePageImg/IndustriesWeServe/weServe5.png",
    description:
      "Real-time LPS installation monitoring and remote certification.",
  },
];

export default function TechnologyPatents() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
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
      {technologyData.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={item.id}
            onMouseEnter={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className={`
              relative
              overflow-hidden
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              cursor-pointer

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
            {/* BG IMAGE */}
            <motion.img
              src={item.image}
              alt={item.title}
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={`
                absolute inset-0
                w-full h-full
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
                absolute inset-0
                transition-all
                duration-700

                ${
                  isActive
                    ? "bg-black/45"
                    : "bg-black/60"
                }
              `}
            />

            {/* CONTENT */}
            <div className="relative z-20 h-full px-5 sm:px-8 py-8 sm:py-10 flex flex-col">
              
              {/* TITLE */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="flex items-start gap-4 sm:gap-5"
              >
                {/* RED LINE */}
                <div className="w-[2px] h-[50px] sm:h-[60px] bg-[#C02429] mt-1 shrink-0" />

                {/* TITLE TEXT */}
                <motion.h2
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className={`
                    text-white

                    text-[18px]
                    sm:text-[24px]
                    lg:text-[25px]

                    tracking-[0.5px]
                    font-light

                    transition-opacity
                    transition-transform
                    duration-1000
                    ease-out

                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-90 translate-y-[2px]"
                    }
                  `}
                >
                  {item.title}
                </motion.h2>
              </motion.div>

              {/* EXPANDABLE CONTENT */}
             <div className="w-full h-full flex flex-col mb-20 items-center justify-center">
                 <div
                className={`
                  mt-10 sm:mt-16 lg:mt-24
                  overflow-hidden
                  transition-all
                  duration-700
                 
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    isActive
                      ? "opacity-100 translate-y-0 max-h-[1000px]"
                      : "opacity-0 translate-y-10 max-h-0 pointer-events-none"
                  }
                `}
              >
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    isActive
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 40 }
                  }
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    text-white

                    text-[15px]
                    sm:text-[18px]

                    leading-[1.8]

                    max-w-[520px]
                  "
                >
                  {item.description}
                </motion.p>
              </div>
             </div>
            </div>
          </motion.div>
        );
      })}
    </motion.section>
  );
}