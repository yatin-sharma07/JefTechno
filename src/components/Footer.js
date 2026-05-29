'use client';

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function MainFooter() {


    useEffect(() => {
        // Select all elements with the 'X-axis-anm' class and apply staggered animation
        gsap.fromTo(
            gsap.utils.toArray('.X-axis-card-anm-footer'),
            { opacity: 0, x: 100 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2, // 0.3s delay between each card animation
                scrollTrigger: {
                    trigger: '.card-slider-footer',
                    start: 'top 80%',
                    end: 'top 100%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);



    const itemsAbout = [
        { name: 'Who we are', path: '/about-us' },

        {name:'Careers',path:'/careers'},
                { name: 'Contact us', path: '/contact-us' },
    ];

    const itemsLocation = [
        { name: 'India', path: '' },
        { name: 'UAE', path: '' },
        { name: 'USA', path: '' },
    ];

    const itemsBusiness = [
        { name: 'Our Products', path: '' },
        { name: 'Audit Services', path: '' },
        { name: 'Consulting Services', path: '' },
    ];

    const itemNews = [
        { name: 'All Blogs', path: '/blog' },
        {name:"Resources",path:""},
        {name:'Events',path:""},
      
    ];
    const itemInternalUse = [
        {name:'Employee Login',path:'/coming-soon'  }
    ];
    const itemJefShield = [
        {name:'Risk Assesment Tool',path:'/coming-soon'  }
    ];

  

    return (
       <main className="flex overflow-hidden flex-col items-center lg:pt-24 bg-[#2D2E30]">

    {/* FIRST ROW */}
    <div className="section-container hidden lg:flex flex-row tracking-wider justify-between">
        <Section title="About" items={itemsAbout} />
        <Section title="Locations" items={itemsLocation} />
        <Section title="Our Businesses" items={itemsBusiness} />
        <Section title="News" items={itemNews} />
    </div>

    {/* SECOND ROW */}
    <div className="section-container hidden lg:flex mt-10 gap-20">
        <Section title="Internal Use" items={itemInternalUse} />
        <Section title="Jef Shield" items={itemJefShield} />
    </div>

    {/* MOBILE FAQ */}
    <div className="lg:hidden w-full">
        <FAQComponent />
    </div>

    <Footer />
</main>
    );
}


function Footer() {

    return (
        <footer className="card-slider-footer flex flex-col items-center pt-10 bg-[#2D2E30] w-full">
            <hr className="section-conxtainer hidden lg:block shrink-0 mt-2 border border-solid border-neutral-400 max-md:mt-8" />
            <div className="section-container flex X-axis-card-anm-footer-footer flex-row gap-10 justify-center lg:justify-between items-start mt-5 py-6 bg-[#2D2E30]">
                <div className="hidden  card-slider-footer X-axis-card-anm-footer lg:block text-xl tracking-widest text-white uppercase max-md:max-w-full">
                    FOLLOW jef ON SOCIAL MEDIA
                </div>
                <div className="flex X-axis-card-anm-footer flex-row items-center h-full space-x-12 lg:space-x-6">
                    <a href="https://www.youtube.com/@JEFgroup" target="_blank" className="object-contain card-slider-footer"><img src="../FooterLogo/Link - Youtube.png" alt="YoutubeImg" /></a>
                    <a href="https://www.facebook.com/JEFTECHNO/" target="_blank" className="object-contain card-slider-footer"><img src="../FooterLogo/Link - Facebook.png" alt="FacebookImg" /></a>
                    <a href="https://www.linkedin.com/showcase/jef-engineering-services-middle-east/" target="_blank" className="object-contain  card-slider-footer"><img src="../FooterLogo/Link - Linkedin.png" alt="LinkedInImg" /></a>
                    <a href="https://x.com/JeftechnoIndia" target="_blank" className="object-contain card-slider-footer"><img src="../FooterLogo/Link - Twitter.png" alt="TwitterImg" /></a>
                    <a href="https" target="_blank" className="object-contain h-8 text-gray-400 w-8 card-slider-footer"><img src="../FooterLogo/Instagram.png" alt="InstagramImg" /></a>
                </div>
            </div>
            <div className="flex overflow-hidden flex-col justify-center items-center py-7 mt-6 w-screen text-white bg-stone-900">
  <div className="section-container flex flex-col lg:flex-row items-center lg:items-center justify-between gap-5">

    {/* LEFT */}
    <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 text-[10px] sm:text-xs font-light tracking-widest text-center">
      <Link href="/privacypolicy">Privacy Policy</Link>
      <Link href="/termsandconditions">· Terms of Use</Link>
      <Link href="/cookiepolicy">· Cookie Policy</Link>
      <span>2026 © Jef</span>
    </div>

    {/* CENTER */}
    <div className="flex flex-wrap justify-center items-center gap-2 text-center">
      <p className="text-white text-xs sm:text-sm">
        Production company · Obrive
      </p>

      <a
        className="ml-[2px]"
        href="https://obrive.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../FooterLogo/obrive-footer-logo.png"
          alt="ObnovLogo"
          className="h-4 object-contain"
        />
      </a>
    </div>

    {/* RIGHT */}
    <div className="w-full lg:w-auto text-center lg:text-right">
      <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">
        This site is protected by reCaptcha and the Google{" "}
        <Link
          href="/privacypolicy"
          className="text-white transition text-[10px] sm:text-xs"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/termsandconditions"
          className="text-white transition text-[10px] sm:text-xs"
        >
          Terms of Use
        </Link>{" "}
        apply
      </p>
    </div>

  </div>
</div>
        </footer>
    );
}



function Section({ title, items }) {
    return (
        <section className="flex card-slider-footer X-axis-card-anm-footer flex-col min-h-[234px] w-full sm:w-[219px]">
            <header className="w-full text-xl font-bold tracking-widest text-red-700 uppercase whitespace-nowrap">
                {title}
            </header>
            <ul className="flex overflow-hidden font-light flex-col mt-4 w-full text-base leading-none text-gray-300">
                {items.map((item, index) => (
                    <li key={index} className="flex flex-col justify-center items-start py-2.5 w-full">
                        <div className="flex items-center">
                           <Link href={item.path}>
  <div className="self-stretch my-auto transition-colors duration-300 hover:text-[#C02429]">
    {item.name}
  </div>
</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}






// -----------------------------------------------------------------------------------------------------


const FAQComponent = () => {
    const [faqData, setFaqData] = useState([
        {
            question: "ABOUT",
            content: [
                { label: 'Who we are', path: '/about-us' },
               
                { label: 'Career', path: '/careers' },
                { label: 'Contact Us', path: '/contact' }
            ],
            isOpen: false
        },
        {
            question: "Our Business",
            content: [
                { label: 'Our Products', path: '/power-system-studies' },
                { label: 'Audit Services', path: '/audit-services' },
                { label: 'Consulting Services', path: '/consulting-services' },
               

            ],
            isOpen: false
        },
        {
            question: "Locations",
            content: [
                { label: 'India', path: '' },
                { label: 'UAE', path: '' },
                { label: 'USA', path: '' },
            ],
            isOpen: false
        },
        
        {
            question: "News",
            content: [
                { label: 'All Blogs', path: '/blogs' },
                 { label: 'Resources', path: '/resources' },
                  { label: 'Events', path: '/events' },
            ],
            isOpen: false
        },
         {
            question: "Jef Shield",
            content: [
                { label: 'Risk Assesment Tool', path: '/coming-soon' },
            ],
            isOpen: false
        },
         {
            question: "Internal Use",
            content: [
                { label:"Employee login", path:"/coming-soon" },
            ],
            isOpen: false
        },
    ]);

    const toggleFAQ = (index) => {
        setFaqData(
            faqData.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : false // Close other items
            }))
        );
    };

    const FAQItem = ({ question, content, isOpen, onToggle }) => {
        const contentRef = useRef(null);
        const [height, setHeight] = useState(0);

       useEffect(() => {
    if (contentRef.current) {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }
}, [isOpen]);

        useEffect(() => {
            // Select all elements with the 'X-axis-anm' class and apply staggered animation
            gsap.fromTo(
                gsap.utils.toArray('.X-axis-card-anm-footer'),
                { opacity: 0, x: 100 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2, // 0.3s delay between each card animation
                    scrollTrigger: {
                        trigger: '.card-slider-footer',
                        start: 'top 80%',
                        end: 'top 100%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, []);

        return (
            <div className="flex flex-col justify-center p-px self-center border-b w-full px-5 border-solid bg-transparent bg-opacity-70 max-md:max-w-full">
                <div onClick={onToggle} className="flex gap-10 justify-between items-start py-5 md:py-10 w-full max-md:max-w-full">
                    <h2 className="self-stretch py-px leading-relaxed my-auto font-semibold text-lg md:text-xl tracking-wider uppercase text-red-600">
                        {question}
                    </h2>
                    <div className="flex flex-col items-start self-stretch my-auto min-h-[40px]">
                        <button
                            className="flex flex-col justify-center p-3 w-10 min-h-[40px]"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? "Close answer" : "Open answer"}
                        >
                            <img
                                loading="lazy"
                                src={
                                    isOpen
                                        ? "../AboutUs/DropUpArr.png"
                                        : "../AboutUs/DropdownArr.png"
                                }
                                alt=""
                                className="object-contain flex-1 w-full aspect-square"
                            />
                        </button>
                    </div>
                </div>
                <div
                    ref={contentRef}
                   className="overflow-hidden transition-[max-height] duration-500 ease-in-out w-full"
                    style={{ maxHeight: `${height}px` }}
                >
                    <div className="px-5 py-5">
                        {/* Render content based on whether it's an array or a string */}
                        {Array.isArray(content) ? (
                            <ul>
                                {content.map((item, idx) => (
                                    <li key={idx} className="mb-2">
                                        <Link href={item.path}>
                                            <div className="text-stone-300 hover:text-[#C02429] transition-colors duration-300">
                                                {item.label}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='text-gray-500'>{content}</p>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="flex overflow-hidden relative flex-col">
            <div className="flex absolute inset-0 z-0 flex-col py-0.5 w-full max-md:max-w-full"></div>
            <div className="flex z-0 flex-col self-center w-[95%] xl:w-[70%] lg:w-[80%]">
               
                <div className="flex max-md:flex-col justify-between items-start w-full max-md:max-w-full">
                    <div className="flex flex-col pt-5 min-w-[240px] w-full lg:w-[48%] max-md:max-w-full">
                        {faqData.slice(0, 7).map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                content={item.content} // Pass dynamic content
                                isOpen={item.isOpen}
                                onToggle={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

};

export default MainFooter;