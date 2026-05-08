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
        { name: 'JEF Leadership Team', path: '/leadership-team' },
        {name:'Careers',path:'/careers'}
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
        {name:"Contact Us",path:""}
    ];
    const itemInternalUse = [
        {name:'Employee Login',path:'/coming-soon'  }
    ];
    const itemJefShield = [
        {name:'Risk Assesment Tool',path:'/coming-soon'  }
    ];

  

    return (
        <main className="flex overflow-hidden flex-col items-center  lg:pt-24 bg-stone-800">
            <div className="hidden lg:flex flex-col md:flex-row w-[88vw] max-w-[95vw] tracking-wider justify-between ">
                <Section title="About" items={itemsAbout} />
                <Section title="Locations" items={itemsLocation} />
                <Section title="Our Businesses" items={itemsBusiness} />
                <Section title="News" items={itemNews} />
               
            </div>
            <div className='flex justify-start gap-20 w-full md:pl-20'>
                <Section title="Internal USe" items={itemInternalUse} />
                <Section title="Jef Shield" items={itemJefShield}/>
            </div>
            <div className='lg:hidden'>
                < FAQComponent />

            </div>
            <Footer />
        </main>
    );
}


function Footer() {

    return (
        <footer className="card-slider-footer flex flex-col items-center pt-10 bg-stone-800">
            <hr className="hidden lg:block shrink-0 mt-2 max-w-[95vw] w-[88vw] border border-solid border-neutral-400 max-md:mt-8" />
            <div className="flex X-axis-card-anm-footer-footer flex-row gap-10 justify-between items-start mt-5 lg:w-[88vw] max-w-[95vw]">
                <div className="hidden  card-slider-footer X-axis-card-anm-footer lg:block text-xl tracking-widest text-white uppercase max-md:max-w-full">
                    FOLLOW jef ON SOCIAL MEDIA
                </div>
                <div className="flex X-axis-card-anm-footer flex-row h-full space-x-12 lg:space-x-6">
                    <a href="https://www.youtube.com/@JEFgroup" target="_blank" className="object-contain card-slider-footer"><img src="../FooterLogo/Link - Youtube.png" alt="YoutubeImg" /></a>
                    <a href="https://www.facebook.com/JEFTECHNO/" target="_blank" className="object-contain card-slider-footer"><img src="../FooterLogo/Link - Facebook.png" alt="FacebookImg" /></a>
                    <a href="https://www.linkedin.com/showcase/jef-engineering-services-middle-east/" target="_blank" className="object-contain  card-slider-footer"><img src="../FooterLogo/Link - Linkedin.png" alt="LinkedInImg" /></a>
                    <a href="https://x.com/JeftechnoIndia" target="_blank" className="object-contain card-slider-footer"><img src="../FooterLogo/Link - Twitter.png" alt="TwitterImg" /></a>
                </div>
            </div>
            <div className="flex overflow-hidden flex-col justify-center items-center  py-7 mt-6 w-screen text-white bg-stone-900  max-md:max-w-full">
                <div className="flex X-axis-card-anm-footer flex-wrap justify-between gap-6 w-full lg:w-[88vw] max-w-[95vw] max-md:max-w-full">
                    <div className="flex card-slider-footer shrink gap-4 mx-auto lg:mx-0 lg:self-start text-[10px] sm:text-xs font-light basis-auto grow-0 tracking-widest">
                        <Link href="/privacypolicy" >Privacy Policy</Link>
                        <Link href="/termsandconditions" >· Terms of Use</Link>
                        <Link href="/cookiepolicy" >· Cookie Policy</Link>
                        <span>2026 © Jef</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-white text-sm'>
                            Production company · Obrive
                        </p>
                         <a className=' ml-[5px]' href="https://obnov.in" target="_blank" rel="noopener noreferrer"><img src="../FooterLogo/obriveLogo.png" alt="ObnovLogo" className='h-4' /></a>

                    </div>
                    <div className="sm:text-xs text-[10px] card-slider-footer mx-auto lg:mx-0 flex gap-0 tracking-wide max-md:max-w-full">
                       <p className="text-xs text-gray-400">
  CThis site is protected by reCaptcha and the google{" "}
  <span>
    <Link href="/privacypolicy" className="text-white transition text-sm">
      Privacy Policy
    </Link>
  </span>{" "}
  and{" "}
  <span>
    <Link href="/termsandconditions" className="text-white transition text-sm">
      Terms of Use
    </Link>
  </span>
   {" "}apply
</p>
                       
                    </div>
                </div>
            </div>
        </footer>
    );
}



function Section({ title, items }) {
    return (
        <section className="flex .card-slider-footer X-axis-card-anm-footer flex-col min-h-[234px] w-[219px]">
            <header className="w-full text-xl font-bold tracking-widest text-red-700 uppercase whitespace-nowrap">
                {title}
            </header>
            <ul className="flex overflow-hidden font-light flex-col mt-4 w-full text-base leading-none text-gray-300">
                {items.map((item, index) => (
                    <li key={index} className="flex flex-col justify-center items-start py-2.5 w-full">
                        <div className="flex items-center">
                            <Link href={item.path}><div className="self-stretch my-auto">{item.name}</div></Link>
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
                { label: 'What is JEF', path: '/about-us' },
                { label: 'JEF leadership team', path: '/leadership-team' },
                { label: 'JEF Smart Digitization', path: '/SmartDigitalization' },
                { label: 'JEF L&D Centre', path: '/L&D-Centre' }
            ],
            isOpen: false
        },
        {
            question: "Our Business",
            content: [
                { label: 'Power System Studies', path: '/power-system-studies' },
                { label: 'Power Quality Studies', path: '/power-quality-studies' },
                { label: 'Earthing Studies', path: '/earthing-studies' },
                { label: 'LPS System Studies', path: '/lightning-protection-studies' },
                { label: 'Instrumentation Studies', path: '/instrumentation-earthing-studies' },
                { label: 'Root Cause Analysis', path: '/root-cause-analysis' },
                { label: 'EMI EMC', path: '/emi-emc' },

            ],
            isOpen: false
        },
        {
            question: "Locations",
            content: [
                { label: 'Mena', path: '' },
                { label: 'Europe', path: '' },
                { label: 'Asia', path: '' },
            ],
            isOpen: false
        },
        {
            question: "Industries",
            content: [
                { label: 'Sectors', path: '/industries/oilandgas' },
                { label: 'Partners', path: '/industries/powerutilities' },
            ],
            isOpen: false
        },
        {
            question: "Careers",
            content: [
                { label: 'Working at jef', path: '/careers' },
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
            if (isOpen && contentRef.current) {
                setHeight(contentRef.current.scrollHeight);
            } else {
                const timeout = setTimeout(() => {
                    setHeight(0);
                }, 1000); // Match this duration with the transition duration

                return () => clearTimeout(timeout);
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
            <div className=" flex flex-col justify-center p-px self-center border-b w-[85%] border-solid bg-transparent bg-opacity-70 max-md:max-w-full">
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
                    className="overflow-hidden transition-all w-[100vw] duration-300 ease-in-out"
                    style={{ maxHeight: `${height}px` }}
                >
                    <div className="px-5 py-5">
                        {/* Render content based on whether it's an array or a string */}
                        {Array.isArray(content) ? (
                            <ul>
                                {content.map((item, idx) => (
                                    <li key={idx} className="mb-2">
                                        <Link href={item.path}>
                                            <div className="text-stone-300 hover:underline">
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
                <h1 className="pb-px w-full text-4xl leading-loose uppercase whitespace-nowrap text-zinc-800 tracking-[3.36px] max-md:max-w-full">
                    FAQ
                </h1>
                <div className="flex max-md:flex-col justify-between items-start w-full max-md:max-w-full">
                    <div className="flex flex-col pt-5 min-w-[240px] w-full lg:w-[48%] max-md:max-w-full">
                        {faqData.slice(0, 5).map((item, index) => (
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