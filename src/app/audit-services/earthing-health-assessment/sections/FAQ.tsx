"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question:
      "Our earth electrode resistance measurement shows a satisfactory value. Why do we need a Comprehensive Earthing Health Assessment?",
    answer:
      "A satisfactory resistance measurement confirms the aggregate impedance of the overall system. It does not confirm that every item of equipment has an effective connection to the grid, or that earth fault loop impedance is low enough to ensure timely protection operation at each circuit. A ground grid with multiple parallel paths can mask individual defective connections entirely. The Comprehensive Earthing Health Assessment specifically addresses what the resistance measurement cannot tell you.",
  },
  {
    id: 2,
    question:
      "Can the assessment be carried out without requiring power shutdown?",
    answer:
      "Yes. JEF’s assessment uses low voltage, low-current injection methods at off-grid frequency and is designed for live systems. Appropriate and adequate personal protective equipment is used throughout. The comprehensive assessment can be completed without production impact.",
  },
  {
    id: 3,
    question:
      "What is the difference between an earth grid resistance test and a riser integrity test?",
    answer:
      "An earth grid resistance test measures the aggregate impedance of the complete earthing system to remote earth. A riser integrity test checks the integrity of each individual connection between the buried grid and the above-grade earthing conductors and therefore can detect equipment-pinning which specific connections are open or defective. The two tests address entirely different aspects of earthing system performance and one cannot substitute for the other.",
  },
  {
    id: 4,
    question:
      "What happens if the assessment identifies defective connections?",
    answer:
      "Each deficiency is reported with its specific location and a recommendation for corrective action. For a defective riser below ground, the corrective action is to excavate at the identified location and reinstate the connection. For above-ground defects, redo the specific joint. For an isolated grid section, provide an alternative connection to restore continuity. JEF’s methodology pinpoints the specific location, so corrective work is targeted rather than requiring excavation across a wide area.",
  },
  {
    id: 5,
    question:
      "How often should a Comprehensive Earthing Health Assessment be carried out?",
    answer:
      "A full assessment should be considered whenever the installation has undergone significant modification, when unexplained equipment failures or protection maloperation is occurring, or once every 3 to 5 years. JEF’s team can advise on the appropriate frequency for a specific installation.",
  },
  {
    id: 6,
    question:
      "What is an acceptable earth resistance value, and how is low earth resistance achieved?",
    answer:
      "There is no single universally applicable earth resistance value. For EHV substations, IEEE Std 80 and IS 3043 set targets based on calculated ground potential rise and tolerable touch and step potentials — a function of fault current, soil resistivity, and fault duration. For LV installations, earth loop impedance is the relevant criterion. Where high earth resistance is identified, corrective options depend on the cause and are determined by the assessment findings.",
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
      <div className="absolute inset-0 z-1 bg-black/40" />

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
