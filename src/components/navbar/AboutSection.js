"use client";

import React, { useState } from "react";
import Link from "next/link";

const navigationItems = [
  { number: "01", title: "About JEF", path: "/about-us" },
  
  { number: "02", title: "employee login", path: "https://jef.greythr.com/uas/portal/auth/login?login_challenge=Eyc24yb1y9zy2yUBNmCv9Ldf3_Y0N2vN93N9IYi1pRfa0dnykYVmbb_1oc805RnfwsTk7AyGwA9kR323xDwfYI5YxfU4B5lhgti5dH9ctvCgKxSoNI3hyK0l_LQGQbPCFa6hv3M58G3UP1MVmmdwqjCwoi4_XF_2TgV615mY80SAhTgL0CRqhReLfQ1K5cWZo4EAiXCN-YCPTHzfG9b3Hb_0LvR4NCOoyQjF8x3lL66FlHMZZpSNQ_M5Q1yo-fOChxLBV9zxYPSmX95yYA38cDF_fevkLUNj9QDyu4lF_-GngV80Ddq3kW26yZ4wbeNdTSsjbluYcVCMHnsXOIhKx55w6y7pdz1LtdjLPEISRdIWUKa8fnWqo-txZBv0440xUAq6SOmTnDfhBNn6oa8Fsa5zkUkRBAz2rWF0rO0MGgJK34TkITmacevzLx1vIUYIYsJ2RoTqwY_V1a8S5iiW8tlQEPNkwPVKVn8zMCjYDllnU7fbdSFP8vKQGq8Zc4VHfvR9C-fJrs2BrULt9sD-dWKR8nkfaik8aj9AL6roofsir-3kbJgcMAUlSsV64wcuOY_-dEoRgtleOO2xv6UlOdZBBV_YcKUlwJ46OUsh3Ep-V6cR-oi4fif4dsR_Ei3-13X7MYLPVPazrKxtw-Es-OnnuYca7QObWc--6uxms6_UO7dMqvN99aDkJM7dQWNcDkEKhqg12kQDE1Gm3R2cQ2yhYHVzqRMYzW4-42FTZiNr94Zq-ECEEDwL4wuM8rASS4o4q7Zw7c0rEzUeY10Y1uoo_gTXIlSdF4dnhOI-iLgfX-ubNeI1AlHUCZnnRTwiB6l6PIy03zLa8qlvHefNnuVTq16nKiF_h2GlJf3h-2e64cM4g8J9EeVrLBqctxRTXd_MtSGf2qldHE5TZtFz7-XC4jHahW6CAedf-6Wvql5RRLTIZIpBUZhjWE0zVn41fa5qgJODMkxhasIpGv1f3WEVThfacDc77JEIxgnrpl90GYCtV95u4xKmdFeupyrJnA-9CWTUqUxzvsqmN6-Rx1CPQ6GSeL_up1Xpbrusqr_0QRXvl6Z3_Q4gx4Y3ZMbsylrDj-__nYSWnxGrtATEsZIR4uN5gLFzER76vgJWHCeYPBB_ONsI9nDRkNguwPwnjAoRwE6POmgMITKGI-p7j_ZopWkiNs64_ONS1F486LlSBf0QM-R9BZa2WiZQ1U8nCPM42FD-ozyOMpnkcYDC5dsU9c8FbgAskI3jCIkJg1JQYxlH-TZbJk9yBWQskbIh8qddfTGMl9CP2iR8gykPI77fZBi5sxcYnY4Wacj6SLMXWmHLHMDqv0jTOJk6" },
];

const contentMap = {
  "01": "JEF is a specialist electrical engineering company with an uncompromising focus on the safety and reliability of electrical systems.",
  "02": "Make more customers across the world benefit from our expertise and achieve 40% annual growth rate.",
};

const AboutSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-[#312D2D] max-md:px-5 max-md:pb-24">
      <div className="ml-10 max-w-full w-[994px]">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow gap-6 max-md:mt-10 max-md:max-w-full h-full">
              <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-7 items-center mt-11 uppercase tracking-[3.36px] max-md:mt-10"
                  >
                    <div className="self-stretch my-auto text-base text-red-700">
                      {item.number}
                    </div>
                    <Link
                      href={item.path || "#"}
                      onMouseEnter={() => setHoveredItem(item.number)}
                      className="self-stretch my-auto text-lg hover:text-gray-400 font-medium text-white"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a"
                        alt=""
                        className="w-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="shrink-0 w-0 border-l border-solid border-neutral-700 mt-[9%] min-h-full"
                role="separator"
                aria-orientation="vertical"
              ></div>
            </div>
          </nav>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div
              className={`transition-all duration-500 ease-in-out flex gap-10 mt-[10%] text-xl font-medium text-white uppercase tracking-[3.36px] max-md:mt-10 ${
                hoveredItem
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5"
              }`}
            >
              <Link href="/about-us">
                <h2 className="text-xs leading-5 hover:text-gray-400">
                  {hoveredItem ? contentMap[hoveredItem] : "About"}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
