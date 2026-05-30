"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const pages = [
  {
    label: "ACTIVE LIGHTNING PROTECTION SYSTEM",
    nav: "ACTIVE LIGHTNING\nPROTECTION SYSTEM",
    title: "ACTIVE LIGHTNING PROTECTION SYSTEM",
    content: (
      <>
        <p>NLP 2200 – ESE LIGHTNING ROD</p>
        <br />
        <p>
          Superior quality ESE lightning rod according to NFC 17-102 for up to
          120m protection radius.
        </p>
        <br />
        <p>NLP 2200 tested quality at your service by Cirprotech.</p>
      </>
    ),
    leftImage: "/lps/Image 46.png",
    rightImage: "/lps/Image 45.png",
  },
  {
    label: "ESE TECHNOLOGY",
    nav: "ESE TECHNOLOGY",
    title: "ESE TECHNOLOGY",
    content: (
      <>
        <p>
          ESE-Early Streamer Emission technology uses the atmospheric gradient to
          generate ionization which can subsequently increase the protected
          volume. These facilities the protection of large area, simplifying and
          reducing material and installation costs.
        </p>
        <br />
        <p>
          • Savings of over 30% compared to conventional Lightning Protection
          System.
        </p>
        <br />
        <p>• Easy to install and maintain.</p>
      </>
    ),
  },
  {
    label: "WHY NLP 2200?",
    nav: "WHY NLP 2200?",
    title: "WHY NLP 2200?",
    content: (
      <>
        <p>
          • The new 60 μs early streamer emission lightning rod designed by
          Cirprotech.
        </p>
        <br />
        <p>• Sequentially type-tested according to NFC 17-102 standards.</p>
        <br />
        <p>Protection Radius According to NFC 17-102:</p>
      </>
    ),
    tableImage: "/ese/nlp-2200-protection-radius-table.png",
  },
  {
    label: "FEATURES",
    nav: "FEATURES",
    title: "FEATURES",
    content: (
      <>
        <p>• IP67 Enclosure: Fully dust and waterproof.</p>
        <br />
        <p>
          • Designed and manufactured in Spain with highest quality controls.
        </p>
        <br />
        <p>
          • Stainless Steel (AISI 316 Grade): Superior quality and corrosion
          resistant.
        </p>
        <br />
        <p>
          • According to standards NFC 17-102, Product Complies with the newest
          ESE standards.
        </p>
      </>
    ),
  },
];

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;

const DetailedContent = () => {
  const [activePage, setActivePage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  useEffect(() => {
    if (isPaused || isManualPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (PROGRESS_INTERVAL / PROGRESS_DURATION) * 100;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [activePage, isPaused, isManualPaused, restartKey]);

  useEffect(() => {
    if (progress >= 100) {
      const next = (activePage + 1) % pages.length;
      setActivePage(next);
      setProgress(0);
    }
  }, [progress, activePage]);

  const handleTabClick = (index) => {
    if (index === activePage) {
      if (isManualPaused) {
        setIsManualPaused(false);
        setIsPaused(false);
      } else {
        setIsManualPaused(true);
      }
    } else {
      setIsManualPaused(false);
      setIsPaused(false);
      setActivePage(index);
      setActiveTags({});
      setProgress(0);
      setRestartKey((prev) => prev + 1);
    }
  };

  const page = pages[activePage];

  return (
    <section className="bg-[#161414] font-montserrat py-10 md:pt-16 md:pb-12 overflow-hidden min-h-[760px] flex flex-col">
      <div 
        onMouseEnter={() => !isManualPaused && setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="section-container flex flex-col flex-1 gap-6 md:gap-8"
      >
        <div className="w-full relative z-20 flex-1">
          <motion.div
            key={`page-${activePage}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="w-full"
          >
            <h2 className="text-[#C02427] text-[18px] md:text-[24px] font-bold tracking-[1.5px] md:tracking-[2px] leading-[1.4] uppercase mb-8">
              {page.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-16 items-start">
              <div className="flex flex-col">
                {React.Children.map(page.content.props.children, (child, i) => {
                  if (child.type === "p") {
                    return (
                      <p
                        key={i}
                        className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[1.7] text-white"
                      >
                        {child.props.children}
                      </p>
                    );
                  }
                  return child;
                })}

                {page.leftImage && (
                  <motion.img
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    src={page.leftImage}
                    alt="Active lightning protection diagram"
                    className="block w-[120px] md:w-[180px] lg:w-full lg:max-w-[260px] object-contain justify-self-center mx-auto lg:mx-0"
                  />
                )}

                {page.tableImage && (
                  <motion.img
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    src={page.tableImage}
                    alt="Protection radius table"
                    className="mt-6 w-full max-w-[680px] object-contain"
                  />
                )}
              </div>

             {page.rightImage && (
  <motion.img
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    src={page.rightImage}
    alt="NLP 2200 lightning rod"
    className="block w-[120px] md:w-[180px] lg:w-full lg:max-w-[260px] object-contain justify-self-center mx-auto lg:mx-0"
  />
)}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-20 pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10">
            {pages.map((tab, index) => {
              const isCurrent = activePage === index;

              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className="bg-none border-none cursor-pointer flex flex-col items-start w-full group"
                >
                  <div className="w-full h-[2px] bg-[#d4d0c8] mb-3 relative z-10">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-[#C02427]"
                      initial={{ width: 0 }}
                      animate={{
                        width: isCurrent
                          ? `${progress}%`
                          : activePage > index
                          ? "100%"
                          : "0%",
                      }}
                      transition={{ ease: "linear" }}
                    />
                  </div>

                  <span
                    className={`text-[10px] md:text-[12px] lg:text-[13px] tracking-[1px] font-medium uppercase mt-1 transition-all duration-300 text-left whitespace-pre-line ${
                      isCurrent
                        ? "text-[#C02427]"
                        : "text-[#d4d0c8] group-hover:text-white"
                    }`}
                  >
                    {tab.nav}
                  </span>

                  {isCurrent && isManualPaused && (
                    <span className="mt-2 text-[9px] uppercase tracking-[1px] text-[#C02427]">
                      Paused
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedContent;