"use client";

import { motion } from "framer-motion";

export default function WhyAudit({ title, description, cards }) {
  const duplicatedCards = [...cards, ...cards];

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
            {title}
          </h2>

          <p className="
              text-white
              text-[14px]
              md:text-[16px]
              leading-[1.7]
            ">
            {description}
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
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] flex-shrink-0 flex flex-col gap-6 group"
              >
                <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                   <div className="absolute inset-0 bg-[#4A4545] flex items-center justify-center p-8 text-center text-white font-montserrat text-sm md:text-base leading-relaxed">
                      {card.description}
                   </div>
                </div>
                <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-[1px] leading-[1.4] group-hover:text-[#C02429] transition-colors">
                  {card.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
