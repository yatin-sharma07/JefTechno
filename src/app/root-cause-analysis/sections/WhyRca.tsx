"use client";


import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/RCA/1.png",
    title: "OIL & GAS",
    description:
      "Resolving equipment malfunctions and grounding system inefficiencies in hazardous environments.",
  },
  {
    id: 2,
    image: "/RCA/2.png",
    title: "POWER UTILITIES",
    description:
      "Investigating failures in substations, transmission lines, and grid systems.",
  },
  {
    id: 3,
    image: "/RCA/3.png",        
    title: "MANUFACTURING",
    description:
      "Identifying issues in power distribution and automation systems to ensure uninterrupted operations.",
  },
  {
    id: 4,
    image: "/RCA/4.png",
    title: "PROCESS PLANTS",
    description:
      "Addressing electrical safety risks and optimizing system performance in petrochemical and food processing facilities.",
  },
  {
    id: 5,
    image: "/RCA/5.png",
    title: "WAREHOUSES AND COMMERCIAL BUILDINGS",
    description:
      "Investigating power outages, grounding faults, and lightning protection system failures to enhance safety and reliability.",
  },
];

const duplicatedCards = [...cards, ...cards];

export default function WhyRca() {
  return (
    <section className="w-full bg-[#232427] py-16 md:py-[72px] overflow-hidden">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2
            className="
              font-montserrat
              text-[24px]
              md:text-[32px]
              uppercase
              font-bold
              tracking-[2px]
              md:tracking-[4px]
              text-[#C02429]
            "
          >
            INDUSTRY APPLICATIONS
          </h2>

         
           
           <p className="
              text-white
              text-[14px]
              md:text-[16px]
              leading-[1.7]
            ">
  JEF’s Root Cause Analysis services cater to a wide range of industries, providing customized solutions for:
</p>
         
        </motion.div>

        {/* Infinite Slider */}
        <div className="mt-12 md:mt-20 relative overflow-hidden w-full">
          <motion.div
            className="flex gap-6 md:gap-12 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="
                  w-[300px]
                  md:w-[460px]
                  min-w-[300px]
                  md:min-w-[460px]
                  flex
                  flex-col
                  gap-5
                  group
                "
              >
                {/* Image */}
                <div
                  className="
                    w-full
                    aspect-[463/239]
                    overflow-hidden
                   
                  "
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="
                      text-white
                      uppercase
                      text-[14px]
                      md:text-[16px]
                      leading-[1.5]
                      font-medium
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      text-[#D0D0D0]
                      text-[12px]
                      md:text-[14px]
                      leading-[1.7]
                      font-light
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}