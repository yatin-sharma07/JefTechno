"use client";


import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/clps/1.png",
    title: "TESTED TO 200 kA — DOUBLE THE IEC STANDARD LIMIT",
    description:
      "JEF type-tests its CLPS components at 200 kA on the 10/350 μs waveform — twice the 100 kA limit required by IEC 62561. Type-test certificates are available for review.",
  },
  {
    id: 2,
    image: "/clps/2.png",
    title: "IEC 62305:2024 ALIGNED",
    description:
      "Product range, design tools, and technical documentation are aligned with the current edition of the standard. The 2024 revision.",
  },
  {
    id: 3,
    image: "/clps/3.png",
    title: "COMPREHENSIVE SYSTEM FROM ONE SOURCE",
    description:
      "Every component required for a comprehensive lightning protection system — from air termination rod to point-of-use SPD.",
  },
  {
    id: 4,
    image: "/clps/4.png",
    title: "JEF SHIELD — RISK ASSESSMENT IN UNDER 90 SECONDS",
    description:
      "Risk assessment, concept drawings, bill of materials, and budget estimate delivered in under 90 seconds. Built to IS/IEC 62305.",
  },
  {
    id: 5,
    image: "/clps/5.png",
    title: "JEF E-BUILD — INSTALLATION QUALITY VERIFIED",
    description:
      "Step-by-step guided installation with real-time remote supervision by qualified engineers and documented certification.",
  },
  {
    id: 6,
    image: "/clps/6.png",
    title: "ENGINEERING SUPPORT ACROSS THE PROJECT LIFECYCLE",
    description:
      "JEF engineering team provides technical support from risk assessment and system design through product selection, installation supervision, and inspection.",
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
            WHY JEF CLPS?
          </h2>

         
           
           <p className="
              text-white
              text-[14px]
              md:text-[16px]
              leading-[1.7]
            ">
  As a pioneer in Earthing integrity testing services, we at JEF have over two decades of experience covering 300,000 riser connections
  <br />
  spread across 18 countries, 400 substations ranging from 33kV to 765kV process plants and other critical installations. With several patents
  <br />
  in this field, our level of expertise is unmatched even as we keep innovating further.
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