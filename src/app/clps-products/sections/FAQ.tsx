"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "Is lightning protection a legal requirement in India?",
    answer:
      "For certain building types and uses, yes. The National Building Code 2016 (NBC 2016) requires lightning protection for buildings above defined heights and for buildings that house hazardous, explosive, or particularly sensitive contents. Beyond NBC 2016, sector-specific regulations in petroleum, chemicals, power generation, defence, and other industries impose their own independent requirements. For structures outside mandatory categories, the risk assessment under IEC 62305-2 provides a systematic basis for determining whether protection is warranted — and in most industrial and commercial applications, it will be.",
  },
  {
    id: 2,
    question:
      "Should the lightning protection earthing system be kept separate from the electrical system earth?",
    answer:
      "No. IS/IEC 62305 requires the LPS earthing system to be interconnected with all other earthing systems in the structure — including the electrical system protective earth, the IT equipment earth, and any telecommunications earthing. If these systems are kept separate and a lightning strike raises the LPS earth to a high potential, large potential differences develop between the systems, which can cause destructive arcing between equipment connected to different earth references. A single, integrated earthing network shared by all systems is both the standard-compliant approach and the electrically safer one.",
  },
  {
    id: 3,
    question:
      "How often does a lightning protection system need to be inspected?",
    answer:
      "IEC 62305-3 sets out the requirement for periodic inspection and maintenance of installed LPS. The standard specifies that inspection intervals depend on the LPL of the system and the environmental conditions at the site — systems at higher LPLs or in more aggressive environments require more frequent inspection. In addition to scheduled periodic inspections, a visual inspection should be carried out following any significant modification to the protected structure, and a full inspection — including earth resistance measurement — is required following any confirmed lightning strike event. Specific inspection intervals should be taken from the current edition of IEC 62305-3 or confirmed with JEF's engineering team for the particular installation.",
  },
  {
    id: 4,
    question: "What changed practically with the 2024 edition of IEC 62305?",
    answer:
      "Several changes in the 2024 revision have direct practical implications. The risk assessment now uses the ground strike-point density (NSG) rather than the previous flash density parameter (NG), which may affect the calculated risk level for some sites. Minimum metal thicknesses are now explicitly stated for air termination components — relevant wherever thin architectural metalwork is proposed as a natural air termination element. SPD dimensioning is based on more precisely specified surge current parameters. The standard now addresses green roofs and projecting facade elements directly. Thunderstorm Warning Systems are formally recognised as a risk reduction measure. Requirements for SPD backup fuse dimensioning and status monitoring are introduced in IEC 62305-4.",
  },
  {
    id: 5,
    question: "What does JEF's 200 kA type test mean for a specifier?",
    answer:
      "The IEC 62561 series requires external LPS components to be type-tested at up to 100 kA on the 10/350 µs waveform. JEF tests its CLPS components at 200 kA on the same waveform — double the standard requirement. For a specifier, this means that every JEF component has been verified to withstand twice the current magnitude the standard demands, before any safety factor is applied. Type-test certificates are available for review on request.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:pt-[86px] md:pb-[120px] overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/clps/clpf-faq-bg.png')" }} // Reusing an existing image as bg
      />
      {/* Dark Overlay to ensure readability */}
      <div className="absolute inset-0 z-1 bg-black/60" />

      <div className="section-container flex flex-col gap-[32px] md:gap-[48px] relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-montserrat font-bold text-[32px] md:text-[40px] leading-[55px] uppercase text-white"
        >
          FAQ
        </motion.h2>

        <div className="w-full flex flex-col gap-6 md:gap-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-x-[48px] md:gap-y-[32px] w-full items-start">
            {faqData.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`
                    w-full
                    bg-white/10 backdrop-blur-sm
                    border-[0.5px]
                    rounded-lg
                    border-white/20
                    overflow-hidden
                    transition-all
                    duration-500
                    shadow-lg
                  `}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="
                      w-full
                      min-h-[70px] md:min-h-[80px]
                      px-5 md:px-[24px]
                      py-4 md:py-[15px]
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div className="w-full flex items-center justify-between gap-4">
                      <span
                        className={`
                          font-montserrat
                          text-[14px] md:text-[16px]
                          leading-[1.4] md:leading-[150%]
                          text-left
                          transition-all
                          duration-300
                          
                          ${isOpen ? "font-bold text-white" : "font-medium text-white/90"}
                        `}
                      >
                        {item.question}
                      </span>

                      <div
                        className={`
                          w-6 h-6 md:w-10 md:h-10
                          flex
                          items-center
                          justify-center
                          transition-transform
                          duration-300
                          shrink-0
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        <img
                          src="/clps/Vector.png"
                          alt="Arrow"
                          className="w-3 md:w-4 object-contain transition-all duration-300 "
                          style={{ 
                            filter: "brightness(0) saturate(100%) invert(16%) sepia(95%) saturate(7470%) hue-rotate(356deg) brightness(98%) contrast(118%)" 
                          }}
                        />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 md:px-[24px] pb-6 md:pb-[28px]">
                            <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[1.6] md:leading-[150%] text-white/80">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
