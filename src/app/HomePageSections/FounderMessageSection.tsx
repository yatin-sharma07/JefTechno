"use client";

import { motion } from "framer-motion";

export default function FounderMessageSection() {
  return (
    <section className="overflow-hidden relative w-full h-auto bg-[#232427] -mt-px">
      <div className="section-container flex lg:items-end xl:items-start gap-0 md:gap-6 justify-between max-lg:flex-col">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col w-full lg:w-1/2 xl:w-3/5 2xl:w-1/2 py-16"
          >
            <div className="flex z-10 lg:mt-12 2xl:mt-0 flex-col items-start mr-0 font-light text-red-700 max-md:mt-10 max-md:max-w-full">
              
              {/* HEADING */}
              <h1 className="text-3xl Y-axis-text font-bold uppercase tracking-[3px] max-md:max-w-full ">
                Founder's message
              </h1>

              {/* DESCRIPTION */}
              <div className="self-stretch Y-axis-text sm:my-12 space-y-5 lg:text-base 2xl:text-xl 2xl:leading-8 text-white max-md:my-12 max-md:max-w-full">
                <p>
                  Every single day, we endeavour to make more customers across
                  continents
                  <br />
                  benefit from our work as a step to enhance reliability &
                  safety in the electrical
                  <br />
                  network.
                </p>

                <p>
                  Over the last 30 years of our existence, we have served more
                  than 10K+
                  <br />
                  customers in 30+ countries. Consistently meeting & exceeding
                  their
                  <br />
                  expectations at every given opportunity, we at Team JEF have
                  created a
                  <br />
                  formidable track record for ourselves.
                </p>

                <p>
                  No wonder customers <strong>THINK "JEF"</strong> when they{" "}
                  <strong>THINK ELECTRICAL</strong>
                  <br />
                  engineering.
                </p>
              </div>

              {/* FOUNDER INFO */}
              <div className="Y-axis-text-founder text-white">
                <h2 className="text-xl lg:text-2xl font-semibold max-md:text-4xl">
                  {"Prashanth BG"}
                </h2>

                <p className="text-xl lg:text-xl max-md:max-w-full">
                  {"Chairman and Managing Director"}
                </p>

                <p className="text-xl lg:text-xl">{"JEF Group"}</p>
              </div>
            </div>
          </motion.div>

          {/* DESKTOP IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
            className="hidden lg:flex flex-col w-full lg:w-[542px] mt-auto 2xl:max-h-[600px]"
          >
            <img
             className="
  h-[70vh]
  md:max-lg:w-[420px]
  md:max-lg:h-[60vh]
  lg:w-[542px]
  lg:h-[60vh]
  xl:h-[70vh]
  transform-gpu
"
              src="/HomePageImg/founder.png"
              alt="Founder"
            />
          </motion.div>

          {/* MOBILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
            className="flex lg:hidden flex-col w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 lg:mt-auto 2xl:max-h-[600px]"
          >
            <img
              className="object-contain lg:h-full transform-gpu"
              src="/HomePageImg/founder.png"
              alt="Founder"
            />
          </motion.div>
        </div>
      </section>
  );
}