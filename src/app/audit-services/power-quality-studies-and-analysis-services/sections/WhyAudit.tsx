"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/PQS/4.png",
    title: "VOLTAGE QUALITY",
    description:
      "Assessing sags, swells, unbalance, and harmonics in the voltage supply.",
  },
  {
    id: 2,
    image: "/PQS/1.png",
    title: "CURRENT QUALITY",
    description:
      "Analyzing current distortions and their impact on equipment.",
  },
  {
    id: 3,
    image: "/PQS/2.png",  
    title: "FREQUENCY STABILITY",
    description:
      "Ensuring the frequency remains stable and within acceptable limits.",
  },
  {
    id: 4,
    image: "/PQS/3.png",  
    title: "TRANSIENT ANALYSIS",
    description:
      "Identifying and mitigating short-duration high-energy disturbances.",
  },
];

const duplicatedCards = [...cards, ...cards];

export default function WhyAudit() {
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
            KEY COMPONENTS OF THE STUDY
          </h2>

         
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
                  md:w-[420px]
                  min-w-[300px]
                  md:min-w-[420px]
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