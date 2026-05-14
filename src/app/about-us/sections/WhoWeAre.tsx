"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhoWeAreSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex flex-col items-center w-full bg-[#232427] overflow-hidden relative">
      
      {/* WHO WE ARE */}
      <div className="flex flex-col items-center justify-center w-full pt-[80px] md:pt-[100px] pb-[80px] md:pb-[120px] px-5">
        
        <motion.header
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center justify-center text-center gap-[28px] md:gap-[32px] w-full mx-auto"
          style={{ maxWidth: "1279px" }}
        >
          
          {/* LOGO */}
          <motion.img
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            src="/HomePageImg/NavbarImg/JefTechno_logo_ 2.png"
            alt="company logo"
            className="w-[65px] md:w-[80px]"
          />

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
              text-[#C02429]
              font-semibold
              text-[26px]
              md:text-[32px]
              leading-[140%]
              tracking-[3.36px]
              uppercase
              font-montserrat
            "
          >
            WHO WE ARE
          </motion.h1>

          {/* TEXT SWITCH */}
          <div className="relative w-full max-w-[1255px] min-h-[420px] md:min-h-[320px]">
            
            <AnimatePresence mode="wait">

              {/* ORIGINAL TEXT */}
              {!showMore && (
                <motion.p
                  key="originalText"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0

                    text-[15px]
                    sm:text-[17px]
                    md:text-[20px]

                    font-normal
                    leading-[180%]
                    text-white
                    font-montserrat
                    text-center
                  "
                >
                  JEF is a specialist electrical engineering company with an
                  uncompromising focus on the safety and reliability of
                  electrical systems. Founded in 1994, we have built our
                  global presence the hard way — one technically demanding
                  project at a time, in industries and environments where the
                  standard of engineering is determined by the consequences
                  of getting it wrong.
                  <br />
                  <br />
                  Three decades of this work, across 30+ countries and 10k+
                  customers, have produced something that cannot be replicated
                  quickly: a depth of methodology, a body of proprietary
                  technology, and a team capable of operating at the frontier
                  of what electrical engineering analysis and assessment can
                  deliver. Our 9 granted patents — across India, the United
                  States, and the European Union — reflect the same conviction
                  that has guided the company since 1994: that the right
                  response to a gap in what the industry delivers is to build
                  something better.
                </motion.p>
              )}

              {/* READ MORE TEXT */}
              {showMore && (
                <motion.div
                  key="expandedText"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0

                    text-[15px]
                    sm:text-[17px]
                    md:text-[20px]

                    font-normal
                    leading-[180%]
                    text-white
                    font-montserrat
                    text-center
                  "
                >
                  <p>
                    Three decades of this work, across 30+ countries and 10k+
                    customers, have produced something that cannot be
                    replicated quickly: a depth of methodology, a body of
                    proprietary technology, and a team capable of operating
                    at the frontier of what electrical engineering analysis
                    and assessment can deliver.
                  </p>

                  <br />

                  <p>
                    Our 9 granted patents — across India, the United States,
                    and the European Union — reflect the same conviction that
                    has guided the company since 1994: that the right
                    response to a gap in what the industry delivers is to
                    build something better.
                  </p>

                  <br />

                  <p>
                    Every project undertaken by JEF is driven by a commitment
                    to engineering excellence, innovation, and uncompromising
                    safety standards that continue to shape critical
                    infrastructure globally.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <button
  onClick={(e) => {
    setShowMore((prev) => !prev);

    const button = e.currentTarget;
    const ripple = document.createElement("span");

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;

    Object.assign(ripple.style, {
      position: "absolute",
      borderRadius: "9999px",
      background: "rgba(255,255,255,0.25)",
      width: `${size}px`,
      height: `${size}px`,
      left: `${e.clientX - rect.left - size / 2}px`,
      top: `${e.clientY - rect.top - size / 2}px`,
      transform: "scale(0)",
      pointerEvents: "none",
      transition:
        "transform 0.7s ease-out, opacity 0.7s ease-out",
      opacity: "1",
    });

    button.appendChild(ripple);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ripple.style.transform = "scale(1)";
        ripple.style.opacity = "0";
      });
    });

    setTimeout(() => ripple.remove(), 750);
  }}
  className="
    relative
    overflow-hidden

    flex
    items-center
    justify-center

    px-8
    md:px-10

    h-[52px]
    md:h-[58px]

    rounded-full

    bg-[#C02429]

    text-white
    uppercase
    tracking-[2px]

    text-[13px]
    md:text-[14px]

    font-medium
    font-montserrat

    transition-all
    duration-300

    hover:bg-[#9E1B20]
    hover:scale-[1.03]

    active:scale-[0.98]
  "
>
  <span className="relative z-10">
    {showMore ? "Show Less" : "Read More"}
  </span>
</button>
          </motion.div>
        </motion.header>
      </div>
    </section>
  );
}