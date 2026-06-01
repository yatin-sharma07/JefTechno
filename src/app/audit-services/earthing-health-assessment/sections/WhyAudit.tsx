"use client";


import { motion } from "framer-motion";

const cards = [
  {
    image: "/EHA/eha-1.png",
    title: "ASSESSMENT, NOT JUST TESTING",
    description:
      "Each test result is interpreted in the context of the complete earthing system — soil conditions, grid geometry, fault current levels, and protection settings — to produce directly actionable findings",
  },
  {
    image: "/EHA/eha-2.png",
    title: "CARRIED OUT ON LIVE SYSTEMS",
    description:
      "Designed for live systems, eliminating the production impact that would make comprehensive testing impractical for most facilities.",
  },
  {
    image: "/EHA/eha-3.png",  
    title: "LOCATION-SPECIFIC FINDINGS",
    description:
      "JEF’s methodology pin points the specific location of each deficiency — open riser, isolated grid section, or corroded connection — enabling targeted corrective action.",
  },
  {
    image: "/EHA/eha-4.png",
    title: "EARTH GRID MODELLING AND SIMULATION",
    description:
      "Computer modelling using CDEGS software produces quantitative assessments of GPR, touch potential distribution, and step potential profiles across the site.",
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
            Why us for Earthing Health Assessment
          </h2>

         
           
           <p className="
              text-white
              text-[14px]
              md:text-[16px]
              leading-[1.7]
            ">
 As a pioneer in Earthing integrity testing services, we at JEF have over two decades of experience covering 300,000 riser connections <br /> spread across 18 countries, 400 substations ranging from 33kV to 765kV process plants and other critical installations. With several patents <br /> in this field, our level of expertise is unmatched even as we keep innovating further.
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