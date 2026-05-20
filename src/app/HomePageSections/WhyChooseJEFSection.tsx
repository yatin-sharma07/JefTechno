"use client";

import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseJEFSection() {
  return (
    <section className="w-full bg-[#232427] flex justify-center py-[80px] md:py-[120px] px-5 sm:px-6 lg:px-0 overflow-hidden">
      <div className="w-full max-w-[1286px] flex flex-col gap-[90px] md:gap-[120px]">
        
        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-[50px] md:gap-[80px] lg:gap-[120px]">
          
          {/* IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
            className="w-full lg:w-[667px] h-[250px] sm:h-[320px] lg:h-[375px] overflow-hidden"
          >
            <img
              src="/HomePageImg/WhyChooseJEFImg/WhyChooseJef1.png"
              alt="Smart Digitization"
              className="
                w-full
                h-full
                object-cover
                transform-gpu
                will-change-transform
                transition-transform
                duration-700
                ease-out
                hover:scale-110
              "
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
            className="w-full lg:w-[499px] flex flex-col gap-5 md:gap-8"
          >
            {/* SMALL TITLE */}
            <p className="text-[11px] sm:text-[12px] font-semibold tracking-[1.47px] uppercase text-[#C02429] font-montserrat">
              Why choose JEF ?
            </p>

            {/* HEADING */}
            <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-[2px] sm:tracking-[3px] uppercase leading-[1.2] text-white font-montserrat">
              Smart Digitization
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[15px] sm:text-[16px] font-light leading-[170%] text-white font-montserrat">
              Our patented Smart Digitization process delivers consistency,
              speed, accuracy and reliability at scale. Trusted by over 450+
              customers globally, it delivers secure, standardized reports
              with customizable formats - over 5,000 reports and a million
              data points captured to date.
            </p>

            {/* BUTTON */}
            <button
              className="
                relative
                overflow-hidden
                group
                w-[210px]
                sm:w-[239px]
                h-[52px]
                sm:h-[56px]
                rounded-full
                border
                border-[#1D1F221A]
                bg-[#C02429]
                flex
                items-center
                justify-center
                gap-[10px]
                uppercase
                text-white
                tracking-[2px]
                text-[13px]
                sm:text-[14px]
                transition-colors
                duration-300
                hover:bg-[#F9F7F2]
                hover:text-[#C02429]
                transform-gpu
                will-change-transform
              "
            >
              <span>Read More</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-[50px] md:gap-[80px] lg:gap-[120px]">
          
          {/* CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
            className="w-full lg:w-[499px] flex flex-col gap-5 md:gap-8"
          >
            {/* SMALL TITLE */}
            <p className="text-[11px] sm:text-[12px] font-semibold tracking-[1.47px] uppercase text-[#C02429] font-montserrat">
              Why choose JEF ?
            </p>

            {/* HEADING */}
            <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-[2px] sm:tracking-[3px] uppercase leading-[1.2] text-white font-montserrat">
              Our L&amp;D Center
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[15px] sm:text-[16px] font-light leading-[170%] text-white font-montserrat">
              At JEF, we are committed to continuous improvement and
              excellence. The L&amp;D Center is designed to enhance the skills
              and expertise of our employees, ensuring they stay ahead of
              industry trends and deliver superior service to our clients.
            </p>

            {/* BUTTON */}
            <button
              className="
                relative
                overflow-hidden
                group
                w-[210px]
                sm:w-[239px]
                h-[52px]
                sm:h-[56px]
                rounded-full
                border
                border-[#1D1F221A]
                bg-[#C02429]
                flex
                items-center
                justify-center
                gap-[10px]
                uppercase
                text-white
                tracking-[2px]
                text-[13px]
                sm:text-[14px]
                transition-colors
                duration-300
                hover:bg-[#F9F7F2]
                hover:text-[#C02429]
                transform-gpu
                will-change-transform
              "
            >
              <span>Read More</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
            className="w-full lg:w-[667px] h-[250px] sm:h-[320px] lg:h-[375px] overflow-hidden"
          >
            <img
              src="/HomePageImg/WhyChooseJEFImg/WhyChooseJef2.png"
              alt="L&D Center"
              className="
                w-full
                h-full
                object-cover
                transform-gpu
                will-change-transform
                transition-transform
                duration-700
                ease-out
                hover:scale-110
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}