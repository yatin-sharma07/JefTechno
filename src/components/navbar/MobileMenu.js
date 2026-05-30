"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { TranslationContext } from "../../context/TranslationContext";

const MobileMenu = () => {
  
  const [activeMenu, setActiveMenu] = useState("main");
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (label) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const faqData = {
    main: [
      { label: "Home", path: "/" },
      { label: "About", key: "about" },
      { label: "Our Business", key: "business" },
      
      { label: "Blogs", path: "/blog" },
      { label: "JEF UAE", path: "/jef-uae" },
      { label: "JEF SHIELD", path: "/jef-shield" },
      { label: "JEF SAFE", path: "#" },
    ],
    about: [
      { label: "About Us", path: "/about-us" },
     
      { label: "Employee Login", path: "/coming-soon" },
    ],
    business: [
      { label: "Our Products", key: "products" },
      { label: "Audit Services", key: "audit" },
      { label: "Consulting Services", key: "consulting" },
    ],
    products: [
      { label: "CLPS", path: "/clps-products" },
      { label: "Earthing Grounding", path: "/earthing-studies" },
      { label: "ESE", path: "/ese-lightning-protection" },
      { label: "ESA Lightning Protection", path: "/lightning-protection-studies" },
      { label: "JEF-SHIELD & E-BUILD", path: "/coming-soon" },
      { label: "SPD", path: "/surge-protective-devices" },
    ],
    audit: [
      { label: "Earthing Health Assessment", path: "/audit-services/earthing-health-assessment" },
      { label: "Instrumentation Systems", path: "/audit-services/instrumentation-system" },
      { label: "Lightning Protection Audit", path: "/audit-services/lightning-protection-sytem-adequacy-audit" },
      { label: "Power Quality Studies", path: "/audit-services/power-quality-studies-and-analysis-services" },
      { label: "Electrical Fire Safety", path: "/audit-services/electical-and-fire-safety-audit" },
    ],
    consulting: [
      { label: "INDUSTRIAL", path: "/power-system-studies" },
      { 
        label: "Renewable", 
        path: "/renewable",
        subItems: [
          { label: "Renewable", path: "/renewable" },
          { label: "PSA", path: "/power-system-studies" },
          { label: "RCA", path: "/root-cause-analysis" },
        ]
      },
    ],
    industries: [
      { label: "Oil and Gas", path: "/industries/oilandgas" },
      { label: "Power Utilities", path: "/industries/powerutilities" },
      { label: "Manufacturing Plant", path: "/industries/manufacturingplant" },
    ],
  };

  return (
    <div className="h-full w-full bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* MAIN MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300  ${
          activeMenu === "main" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {faqData.main.map((item, index) =>
          item.path ? (
            <Link key={index} href={item.path}>
              <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
                <span className="uppercase text-white-500 text-lg">
                  {item.label}
                </span>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              onClick={() => setActiveMenu(item.key)}
              className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer "
            >
              <span className="uppercase text-white-500 text-lg">
                {item.label}
              </span>
              <img
                src="/AboutUs/DropDownArr.png"
                alt="→"
                className="w-4 h-4 object-contain -rotate-90"
              />
            </div>
          ),
        )}
      </div>

      {/* ABOUT MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "about" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("main")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>ABOUT</span>
        </div>
        {faqData.about.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* BUSINESS MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "business" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("main")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>OUR BUSINESS</span>
        </div>
        {faqData.business.map((item, index) => (
          item.path ? (
            <Link key={index} href={item.path}>
              <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
                <span>{item.label}</span>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              onClick={() => setActiveMenu(item.key)}
              className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer "
            >
              <span className="uppercase text-white-500 text-lg">
                {item.label}
              </span>
              <img
                src="/AboutUs/DropDownArr.png"
                alt="→"
                className="w-3 h-3 object-contain -rotate-90"
              />
            </div>
          )
        ))}
      </div>

      {/* PRODUCTS MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "products" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("business")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>OUR PRODUCTS</span>
        </div>
        {faqData.products.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* AUDIT MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "audit" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("business")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>AUDIT SERVICES</span>
        </div>
        {faqData.audit.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* CONSULTING MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "consulting" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("business")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>CONSULTING SERVICES</span>
        </div>
        {faqData.consulting.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <div
                onClick={() => {
                  if (item.path && expandedItems[item.label]) {
                    window.location.href = item.path;
                  } else {
                    toggleItem(item.label);
                  }
                }}
                className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer"
              >
                <span className="uppercase text-white-500 text-lg">
                  {item.label}
                </span>
                <img
                  src="/AboutUs/DropDownArr.png"
                  alt="v"
                  className={`w-3 h-3 object-contain transition-transform duration-300 ${
                    expandedItems[item.label] ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </div>
            ) : item.path ? (
              <Link href={item.path}>
                <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
                  <span>{item.label}</span>
                </div>
              </Link>
            ) : (
              <div
                onClick={() => toggleItem(item.label)}
                className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer"
              >
                <span className="uppercase text-white-500 text-lg">
                  {item.label}
                </span>
                <img
                  src="/AboutUs/DropDownArr.png"
                  alt="v"
                  className={`w-3 h-3 object-contain transition-transform duration-300 ${
                    expandedItems[item.label] ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </div>
            )}

            {/* Sub-items dropdown */}
            {item.subItems && expandedItems[item.label] && (
              <div className="bg-[#262626]">
                {item.subItems.map((sub, i) => (
                  <Link key={i} href={sub.path}>
                    <div className="flex justify-between items-center px-12 py-4 border-b border-gray-800 cursor-pointer text-sm text-gray-300">
                      {sub.label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* INDUSTRIES MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "industries" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("main")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>INDUSTRIES</span>
        </div>
        {faqData.industries.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
