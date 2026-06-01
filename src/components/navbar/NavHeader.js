"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { TranslationContext } from "../../context/TranslationContext";
import Image from "next/image";

const menuItems = [
  { label: "About", hasDropdown: true },
  { label: "Our Business", hasDropdown: true },
  { label: "Our Blogs", hasDropdown: false, path: "/blog" },
  //{ label: "Our Industries", hasDropdown: true },
  { label: "JEF UAE", hasDropdown: false },
  { label: "JEF SHIELD", hasDropdown: false,path:"https://www.jeftechno.com/JEF_SHIELD/login.php" },
 
];

const NavHeader = ({
  handleMenuHover,
  handleMouseLeave,
  toggleDropdown,
  isDropdownVisible,
  setIsDropdownVisible,
  toggleSlideMenu,
  isArabic,
  toggleTranslation,
}) => {
  const pathname = usePathname();

  const buttonVariants = {
    hidden: { opacity: 0, y: 50, transition: { duration: 0.4, ease: "easeOut" } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex flex-col pt-6 w-full h-full max-md:max-w-full">
      <header className="flex relative lg:gap-20 justify-between items-center self-center section-container max-md:max-w-full ">
        <Link href={"/"} className="z-20 lg:-ml-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f72711985a65d5e9cccf583145ef02cf25367e53a9dbd9152d31ad79b46cc8c?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
            alt="JEF Company logo"
            className="object-contain w-[7rem] lg:w-[7rem] 2xl:w-[8rem] "
          />
        </Link>

        <div className="flex justify-between w-screen">
          <nav className="flex gap-5 xl:gap-10 items-center my-auto max-md:max-w-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="lg:flex cursor-pointer hidden gap-2 justify-center items-center self-stretch my-auto group"
              >
                {item.path ? (
                  <Link
                    href={item.path}
                    className={`nav-item cursor-pointer uppercase md:text-xs xl:text-sm font-medium tracking-[2px] text-white ${
                      pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onMouseEnter={() => handleMenuHover(item.label)}
                    onMouseLeave={handleMouseLeave}
                    className="nav-item cursor-pointer uppercase md:text-xs xl:text-sm font-medium text-white tracking-[2px]"
                  >
                    {item.label}
                  </button>
                )}
                {item.hasDropdown && (
                  <div
                    className="flex cursor-pointer flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-8 min-h-[20px]"
                    onMouseEnter={() => handleMenuHover(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      loading="lazy"
                      src="/HomePageImg/NavbarImg/Dropdown.png"
                      alt="Dropdown"
                      className="object-contain w-5 hidden lg:block transition-transform duration-300 transform group-hover:rotate-180"
                    />
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex gap-6 items-center lg:-mr-6 self-stretch my-auto max-md:max-w-full text-center">
            <h1 className="font-medium text-white text-[16px] tracking-[2px]">
              JEF SAFE
            </h1>
             <Image
        src="/nav-jef-safe.png"
        alt="Menu"
        width={20}
        height={20}
        className="object-contain w-11 transition-transform duration-300 transform group-hover:rotate-180"
      />
          </div>

          <div className="flex lg:hidden gap-6 items-center self-stretch my-auto text-center">
            {/* Hamburger Icon for Mobile */}
            <button
              className="p-2 text-white hover:text-red-500 transition-colors duration-200"
              onClick={toggleSlideMenu}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="relative shrink-0 mt-7 h-0 border-b border-solid border-neutral-600 max-md:max-w-full" />
     
    </div>
  );
};

export default NavHeader;
