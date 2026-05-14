"use client";

import { motion } from "framer-motion";
import Image from "next/image";

 export default function OurPresence() {
  const locations = [
    {
      image: "/AboutUs/Jef India 1.png",
      alt: "JEF India Headquarters",
      title: "Bengaluru, India (Global HQ)",
      description:
        "The core of our operations, driving end-to-end product development, engineering audits, and consulting capabilities across India and international markets.",
    },

    {
      image: "/AboutUs/Jef UAE 1.png",
      alt: "JEF UAE Headquarters",
      title: "Abu Dhabi, UAE (GCC HQ)",
      description:
        "Focused on high-performance engineering services for the energy sector, including power system studies, instrumentation earthing, EMI/EMC analysis, and specialized solutions for oil & gas environments.",
    },

    {
      image: "/AboutUs/JEF USA 1.png",
      alt: "JEF USA Headquarters",
      title: "United States (USA HQ)",
      description:
        "Strengthening our global footprint through a robust patent portfolio, alignment with US engineering standards, and active engagement with North American clients and infrastructure projects.",
    },
  ];

  return (
    <section className="bg-[#1B1818] overflow-hidden py-20 md:py-28 px-5 sm:px-8 md:px-14 xl:px-20">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-20">
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="
            text-[#C02429]

            text-[12px]
            md:text-[14px]

            font-medium

            tracking-[2px]
            uppercase

            mb-4
          "
        >
          A GLOBAL ENGINEERING FUTURE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            text-white

            text-[28px]
            md:text-[36px]

            font-semibold

            tracking-[2px]
            uppercase

            mb-6
          "
        >
          OUR PRESENCE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            text-white/90

            text-[15px]
            md:text-[17px]

            leading-[190%]

            max-w-6xl
          "
        >
          JEF Techno operates as a globally integrated engineering and
          technology organization, delivering advanced solutions in earthing,
          lightning protection, and power system performance across critical
          infrastructure sectors. Our operations span multiple strategic
          regions, enabling seamless delivery of product innovation, technical
          audits, and specialized consulting services worldwide.
        </motion.p>
      </div>

      {/* CARDS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-10
          md:gap-12
          xl:gap-16

          max-w-7xl
          mx-auto
        "
      >
        {locations.map((location, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="group flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-2xl">
              
              <div
                className="
                  relative

                  w-full

                  h-[240px]
                  sm:h-[300px]
                  lg:h-[340px]
                "
              >
                <Image
                  src={location.image}
                  alt={location.alt}
                  fill
                  className="
                    object-cover

                    transition-transform
                    duration-[1200ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    group-hover:scale-110
                  "
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="pt-7 md:pt-8">
              
              <motion.h3
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="
                  text-white

                  text-[18px]
                  md:text-[20px]

                  font-semibold

                  leading-[150%]

                  mb-4
                "
              >
                {location.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="
                  text-white/85

                  text-[14px]
                  md:text-[15px]

                  leading-[190%]
                "
              >
                {location.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

