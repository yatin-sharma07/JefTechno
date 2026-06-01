"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PageNavigationProps {
  currentPage: string;
}

export default function Navigation({
  currentPage,
}: PageNavigationProps) {
  return (
    <section
      className="
        relative
        w-full

        bg-[#2D2E30]

        border-t
        border-[#2D2E30]

        overflow-hidden
      "
    >
      {/* CENTER DIVIDER */}
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-[#2D2E30]" />

      {/* CONTENT */}
      <div
        className="
          section-container
          relative
          z-10
          h-[48px]
          md:h-[56px]
          flex
          items-center
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            items-center

            gap-3

            text-[11px]
            md:text-[12px]

            uppercase

            tracking-[2px]
          "
        >
          {/* HOME */}
          <Link
            href="/"
            className="
              text-[#C02429]
              hover:text-white
              transition-colors
              duration-300
            "
          >
            Home
          </Link>

          {/* DIVIDER */}
          <span className="text-[#8A8A8A]">›</span>

          {/* CURRENT PAGE */}
          <span className="text-[#BDBDBD]">
            {currentPage}
          </span>
        </motion.div>
      </div>
    </section>
  );
}