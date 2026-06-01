"use client";

import React from "react";
import Link from "next/link";

const IndustriesItem = ({ path, icon, text }) => (
  <div className="flex gap-4 items-center mt-8 first:mt-10 transition-all duration-500 ease-in-out">
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
    />
    <Link href={path}>
      <div className="text-xs self-stretch hover:text-gray-400 my-auto uppercase">
        {text}
      </div>
    </Link>
  </div>
);

const IndustriesComponent = () => {
  const industries = [
    { icon: "../AboutUs/OilandGas.png", text: "Oil and Gas", path: "/industries/oilandgas" },
    { icon: "../AboutUs/PoweUtilities.png", text: "Power Utilities", path: "/industries/powerutilities" },
    { icon: "../AboutUs/MFplant.png", text: "Manufacturing Plant", path: "/industries/manufacturingplant" },
    { icon: "../AboutUs/ProcessPlant.png", text: "Process Plant", path: "/industries/processplant" },
    { icon: "../AboutUs/CBimg.png", text: "Data Centers", path: "/industries/commercialbuilding" },
    { icon: "../AboutUs/RenewableEnergy.png", text: "Renewable Energy", path: "/industries/renewableenergy" },
  ];

  return (
    <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-[#2D2E30] max-md:px-5 max-md:pb-24">
      <div className="ml-10 w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:w-full">
            <div className="flex gap-7 items-center mt-14 max-md:mt-10">
              <div className="text-base font-medium text-red-700 uppercase tracking-[3.36px]">01</div>
              <div className="flex gap-10 items-center">
                <h2 className="text-lg font-medium text-white uppercase tracking-[3.36px]">OUR INDUSTRIES</h2>
                <div className="flex items-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a" alt="" className="w-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-3/5 max-md:w-full">
            <div className="flex flex-wrap gap-10 text-base font-medium text-white uppercase tracking-[3.36px] max-md:mt-10">
              <div className="shrink-0 w-0 border-l border-solid border-neutral-700 mt-[9%] min-h-full" />
              <div className="grid grid-cols-2 gap-x-20 gap-y-10 grow items-start my-auto">
                {industries.map((industry, index) => (
                  <IndustriesItem key={index} {...industry} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesComponent;
