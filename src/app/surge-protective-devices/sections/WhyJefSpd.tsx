"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/spd/why-jef-spd-5.png",
    title: "LOW VOLTAGE AC POWER LINES",
    description:
      "Type 1, Type 2, and Type 3 SPDs installed at appropriate points from the main distribution board to point-of-use equipment to manage lightning and switching surges.",
  },
  {
    id: 2,
    image: "/spd/why-jef-spd-3.png",
    title: "SIGNAL AND INSTRUMENTATION LINES",
    description:
      "Protection for process instrumentation, measurement systems, PLC and control wiring, and other low-voltage signal circuits entering or leaving the structure.",
  },
  {
    id: 3,
    image: "/spd/why-jef-spd-6.png",
    title: "DATA AND ETHERNET LINES",
    description:
      "Surge protection for LAN, PoE, and other communication networks where transient overvoltages can damage network hardware and connected electronic equipment.",
  },
  {
    id: 4,
    image: "/spd/why-jef-spd-2.png",
    title: "TELECOMMUNICATION LINES",
    description:
      "Protection for telephone, broadband, and communication cabling entering protected structures from external routes or service providers.",
  },
  {
    id: 5,
    image: "/spd/why-jef-spd-1.png",
    title: "COAXIAL AND ANTENNA LINES",
    description:
      "Protection for RF, coaxial, CCTV, antenna, and tower-connected systems exposed to lightning electromagnetic effects and conducted surge energy.",
  },
  {
    id: 6,
    image: "/spd/why-jef-spd-4.png", 
    title: "DC AND PHOTOVOLTAIC SYSTEM LINES",
    description:
      "DC surge protection for photovoltaic strings, inverters, battery systems, and other DC circuits exposed to lightning and switching transients.",
  },
];

const duplicatedCards = [...cards, ...cards];

export default function LinesRequiringSpdProtection() {
  return (
    <section className="w-full overflow-hidden bg-[#232427] py-12 md:py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <h2 className="font-montserrat text-[22px] font-bold uppercase tracking-[3px] text-[#C02429] md:text-[30px] md:tracking-[5px]">
            LINES REQUIRING SPD PROTECTION
          </h2>

          <p className="max-w-[900px] text-[13px] leading-[1.6] text-white md:text-[16px]">
            IS/IEC 62305 and NBC 2016 require surge protection on all electrical
            and electronic lines entering a structure where an external lightning
            protection system is installed. The CLPS range covers:
          </p>
        </motion.div>

        <div className="relative mt-10 w-full overflow-hidden md:mt-14">
          <motion.div
            className="flex w-max gap-5 md:gap-7"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 38,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="group flex w-[240px] min-w-[240px] flex-col gap-4 md:w-[320px] md:min-w-[320px]"
              >
                <div className="aspect-[320/170] w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[11px] font-semibold uppercase leading-[1.4] tracking-[0.6px] text-white md:text-[13px]">
                    {card.title}
                  </h3>

                  <p className="text-[11px] font-light leading-[1.6] text-white/70 md:text-[12px]">
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