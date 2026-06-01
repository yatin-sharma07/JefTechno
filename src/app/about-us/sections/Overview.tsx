"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Overview = () => {
  const stats = [
     {
      img: "/AboutUs/30plusyears.png",
      label: "30+ YEARS",
    },
    {
      img: "/AboutUs/countries.png",
      label: "30+ COUNTRIES",
    },
    {
      img: "/AboutUs/customers.png",
      label: "10K CUSTOMERS",
    },
    {
      img: "/AboutUs/patents.png",
      label: "9 PATENTS",
    },
    {
      img: "/AboutUs/retention_rate.png",
      label: "90% RETENTION RATE",
    },
   
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        flex
        justify-center
        items-center
        py-[80px]
        md:py-[100px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/AboutUs/OverviewBg.png"
        alt="JEF By The Numbers Background"
        fill
        priority
        className="object-cover "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* CONTENT */}
      <div
        className="
          section-container
          relative
          z-10
          flex
          flex-col
          items-center
          gap-[50px]
          md:gap-[70px]
        "
      >
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="
            text-white

            text-[26px]
            md:text-[32px]

            font-bold

            tracking-[3px]
            md:tracking-[4.53px]

            uppercase

            text-center
          "
        >
          OUR REACH
        </motion.h1>

        {/* STATS GRID */}
        <div
          className="
            w-full
    max-w-[1200px]
    mx-auto
    grid
    grid-cols-2
    md:grid-cols-3
    xl:grid-cols-5
    gap-y-[40px]
    gap-x-[12px]
    place-items-center

            place-items-center
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="
                flex
                flex-col
                items-center
                justify-center

                text-center

                group
              "
            >
              {/* ICON */}
              <div
                className="
                  relative

                  w-[120px]
                  h-[120px]

                  sm:w-[135px]
                  sm:h-[135px]

                  md:w-[150px]
                  md:h-[150px]

                  transition-transform
                  duration-500

                  group-hover:scale-105
                "
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>

             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;