"use client";


import { motion } from "framer-motion";

const cards = [
  {
    image: "/IS/is-1.png",
    title: "REDUCES ELECTRICAL NOISE AND SIGNAL DISTURBANCE",
    description:
      "By identifying and eliminating ground loops, circulating currents, and shield termination errors that corrupt 4–20 mA and digital signals.",
  },
  {
    image: "/IS/is-2.png",
    title: "PREVENTS MALFUNCTIONS, FALSE ALARMS, AND NUISANCE TRIPS",
    description:
      "By addressing the root causes that standard electrical testing does not detect.",
  },
  {
    image: "/IS/is-3.png",
    title: "IMPROVES SYSTEM RELIABILITY AND REDUCES DOWNTIME",
    description:
      "By eliminating the intermittent, hard-to-diagnose failure modes that occur when earthing problems are left uncorrected.",
  },
  {
    image: "/IS/is-4.png",
    title: "ENHANCES PERSONNEL AND EQUIPMENT SAFETY",
    description:
      "By identifying isolated grounding elements and earth bar mix-ups that represent genuine safety hazards under fault conditions.",
  },
  {
    image: "/IS/is-5.png",
    title: "IMPROVES PROCESS STABILITY AND PRODUCTION EFFICIENCY",
    description:
      "By restoring signal integrity and eliminating the operational disruptions caused by instrumentation system noise.",
  },
  {
    image: "/IS/is-4.png",
    title: "DOCUMENTED COMPLIANCE WITH INTERNATIONAL STANDARDS",
    description:
      "Audit reports referenced to IEEE 1050-2004, IEEE 1100-2005, IEC 61000-5-2 and related standards, supporting regulatory, insurance, and operator requirements.",
  },
];

const duplicatedCards = [...cards, ...cards];

export default function WhyJefCLPS() {
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
            WHY US FOR INSTRUMENTATION EARTHING AUDIT
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
                key={index}
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