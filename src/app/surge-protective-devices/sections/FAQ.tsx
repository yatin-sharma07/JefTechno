"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question:
      "Do I need surge protection if I already have an external lightning protection system installed?",
    answer:
      "Yes — and this requirement is explicit in both IS/IEC 62305 and NBC 2016. The external lightning protection system prevents direct physical damage to the structure. It does not prevent transient overvoltages from being induced onto electrical and data cables by the electromagnetic field of a nearby lightning channel, nor does it manage the surge energy that may be conducted into the building along external service lines or strike it. It also has no effect on the internally generated switching surges that account for a large proportion of surge-related equipment failures in industrial and commercial facilities. SPDs must be installed in addition to any LPS — the UPS provides power continuity during supply interruptions but requires its upstream SPD protection itself.",
  },
  {
    id: 2,
    question:
      "What is the difference between Type 1, Type 2, and Type 3 SPDs?",
    answer:
      "Each type is designed for a different position in the installation and a different level of residual surge energy. Type 1 devices are installed at the building entry point and handle the highest energy events, including partial direct lightning current. Type 2 devices are installed at sub-distribution boards and handle the lower-energy surges that pass through the Type 1 stage, including routine switching transients. Type 3 devices are installed at the point of use and handle small-amplitude residual surges at equipment level. A comprehensive lightning protection system requires all three types working in coordination — no single type alone provides protection across the full range of threats.",
  },
];
const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:pt-[86px] md:pb-[120px] overflow-hidden lg:h-[570px] relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/clps/clpf-faq-bg.png')" }}
      />
      <div className="absolute inset-0 z-1 bg-black/20" />

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
                  className="w-full bg-white/10 backdrop-blur-sm border-[0.5px] rounded-lg border-white/20 overflow-hidden transition-all duration-500 shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full min-h-[70px] md:min-h-[80px] px-5 md:px-[24px] py-4 md:py-[15px] flex items-center justify-between"
                  >
                    <div className="w-full flex items-center justify-between gap-4">
                      <span className={`font-montserrat text-[14px] md:text-[16px] leading-[1.4] md:leading-[150%] text-left transition-all duration-300 ${isOpen ? "font-bold text-white" : "font-medium text-white/90"}`}>
                        {item.question}
                      </span>
                      <div className={`w-6 h-6 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                        <img
                          src="/clps/Vector.png"
                          alt="Arrow"
                          className="w-3 md:w-4 object-contain transition-all duration-300"
                          style={{ filter: "brightness(0) saturate(100%) invert(16%) sepia(95%) saturate(7470%) hue-rotate(356deg) brightness(98%) contrast(118%)" }}
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
