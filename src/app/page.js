"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactUs from "../components/ContactUs";

gsap.registerPlugin(ScrollTrigger);

// Menu items for the navbar
const menuItems = [
  { label: "Home", hasDropdown: false },
  { label: "About", hasDropdown: true },
  { label: "Our Business", hasDropdown: true },
  { label: "News", hasDropdown: true },
  { label: "Careers", hasDropdown: false },
];

//  Why choose JEF section

const featureData = [
  {
    title: "Smart Digitization",
    description:
      "Our patented tool that provides end to end Digitization for conducting system studies gives us a unique leverage to deliver quality & consistency at scale.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c4c01e3bc7bed86c38d371bdd6bd1af13d97347baf0d4bf14d4585deece35459?apiKey=7904fd7afaaf4ee2b0837ab86d91b244&",
  },
  {
    title: "Our L&d centre",
    description:
      "Enhancing Value & Quality for Our Clients Through Our Continuous Learning & Development Program.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c07d5e60d7acc2dfbda12fa854cc93fa978c2cbc0d3964684876aa0f84fa2b99?apiKey=7904fd7afaaf4ee2b0837ab86d91b244&",
  },
];

// OurContact's Section

const inputFields = [
  { label: "Name", type: "text" },
  { label: "Email", type: "email" },
  { label: "Mobile Number", type: "tel" },
];

// Blog's Data

// const blogData = [
//   {
//     imageSrc: "./HomePageImg/BlogsSection/Img1.jpg",
//     title: "Ensuring Safety in the Oil and Gas Industry in the UAE",
//     path: 'BlogInside1'
//   },
//   {
//     imageSrc: "./HomePageImg/BlogsSection/Img2.jpg",
//     title: "Maximizing Economic Efficiency through Power Factor and Harmonic Studies in the UAE",
//     path: 'BlogInside2'
//   },
//   {
//     imageSrc: "./HomePageImg/BlogsSection/Img3.jpg",
//     title: "Enhancing Renewable Energy Reliability: Comprehensive Power System Studies in the UAE",
//     path: '/blog/enhance-reliability-efficiency-compliance-electrical-grid-power-system-studies'
//   },
//   {
//     imageSrc: "./HomePageImg/BlogsSection/Img4.jpg",
//     title: "Understanding the Importance of Power System Studies in the UAE",
//     path: 'BlogInside4'
//   },
//   {
//     imageSrc: "./HomePageImg/BlogsSection/Img1.jpg",
//     title: "Ensuring Safety in the Oil and Gas Industry in the UAE",
//     path: 'BlogInside1'
//   },
//   {
//     imageSrc: "./HomePageImg/BlogsSection/Img2.jpg",
//     title: "Maximizing Economic Efficiency through Power Factor and Harmonic Studies in the UAE",
//     path: 'BlogInside2'
//   },

// ];

// Carousel data with images, text, and dot colors
const carouselData = [
  {
    backgroundImage: "./HomePageImg/Img1.png",
    buttonImage: "./HomePageImg/ArrowImg.png",
    text: "THINK ELECTRICAL, THINK JEF",
    dotColors: ["bg-white", "bg-gray-400", "bg-gray-400"],
  },
  {
    backgroundImage: "./HomePageImg/Img2.png",
    buttonImage: "./HomePageImg/ArrowImg.png",
    text: "END-to-END SOLUTIONS FOR ELECTRICAL PROTECTION",
    dotColors: ["bg-gray-400", "bg-white", "bg-gray-400"],
  },
  {
    backgroundImage: "./HomePageImg/Img3.png",
    buttonImage: "./HomePageImg/ArrowImg.png",
    text: "EXCELLENCE THROUGH Digitization",
    dotColors: ["bg-gray-400", "bg-gray-400", "bg-white"],
  },
];

//button data for hover effect in What We do Section

const buttonData = [
  {
    image: "./HomePageImg/WhatWeDoSection/Earthing Studies 2.png",
    text: "Earthing studies",
    title: "EARTHING STUDIES PROJECTS COMPLETED",
    path: "/earthing-studies",
    totalProjects: 165,
    indiaProjects: 123,
    gcc: 42,
    description:
      "Earthing studies assess the performance of grounding systems through soil resistivity testing and resistance measurements. These studies help ensure compliance with safety standards, protect equipment, and prevent electrical hazards.",
    className: "mt-0 xl:mt-48",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Lightning Protection 2.png",
    text: "Lightning protection system studies",
    title: "Lightning Protection Studies Projects Completed",
    path: "/lightning-protection-studies",
    totalProjects: 233,
    indiaProjects: 195,
    gcc: 38,
    description:
      "The purpose of Lightning Protection System audit is to conduct lightning risk assessment and determine the level of protection required to the structure/facility as per the latest relevant standards. LPS Adequacy audit helps to manage and mitigate the risk due to lightning and protect the life and assets.",
    className: "mt-0 xl:mt-24 ml-0 ",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Power System Studies 2.png",
    text: "power system studies",
    title: "Power System Studies Projects Completed",
    path: "/power-system-studies",
    totalProjects: 74,
    indiaProjects: 58,
    gcc: 16,
    description:
      "A Power System Study involves analyzing various aspects of an electrical power system to identify potential issues and optimize performance. These studies include load flow analysis, short circuit studies, relay coordination, arc flash analysis, and more, all aimed at enhancing system reliability and safety.",
    className: "mt-10 md:mt-0 lg:mt-10 xl:mt-0",
  },
  {
    image:
      "./HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png",
    text: "power quality & root cause analysis",
    title: "Power Quality & Root Cause Studies Projects Completed",
    path: "/power-quality-studies",
    totalProjects: 66,
    indiaProjects: 36,
    gcc: 30,
    description:
      "A Power Quality Study involves a comprehensive analysis of your electrical system to identify disturbances and deviations in voltage, current, and frequency. These studies are essential for ensuring that your power supply is stable and free from issues that can lead to equipment malfunction or inefficiencies.",
    className: "mt-10 lg:mt-10 xl:mt-0 xl:-ml-10",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png",
    text: "instrumentation earthing",
    title: "Instrumentation Earthing Studies Projects Completed",
    path: "/instrumentation-earthing-studies",
    totalProjects: 32,
    indiaProjects: 24,
    gcc: "08",
    description:
      "An Instrumentation Earthing Study involves evaluating the earthing system of instrumentation and control systems to ensure proper grounding. This study helps prevent electrical noise, surges, and other issues that can affect the accuracy and reliability of instrumentation.",
    className: "mt-10 xl:-mt-24 xl:ml-0",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Emi Emc 2.jpg",
    text: "Earthing & Lightning Protection Solutions",
    title: "Earthing & Lightning Protection Solutions",
    path: "/earthing-&-lightning-protection-solutions",
    totalProjects: 414,
    indiaProjects: 348,
    gcc: "66",
    description:
      "Earthing and lightning protection system is the first step in any electrical system to ensure safety to human beings, prevent damages to assets and properties. We ensure all designs for earthing; lightning protection and transient overvoltage protection meet relevant National and International standards.",
    className: "mt-10 xl:-mt-48 xl:ml-0",
  },
  {
    image: "",
    text: "",
    title: "",
    path: "",
    gcc: "",
    description: "",
    className: "mt-10 xl:-mt-10 xl:ml-20",
  },
  {
    image: "",
    text: "",
    title: "",
    path: "",
    gcc: "",
    description: "",
    className: "mt-10 xl:-mt-36 xl:ml-0",
  },
];

const buttonData2 = [
  {
    image: "./HomePageImg/WhatWeDoSection/Solution-1.png",
    text: "Earthing System",
    title: "EARTHING System PROJECTS COMPLETED",
    path: "/earthing-system",
    totalProjects: 165,
    indiaProjects: 123,
    gcc: 42,
    description:
      "Earthing studies assess the performance of grounding systems through soil resistivity testing and resistance measurements. These studies help ensure compliance with safety standards, protect equipment, and prevent electrical hazards.",
    className: "mt-0 xl:mt-48",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Solution-2.png",
    text: "Earthing Design",
    title: "Earthing Design Projects Completed",
    path: "/earthing-design",
    totalProjects: 233,
    indiaProjects: 195,
    gcc: 38,
    description:
      "The purpose of Lightning Protection System audit is to conduct lightning risk assessment and determine the level of protection required to the structure/facility as per the latest relevant standards. LPS Adequacy audit helps to manage and mitigate the risk due to lightning and protect the life and assets.",
    className: "mt-0 xl:mt-24 ml-0 ",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Solution-3.png",
    text: "Grounding Solutions",
    title: "Grounding Solutions Projects Completed",
    path: "/grounding-solutions",
    totalProjects: 74,
    indiaProjects: 58,
    gcc: 16,
    description:
      "A Power System Study involves analyzing various aspects of an electrical power system to identify potential issues and optimize performance. These studies include load flow analysis, short circuit studies, relay coordination, arc flash analysis, and more, all aimed at enhancing system reliability and safety.",
    className: "mt-10 md:mt-0 xl:mt-0",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Solution-4.png",
    text: "Lightning Protection System",
    title: "Lightning Protection System Projects Completed",
    path: "/lightning-protection-system",
    totalProjects: 66,
    indiaProjects: 36,
    gcc: 30,
    description:
      "A Power Quality Study involves a comprehensive analysis of your electrical system to identify disturbances and deviations in voltage, current, and frequency. These studies are essential for ensuring that your power supply is stable and free from issues that can lead to equipment malfunction or inefficiencies.",
    className: "mt-10 md:mt-0 lg:mt-10 xl:mt-0 xl:-ml-10",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Solution-5.png",
    text: "ESE Lightning Protection",
    title: "ESE Lightning Protection Projects Completed",
    path: "/ese-lightning-protection",
    totalProjects: 32,
    indiaProjects: 24,
    gcc: "08",
    description:
      "An Instrumentation Earthing Study involves evaluating the earthing system of instrumentation and control systems to ensure proper grounding. This study helps prevent electrical noise, surges, and other issues that can affect the accuracy and reliability of instrumentation.",
    className: "mt-10 xl:-mt-24 xl:ml-0",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Solution-6.png",
    text: "CLPS Products",
    title: "CLPS Products Projects Completed",
    path: "/clps-products",
    totalProjects: 414,
    indiaProjects: 348,
    gcc: "66",
    description:
      "Earthing and lightning protection system is the first step in any electrical system to ensure safety to human beings, prevent damages to assets and properties. We ensure all designs for earthing; lightning protection and transient overvoltage protection meet relevant National and International standards.",
    className: "mt-10 xl:-mt-48 xl:ml-0",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Solution-7.png",
    text: "CDI Counter",
    title: "CDI Counter Projects Completed",
    path: "/cdi-counter",
    totalProjects: 32,
    indiaProjects: 24,
    gcc: "08",
    description:
      "An Instrumentation Earthing Study involves evaluating the earthing system of instrumentation and control systems to ensure proper grounding. This study helps prevent electrical noise, surges, and other issues that can affect the accuracy and reliability of instrumentation.",
    className: "mt-10 xl:-mt-10 xl:ml-20",
  },
  {
    image: "./HomePageImg/WhatWeDoSection/Solution-8.png",
    text: "Lightning Protection Design",
    title: "Lightning Protection Design Projects Completed",
    path: "/lightning-protection-design",
    totalProjects: 414,
    indiaProjects: 348,
    gcc: "66",
    description:
      "Earthing and lightning protection system is the first step in any electrical system to ensure safety to human beings, prevent damages to assets and properties. We ensure all designs for earthing; lightning protection and transient overvoltage protection meet relevant National and International standards.",
    className: "mt-10 xl:-mt-36 xl:ml-0",
  },
];

function Home() {
  // For blogs Animation

  useEffect(() => {
    // Select all elements with the 'X-axis-anm' class and apply staggered animation
    gsap.fromTo(
      gsap.utils.toArray(".X-axis-card-anm"),
      { opacity: 0, x: 120 },
      {
        x: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3, // 0.3s delay between each card animation
        scrollTrigger: {
          trigger: ".card-slider",
          start: "top 80%", // Adjusted start position
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".Y-axis-text").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    gsap.utils.toArray(".Y-axis-text-founder").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  // For X-axis animation ----------------------------------------

  useEffect(() => {
    gsap.utils.toArray(".X-axis-Title").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: 120 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const itemsPerPageMobile = 1; // 1 card on mobile
  const itemsPerPageTablet = 2; // 2 cards on tablet
  const itemsPerPageDesktop = 3; // 3 cards on desktop

  // Responsive value for `itemsPerPage`
  const [itemsPerPage, setItemsPerPage] = useState(1); // default to mobile

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setItemsPerPage(3); // Desktop
      } else if (width >= 768) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(1); // Mobile
      }
    };

    // Initial call
    updateItemsPerPage();

    // Optional: listen to resize changes
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalItems = blogData.length;

  // Function to handle the next slide
  const nextSlide = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Carousal Image's Animation

  const [index, setIndex] = useState(0);
  const coverRef = useRef(null);
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (index < 2) {
      gsap.fromTo(
        coverRef.current,
        {
          x: "100%",
          y: "-100%",
        },
        {
          x: "0%",
          yoyo: true,
          repeat: 1,
        },
      );
      gsap.to(carouselRef.current, {
        x: `-${(index + 1) * 33.33}%`,
      });
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      gsap.fromTo(
        coverRef.current,
        {
          x: "-100%",
          y: "-100%",
        },
        {
          x: "0%",
          y: "-100%",
          yoyo: true,
          repeat: 1,
        },
      );
      gsap.to(carouselRef.current, {
        x: `-${(index - 1) * 33.33}%`,
      });
      setIndex(index - 1);
    }
  };

  {
    /*Gsap Annimation*/
  }

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        // For larger screens (1025px and above)
        largeScreen: "(min-width: 1025px)",
        // For medium screens (768px to 1024px)
        mediumScreen: "(min-width: 768px) and (max-width: 1024px)",
        // For small screens (below 768px)
        smallScreen: "(max-width: 767px)",
      },
      (context) => {
        let { largeScreen, mediumScreen, smallScreen } = context.conditions;

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            toggleActions: "play none none reverse",
            start: "10 10%",
            end: "center 50%",
            pin: true,
          },
        });

        // Animations for larger screens (1025px and above)
        if (largeScreen) {
          tl.to(".title1", { x: "3vw", opacity: 0, scrub: true }, "display")
            .to(".description1", { y: "1rem", opacity: 0 }, "display")
            .fromTo(".title2", { x: "2vw", opacity: 0 }, { x: 0, opacity: 1 })
            .fromTo(
              ".description2",
              { y: "0.5rem", opacity: 0 },
              { y: 0, opacity: 1 },
            )
            .to(".image1", { x: "60rem", y: "-40rem" }, "display")
            .to(".image2", { x: "-63rem", y: "-40rem" }, "display")
            .to(".buttonRM0", { x: "300rem" }, "display")
            .fromTo(
              ".buttonRM1",
              { x: "20rem", opacity: 0 },
              { x: "0rem", opacity: 1 },
            );
        }

        // Animations for medium screens (768px to 1024px)
        if (mediumScreen) {
          tl.to(".title1", { x: "2vw", opacity: 0.5, scrub: true }, "display")
            .to(".description1", { y: "1rem", opacity: 0.5 }, "display")
            .fromTo(".title2", { x: "1vw", opacity: 0 }, { x: 0, opacity: 0.8 })
            .fromTo(
              ".description2",
              { y: "0.3rem", opacity: 0 },
              { y: 0, opacity: 0.8 },
            )
            .to(".image1", { x: "30rem", y: "-20rem" }, "display")
            .to(".image2", { x: "10rem", y: "-18rem" }, "display")
            .to(".buttonRM0", { x: "150rem" }, "display")
            .fromTo(
              ".buttonRM1",
              { x: "10rem", opacity: 0 },
              { x: "0rem", opacity: 1 },
            );
        }

        // Animations for small screens (below 768px)
        if (smallScreen) {
          tl.to(".SmImg1", { x: "-150%" }, "display")
            .to(".SmImg2", { x: "-113%" }, "display")
            .to(".textSM1", { y: "200%" }, "display")
            .to(".textSM2", { y: "-215%" }, "display");
        }
      },
    );
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = 3;

  const [marginLeft, setMarginLeft] = useState("1%");

  const calculateMarginLeft = useCallback(() => {
    if (window.innerWidth >= 768) {
      return currentIndex === 0 ? "4%" : "0%";
    } else {
      return currentIndex === 0 ? "1%" : "0%";
    }
  }, [currentIndex]);

  useEffect(() => {
    // Set initial margin based on screen size
    setMarginLeft(calculateMarginLeft());

    // Update margin when resizing
    const handleResize = () => {
      setMarginLeft(calculateMarginLeft());
    };
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateMarginLeft]);

  const [showVideo, setShowVideo] = useState(false);
  const [player, setPlayer] = useState(null);
  const [fadeClass, setFadeClass] = useState("");

  // Load the YouTube API script
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function is called by the YouTube API
    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player("yt-player", {
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
      setPlayer(ytPlayer);
    };
  }, []);

  // Handle the end of the video
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      setShowVideo(false); // Close the video overlay
    }
  };

  // Function to handle button click and show the video
  const handlePlayVideo = () => {
    setShowVideo(true);
    if (player) {
      player.playVideo();
    }
    setTimeout(() => setFadeClass("opacity-100"), 10);
  };

  // Function to close the video manually
  const closeVideo = useCallback(() => {
    setShowVideo(false);
    if (player) {
      player.stopVideo();
    }
    setTimeout(() => setShowVideo(false), 300);
  }, [player, setShowVideo]);

  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      document.querySelectorAll("video").forEach((video) => {
        video.play();
      });
    }
  }, []);

  const [isScreenTall, setIsScreenTall] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsScreenTall(window.innerHeight > 800 && window.innerWidth > 1023);
    };

    checkScreen(); // run on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sectionRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  const divRef1 = useRef();
  const divRef2 = useRef();
  const imgRef1 = useRef();
  const imgRef2 = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const initialXForImgRef2 =
        window.innerWidth > 1550 ? 1100 : window.innerWidth > 1200 ? 800 : 600;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 25%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            pin: true,
          },
        })
        .to(
          textRef1.current,
          {
            x: 200,
            opacity: 0,
            duration: 0.5,
          },
          0,
        )
        .fromTo(
          textRef2.current,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          0,
        )
        .to(
          divRef1.current,
          {
            y: 200,
            opacity: 0,
            duration: 0.5,
          },
          0,
        )
        .fromTo(
          divRef2.current,
          { y: 0, opacity: 0 },
          { y: -300, opacity: 1, duration: 0.5 },
          0,
        )
        .fromTo(
          imgRef1.current,
          { x: 0, y: 0 },
          { x: 800, y: -550, duration: 1, ease: "power2.inout" },
          0,
        )
        .fromTo(
          imgRef2.current,
          { x: initialXForImgRef2, y: 0 },
          { x: 0, y: -450, duration: 1, ease: "power2.inout" },
          0,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showVideo) {
      window.onYouTubeIframeAPIReady = () => {
        const player = new YT.Player("yt-player-container", {
          videoId: "9xiS0T3smxM",
          playerVars: {
            autoplay: 1,
            controls: 1,
          },
          events: {
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.ENDED) {
                closeVideo();
              }
            },
          },
        });
      };

      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        window.onYouTubeIframeAPIReady();
      }
    }
  }, [showVideo, closeVideo]);

  //PROGRESS BAR FOR HOME BANNER VIDOES
  const videoRefs = useRef([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentVideo = videoRefs.current[index];
    const DURATION = currentVideo?.duration
      ? currentVideo.duration * 1000
      : 12000;
    let startTime = null;
    let rafId = null;

    setProgress(0);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % totalSlides);
        }, 600);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [index]);

  return (
    <>
      {!showVideo}

      <div className="relative w-full h-screen overflow-hidden">
        <div
          ref={carouselRef}
          className="bg-no-repeat flex w-[300%] h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${(index * 100) / 3}%)` }}
        >
          <div className="relative w-full h-full ">
            <video
              ref={(el) => (videoRefs.current[0] = el)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute size-full object-cover"
            >
              <source src="./HomePageImg/Banner-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="inset-y-2/3 xl:mt-[2%] lg:inset-x-20 p-4 flex relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl  md:text-3xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
                THINK ELECTRICAL, <br />
                THINK JEF
              </h1>
              <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px]">
                <div className="flex flex-col items-center">
                  {/* Button to trigger the video */}
                  {/* <button onClick={handlePlayVideo} className=" mb-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                      alt="Electrical icon"
                      className="bg-repeat object-contain w-9 2xl:w-14"
                    />
                  </button> */}

                  {/* Conditionally render the iframe video at 90% screen width */}
                  {showVideo && (
                    <div className="hidden fixed inset-0 lg:flex items-center justify-center bg-black bg-opacity-75 z-[9999]">
                      <div className="w-[90vw] h-[90%]">
                        {/* Close button */}
                        <div className="-mt-[1%] flex justify-end">
                          <button
                            className="text-white border-white border border-spacing-2"
                            onClick={closeVideo}
                          >
                            <img
                              src="./HomePageImg/NavbarImg/CLoseMenuLogo.png"
                              alt="closeButton"
                              className="w-[2vw]"
                            />
                          </button>
                        </div>

                        {/* YouTube Iframe */}
                        <div
                          className="w-full h-full object-contain rounded-md"
                          id="yt-player-container"
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full">
            <video
              ref={(el) => (videoRefs.current[1] = el)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute size-full object-cover"
            >
              <source src="./HomePageImg/Banner-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="inset-y-[26rem] xl:mt-[2%] lg:inset-x-20 md:inset-y-2/3 0 p-4 flex relative flex-col self-center w-full  max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl uppercase">
                Expertise from Low Voltage
                <br />
                to Extra High Voltage
              </h1>
              <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
                {/* <button onClick={handlePlayVideo} >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                    alt="Electrical icon"
                    className="bg-repeat object-contain w-9 2xl:w-14"
                  />
                </button> */}
              </div>
            </div>
          </div>
          <div className="relative w-full h-full">
            <video
              ref={(el) => (videoRefs.current[2] = el)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute size-full object-cover"
            >
              <source src="./HomePageImg/Banner-3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="inset-y-2/3 xl:mt-[2%] lg:inset-x-20 p-4 flex relative flex-col self-center w-full max-w-[70%] max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl  md:text-3xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
                EXCELLENCE THROUGH DIGITIZATION
              </h1>
              <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px]">
                {/* <button >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                    alt="Electrical icon"
                    className="bg-repeat object-contain w-9 2xl:w-14"
                  />
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div
          ref={coverRef}
          className="absolute w-full h-full bg-zinc-800"
        ></div>

        {/*Navigation buttons (left and right for vidoe banner) */}
        {/* {!showVideo && index > 0 && (
          <div
            className="absolute top-1/2 hover:bg-red-500 lg:left-24 left-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
            onClick={handlePrev}
          >
            <img src="./HomePageImg/LeftArrow.png" alt="Left Arrow" className="size-6" />
          </div>
        )}
        {!showVideo && index < totalSlides - 1 && (
          <div
            className="absolute hover:bg-red-500 top-1/2 lg:right-20 right-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
            onClick={handleNext}
          >
            <img src="./HomePageImg/RightArrow.png" alt="Right Arrow" className="size-6" />
          </div>
        )} */}

        {/* Timeline Progress Bars */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[88%] flex gap-8 z-20">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="relative flex-1 h-[3px] bg-white/40 overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 h-full bg-white"
                style={{
                  width:
                    index === item
                      ? `${progress}%`
                      : item < index
                        ? "100%"
                        : "0%",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/*  What we do Section */}

      <section>
        <WhatWeDoSection />
      </section>

      {/*------------------------------------------ Why choose JEF Section------------------------------------------------------------------- */}
      {/*  For large devices  */}

      {/* <section
        className={`lg:flex items-center justify-center px-16 bg-stone-900 overflow-hidden hidden ${isScreenTall ? "h-screen" : "h-full"}`}
      >
        <div
          className={`flex items-center ${isScreenTall ? "mt-0 mb-0 h-full" : "py-60"}`}
        >
          <img
            className="h-32 my-auto hidden lg:block"
            src="./HomePageImg/WhyChooseJEFImg/ScrollImg.png"
            alt="ScrollPng"
          />
          <main ref={sectionRef} className="lg:px-[40px] xl:px-[100px]">
            <section>
              <div className="flex items-start h-full gap-28 text-white relative max-h-[500px]">
                <div className="w-1/3 2xl:w-1/4">
                  <div ref={imgRef1} className="h-[450px]">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        "/HomePageImg/WhyChooseJEFImg/smart-digitization-1.png"
                      }
                      alt=""
                    />
                  </div>
                  <div ref={imgRef2} className="h-[450px]">
                    <img
                      className="w-full h-full object-cover"
                      src={"/HomePageImg/WhyChooseJEFImg/our-ld-centre-1.png"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/2 2xl:w-2/5 flex flex-col">
                  <div className="text-base font-semibold tracking-widest text-red-700 uppercase mb-16">
                    Why choose JEF ?
                  </div>
                  <div className="">
                    <div
                      ref={textRef1}
                      className="text-5xl font-bold uppercase leading-none tracking-[3px] absolute top-16 right-[10%] 2xl:right-[40%]"
                    >
                      Smart Digitization
                    </div>
                    <div
                      ref={textRef2}
                      className="text-5xl font-bold uppercase leading-none tracking-[3px] absolute top-16 right-[15%] xl:right-[25%] 2xl:right-[53%] opacity-0"
                    >
                      Our L&d centre
                    </div>
                  </div>
                  <div className="relative">
                    <div ref={divRef1}>
                      <div className="my-16">
                        Our patented Smart Digitization process delivers
                        consistency, speed, accuracy and reliability at scale.
                        Trusted by over 450+ customers globally, it delivers
                        secure, standardized reports with customizable formats—
                        over 5,000 reports and a million data points captured to
                        date.
                      </div>
                      <div className="w-fit opacity-0">
                        <button className="flex cursor-default text-wrap gap-2 justify-center items-center self-start px-2 text-xs uppercase bg-red-700 border border-solid border-zinc-900 border-opacity-10 rounded-[50px]">
                          <span className="py-3 pl-4 my-auto">Read More</span>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db980ec347a907dbb470da6524b4de0865962ecb1dce316128b11f72afbae1f5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                            className="object-contain my-auto self-stretch w-7"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div ref={divRef2}>
                      <div className="my-16">
                        At JEF, we are committed to continuous improvement and
                        excellence. The L&D Center is designed to enhance the
                        skills and expertise of our employees, ensuring they
                        stay ahead of industry trends and deliver superior
                        service to our clients.
                      </div>
                      <div className="w-fit opacity-0">
                        <button className="flex cursor-default text-wrap gap-2 justify-center items-center self-start px-2 text-xs uppercase bg-red-700 border border-solid border-zinc-900 border-opacity-10 rounded-[50px]">
                          <span className="py-3 pl-4 my-auto">Read More</span>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db980ec347a907dbb470da6524b4de0865962ecb1dce316128b11f72afbae1f5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                            className="object-contain my-auto self-stretch w-7"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section> */}

      {/*  For small & medium devices  */}

      {/* <section className="flex bg-fixed h-screen overflow-hidden  px-16 py-6 bg-stone-900 lg:hidden">
        <img
          className="h-32 my-auto hidden lg:block"
          src="./HomePageImg/WhyChooseJEFImg/ScrollImg.png"
          alt="ScrollPng"
        />
        <main className="mx-auto overflow-hidden">
          <FeatureSection />
        </main>
      </section> */}

      {/* WHY CHOOSE JEF SECTION */}

      <section className="w-full bg-[#1B1818] flex justify-center py-[120px] px-6 lg:px-0">
        <div className="w-full max-w-[1286px] flex flex-col gap-[120px]">
          {/* TOP CONTENT */}
          <div className="flex flex-col lg:flex-row items-center gap-[120px]">
            {/* IMAGE */}
            <div className="w-full lg:w-[667px] h-[375px] overflow-hidden">
              <img
                src="/HomePageImg/WhyChooseJEFImg/smart safety audit tool.png"
                alt="Smart Digitization"
                className="
      w-full
      h-full
      object-cover
      transition-transform
      duration-[1200ms]
      ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:scale-110
    "
              />
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-[499px] flex flex-col gap-8">
              {/* SMALL TITLE */}
              <p className="text-[12px] font-semibold tracking-[1.47px] uppercase text-[#C02429] font-montserrat">
                Why choose JEF ?
              </p>

              {/* HEADING */}
              <h2 className="text-[28px] font-semibold tracking-[3px] uppercase leading-none text-white font-montserrat">
                Smart Digitization
              </h2>

              {/* DESCRIPTION */}
              <p className="text-[16px] font-light leading-[150%] text-white font-montserrat">
                Our patented Smart Digitization process delivers consistency,
                speed, accuracy and reliability at scale. Trusted by over 450+
                customers globally, it delivers secure, standardized reports
                with customizable formats - over 5,000 reports and a million
                data points captured to date.
              </p>

              {/* BUTTON */}
              <button
                onClick={(e) => {
                  const button = e.currentTarget;
                  const ripple = document.createElement("span");
                  const rect = button.getBoundingClientRect();
                  const size = Math.max(rect.width, rect.height) * 2;

                  Object.assign(ripple.style, {
                    position: "absolute",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.15)",
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${e.clientX - rect.left - size / 2}px`,
                    top: `${e.clientY - rect.top - size / 2}px`,
                    transform: "scale(0)",
                    pointerEvents: "none",
                    transition:
                      "transform 0.6s ease-out, opacity 0.6s ease-out",
                    opacity: "1",
                  });

                  button.appendChild(ripple);

                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      ripple.style.transform = "scale(1)";
                      ripple.style.opacity = "0";
                    });
                  });

                  setTimeout(() => ripple.remove(), 650);
                }}
                className="
    relative
    overflow-hidden
    group
    w-[239px]
    h-[56px]
    rounded-full
    border
    border-[#1D1F221A]
    bg-[#C02429]
    flex
    items-center
    justify-center
    gap-[10px]
    uppercase
    text-white
    tracking-[2px]
    text-[14px]
    transition-all
    duration-300
    hover:bg-[#F9F7F2]
    hover:text-[#C02429]
  "
              >
                <span className="relative z-10">Read More</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 transition-all duration-300"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-[120px]">
            {/* CONTENT */}
            <div className="w-full lg:w-[499px] flex flex-col gap-8">
              {/* SMALL TITLE */}
              <p className="text-[12px] font-semibold tracking-[1.47px] uppercase text-[#C02429] font-montserrat">
                Why choose JEF ?
              </p>

              {/* HEADING */}
              <h2 className="text-[28px] font-semibold tracking-[3px] uppercase leading-none text-white font-montserrat">
                Our L&amp;D Center
              </h2>

              {/* DESCRIPTION */}
              <p className="text-[16px] font-light leading-[150%] text-white font-montserrat">
                At JEF, we are committed to continuous improvement and
                excellence. The L&amp;D Center is designed to enhance the skills
                and expertise of our employees, ensuring they stay ahead of
                industry trends and deliver superior service to our clients.
              </p>

              {/* BUTTON */}
              <button
                onClick={(e) => {
                  const button = e.currentTarget;
                  const ripple = document.createElement("span");
                  const rect = button.getBoundingClientRect();
                  const size = Math.max(rect.width, rect.height) * 2;

                  Object.assign(ripple.style, {
                    position: "absolute",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.15)",
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${e.clientX - rect.left - size / 2}px`,
                    top: `${e.clientY - rect.top - size / 2}px`,
                    transform: "scale(0)",
                    pointerEvents: "none",
                    transition:
                      "transform 0.6s ease-out, opacity 0.6s ease-out",
                    opacity: "1",
                  });

                  button.appendChild(ripple);

                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      ripple.style.transform = "scale(1)";
                      ripple.style.opacity = "0";
                    });
                  });

                  setTimeout(() => ripple.remove(), 650);
                }}
                className="
    relative
    overflow-hidden
    group
    w-[239px]
    h-[56px]
    rounded-full
    border
    border-[#1D1F221A]
    bg-[#C02429]
    flex
    items-center
    justify-center
    gap-[10px]
    uppercase
    text-white
    tracking-[2px]
    text-[14px]
    transition-all
    duration-300
    hover:bg-[#F9F7F2]
    hover:text-[#C02429]
  "
              >
                <span className="relative z-10">Read More</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 transition-all duration-300"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* IMAGE */}

            <div className="w-full lg:w-[667px] h-[375px] overflow-hidden ">
              <img
                src="/HomePageImg/WhyChooseJEFImg/ld center.png"
                alt="L&D Center"
                className="
      w-full
      h-full
      object-cover
      transition-transform
      duration-[1200ms]
      ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:scale-110
    "
              />
            </div>
          </div>
        </div>
      </section>

      {/*-------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* bg-[url('/home-main.png')] */}

      <main className="flex overflow-hidden flex-col ">
        <section
          style={{
            backgroundImage: "url('/HomePageImg/BGP.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="overflow-hidden relative w-full h-auto "
        >
          <div className="flex lg:items-end xl:items-start gap-0 md:gap-6 2xl:mt-0 lg:gap-16 justify-between 2xl:justify-center 2xl:gap-40 px-4 lg:px-0 max-lg:flex-col 2xl:ml-[100x] md:mr-[100px] md:ml-[85px] ">
            <div className=" flex flex-col w-full lg:w-1/2 xl:w-3/5 2xl:w-1/2 py-16">
              <div className="flex  z-10 lg:mt-12 2xl:mt-0 flex-col items-start  mr-0 font-light text-red-700 max-md:mt-10 max-md:max-w-full">
                <h1 className="text-3xl Y-axis-text font-bold uppercase tracking-[3px] max-md:max-w-full ">
                  Founder's message
                </h1>
                <div className="self-stretch Y-axis-text sm:my-12 space-y-5 lg:text-base 2xl:text-xl  2xl:leading-8 text-stone-900 max-md:my-12 max-md:max-w-full">
                  <p>
                    Every single day, we endeavour to make more customers across
                    continents
                    <br />
                    benefit from our work as a step to enhance reliability &
                    safety in the electrical
                    <br />
                    network.
                  </p>

                  <p>
                    Over the last 30 years of our existence, we have served more
                    than 10K+
                    <br />
                    customers in 30+ countries. Consistently meeting & exceeding
                    their
                    <br />
                    expectations at every given opportunity, we at Team JEF have
                    created a
                    <br />
                    formidable track record for ourselves.
                  </p>

                  <p>
                    No wonder customers <strong>THINK "JEF"</strong> when they{" "}
                    <strong>THINK ELECTRICAL</strong>
                    <br />
                    engineering.
                  </p>
                </div>
                <div className="Y-axis-text-founder">
                  <h2 className="text-xl lg:text-2xl font-semibold max-md:text-4xl">
                    {"Prashanth BG"}
                  </h2>
                  <p className=" text-xl lg:text-xl max-md:max-w-full">
                    {"Chairman and Managing Director"}
                  </p>
                  <p className="text-xl lg:text-xl ">{"JEF Group"}</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 mt-auto 2xl:max-h-[600px]">
              <img
                className="h-[70vh] lg:h-full"
                src="/HomePageImg/founder.png"
              />
            </div>

            <div className="flex lg:hidden flex-col w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 lg:mt-auto 2xl:max-h-[600px]">
              <img
                className=" object-contain lg:h-full"
                src="/HomePageImg/founder.png"
              />
            </div>
          </div>
        </section>
      </main>

      {/*OUR INDUSTRIES SECTION */}
      <section>
        <IndustriesSection />
      </section>

      {/*  Blog's Section  */}

      <section className="py-[80px] overflow-hidden bg-[#1B1818]">
        <main className="px-[100px] w-full">
          <div className="flex flex-col w-full">
            <header className="flex items-start justify-between w-full">
              <div>
                <h1
                  className="
              text-[32px]
              font-bold
              leading-none
              tracking-[3.36px]
              uppercase
              text-[#C02429]
            "
                >
                  Latest Blogs
                </h1>

                <p
                  className="
              mt-[28px]
              text-[24px]
              leading-[150%]
              font-light
              text-white
            "
                >
                  Discover the latest news, updates and insights
                </p>
              </div>

              {/* EXPLORE MORE BUTTON */}
              <button
                onClick={(e) => {
                  const button = e.currentTarget;
                  const ripple = document.createElement("span");
                  const rect = button.getBoundingClientRect();
                  const size = Math.max(rect.width, rect.height) * 2;

                  Object.assign(ripple.style, {
                    position: "absolute",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.15)",
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${e.clientX - rect.left - size / 2}px`,
                    top: `${e.clientY - rect.top - size / 2}px`,
                    transform: "scale(0)",
                    pointerEvents: "none",
                    transition:
                      "transform 0.6s ease-out, opacity 0.6s ease-out",
                    opacity: "1",
                  });

                  button.appendChild(ripple);

                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      ripple.style.transform = "scale(1)";
                      ripple.style.opacity = "0";
                    });
                  });

                  setTimeout(() => ripple.remove(), 650);
                }}
                className="
    relative
    overflow-hidden
    group
    w-[209px]
    h-[40px]
    rounded-full
    border
    border-[#D0D0D0]
    px-[18px]
    flex
    items-center
    justify-between
    transition-all
    duration-300
    hover:bg-[#C02429]
    hover:border-[#C02429]
  "
              >
                <span
                  className="
      relative
      z-10
      text-[14px]
      uppercase
      tracking-[1px]
      text-white
      font-montserrat
      transition
      duration-300
    "
                >
                  Explore More
                </span>

                <img
                  src="./HomePageImg/LeftArrow.png"
                  alt="Arrow"
                  className="
      relative
      z-10
      w-[18px]
      rotate-180
      brightness-100
      transition
      duration-300
      group-hover:brightness-0
      group-hover:invert
    "
                />
              </button>
            </header>

            {/* FEATURED BLOG */}
            <div className="mt-[64px] flex gap-[64px]">
              {/* LEFT IMAGE */}
              <div className="w-[848px] h-[530px] overflow-hidden">
                <img
                  src={blogData[0].imageSrc}
                  alt={blogData[0].title}
                  className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-[616px] pt-[50px] flex flex-col">
                <span
                  className="
              text-[12px]
              uppercase
              font-light
              text-[#8B8B8B]
            "
                >
                  ARTICLE
                </span>

                <h2
                  className="
              mt-[32px]
              text-[32px]
              leading-[48px]
              uppercase
              text-white
              font-normal
            "
                >
                  {blogData[0].title}
                </h2>

                <p
                  className="
              mt-[32px]
              text-[18px]
              leading-[150%]
              text-[#666666]
            "
                >
                  {blogData[0].description}
                </p>

                <span
                  className="
              mt-[48px]
              text-[12px]
              font-light
              text-[#8B8B8B]
            "
                >
                  April 2026
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* LOWER BLOG CARDS */}
        <section className="px-[100px] mt-[52px]">
          <div className="flex gap-[35px]">
            {blogData.slice(1, 4).map((blog) => (
              <BlogCard
                key={blog.id}
                imageSrc={blog.imageSrc}
                title={blog.title}
                path={blog.path}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

// what we do Section

// const WhatWeDoSection = () => {
//   const [hoveredButtonIndex, setHoveredButtonIndex] = useState(0);
//   const [hoveredButtonIndex2, setHoveredButtonIndex2] = useState(0);
//   const [activeSection, setActiveSection] = useState("Services");

//   const [showSection, setShowSection] = useState(false);
//   const videoRef = useRef(null);

//   const handleVideoEnd = () => {
//     setFadeOut(true);
//     // Wait for the fade-out effect to complete before showing the section
//     setTimeout(() => {
//       setShowSection(true);
//     }, 200); // Duration of the fade-out effect
//   };

//   // What we do Mobile view --------------------------------------------//

//   useEffect(() => {
//     const isIOS =
//       /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//     if (isIOS) {
//       document.querySelectorAll("video").forEach((video) => {
//         video.play();
//       });
//     }
//   }, []);

//   useEffect(() => {
//     if (showSection) {
//       gsap.fromTo(
//         gsap.utils.toArray(".Y-axis-WWD-anm"),
//         { opacity: 0, y: 100 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.1,
//           stagger: 0.3,
//           scrollTrigger: {
//             trigger: ".WWD-slider",
//             start: "top 70%",
//             toggleActions: "play none none none",
//           },
//         },
//       );
//     }
//   }, [showSection]);

//   useEffect(() => {
//     if (showSection) {
//       gsap.utils.toArray(".Y-axis-text").forEach((element) => {
//         gsap.fromTo(
//           element,
//           { opacity: 0, y: 50 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             stagger: 0.2,
//             scrollTrigger: {
//               trigger: element,
//               start: "top 70%",
//               toggleActions: "play none none none",
//             },
//           },
//         );
//       });
//     }
//   }, [showSection]);

//   const [fadeOut, setFadeOut] = useState(false);

//   return (
//     <section className={`flex overflow-hidden flex-col bg-zinc-800 h-full`}>
//       {!showSection && (
//         <div
//           className={`flex items-center justify-center relative flex-col px-20 pt-16 w-full h-screen max-md:px-5 max-md:py-24 max-md:max-w-full transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
//         >
//           <h1 className="Y-axis-text z-50 text-white font-normal text-center absolute inset-0 mx-6 my-[50vh] flex  justify-center text-xl sm:text-4xl uppercase ">
//             Delivering Excellence Across 30 countries
//           </h1>
//           <video
//             ref={videoRef}
//             onEnded={handleVideoEnd}
//             className="object-cover absolute inset-0 size-full"
//             autoPlay
//             muted
//             playsInline
//           >
//             <source src="./HomePageImg/Earth zoom.mp4" type="video/mp4" />
//           </video>
//         </div>
//       )}

//       {showSection && (
//         <section className={`flex overflow-hidden flex-col bg-zinc-800`}>
//           <div className="flex relative flex-col px-20 py-12 w-full h-full max-md:px-5 max-md:py-24 max-md:max-w-full">
//             <img
//               loading="lazy"
//               src={
//                 activeSection === "Services"
//                   ? buttonData[hoveredButtonIndex]?.image
//                   : buttonData2[hoveredButtonIndex2]?.image
//               }
//               alt=""
//               className="transition-all duration-500 object-cover absolute inset-0 size-full"
//             />

//             <div className="w-full flex flex-col md:flex-row gap-12 md:items-center justify-between relative mb-20">
//               <h1 className="text-white uppercase tracking-[3px] text-xl 2xl:text-3xl font-bold">
//                 what we do
//               </h1>
//               <div className="flex items-center gap-20 mx-auto md:mr-0">
//                 {["Services", "Solutions"].map((item) => (
//                   <div
//                     key={item}
//                     className={`cursor-pointer transition-all duration-300 font-bold ${activeSection === item ? "text-red-700" : "text-white"}`}
//                     onMouseEnter={() => setActiveSection(item)}
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {activeSection === "Services" && (
//               <div className="flex flex-col lg:flex-row mx-auto relative mb-0 w-full max-md:mb-2.5 max-md:max-w-full justify-between">
//                 {/* Left Section */}
//                 <section className="flex flex-wrap w-[100%] xl:w-[40%] justify-between">
//                   <div className="flex flex-row my-auto max-md:ml-0 max-xl:w-full">
//                     <div className="grow max-lg:max-w-full WWD-slider">
//                       <div className="relative w-[420px] h-[480px]">
//                         {/* ✅ MOVE THIS HERE */}
//                         {(() => {
//                           const positions = [
//                             [350, 0, 165],
//                             [180, 80, 165],
//                             [30, 200, 165],
//                             [250, 280, 165],
//                             [400, 180, 165],
//                             [90, 370, 165],
//                           ];

//                           return buttonData
//                             .slice(0, positions.length)
//                             .map((button, index) => {
//                               const [left, top, size] = positions[index];

//                               return (
//                                 <div
//                                   key={index}
//                                   className="absolute Y-axis-WWD-anm"
//                                   style={{ left, top }}
//                                 >
//                                   <button
//                                     style={{ width: size, height: size }}
//                                     className={`
//                     border border-white rounded-full
//                     flex items-center justify-center text-center
//                     transition-all duration-300 ease-in-out
//                     ${
//                       hoveredButtonIndex === index
//                         ? "bg-red-500 border-none scale-110"
//                         : "bg-transparent cursor-pointer"
//                     }
//                   `}
//                                     onMouseEnter={() =>
//                                       setHoveredButtonIndex(index)
//                                     }
//                                     onMouseLeave={() =>
//                                       setHoveredButtonIndex(null)
//                                     }
//                                   >
//                                     <span className="text-white text-[55%] uppercase leading-tight px-2">
//                                       {button.text}
//                                     </span>
//                                   </button>
//                                 </div>
//                               );
//                             });
//                         })()}
//                       </div>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Right Section */}
//                 <section className="Y-axis-text lg:w-[50%] xl:w-[40%] lg:ml-[20%] flex flex-col">
//                   {" "}
//                   {/* Ensure the section takes 50% and is aligned to the right */}
//                   <div className="flex flex-col lg:w-full text-xl font-medium leading-10 max-md:max-w-full">
//                     <div className="shrink-0 mt-12 lg:mt-6 border border-red-700 thin-border max-md:max-w-full" />
//                     <h2 className="mt-8 text-white text-sm uppercase tracking-wider max-md:max-w-full">
//                       {buttonData[hoveredButtonIndex]?.title ||
//                         "EARTHING STUDIES PROJECTS COMPLETED"}
//                     </h2>
//                   </div>
//                   <div className="mt-12 w-full max-md:max-w-full">
//                     <div className="flex gap-5 max-md:flex-col">
//                       <div className="flex flex-col max-md:ml-0 max-md:w-full">
//                         <div className="flex flex-col  w-full max-md:mt-10 max-md:max-w-full">
//                           <div className="max-w-full w-[80%]">
//                             <div className="flex max-md:flex-col">
//                               <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
//                                 <div className="flex flex-col grow uppercase tracking-[3px] ">
//                                   <h3 className="font-bold text-xs 2xl:text-base items-start self-start text-green-600">
//                                     Total Projects
//                                   </h3>
//                                   <div className="flex flex-col items-start self-start mt-2  text-xs 2xl:text-base text-white whitespace-nowrap">
//                                     <p>
//                                       {buttonData[hoveredButtonIndex]
//                                         ?.totalProjects || 165}
//                                     </p>
//                                     <h4 className="self-stretch mt-6 text-xs 2xl:text-base font-bold text-center text-green-600">
//                                       MIDDLE EAST
//                                     </h4>
//                                     <p className="mt-2">
//                                       {buttonData[hoveredButtonIndex]?.gcc ||
//                                         42}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex-col">
//                             <p className="self-stretch text-xs 2xl:text-base mt-16 2xl:w-[90%] 2xl:leading-7 text-white ">
//                               {buttonData[hoveredButtonIndex]?.description ||
//                                 "Earthing studies assess the performance of grounding systems through soil resistivity testing and resistance measurements. These studies help ensure compliance with safety standards, protect equipment, and prevent electrical hazards."}
//                             </p>
//                             {hoveredButtonIndex !== null &&
//                               buttonData[hoveredButtonIndex]?.path && (
//                                 <Link
//                                   href={buttonData[hoveredButtonIndex].path}
//                                 >
//                                   <button className="gap-3 ...">
//                                     Read more
//                                   </button>
//                                 </Link>
//                               )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             )}

//             {activeSection === "Solutions" && (
//               <div className="flex flex-col lg:flex-row mx-auto relative mb-0 w-full max-md:mb-2.5 max-md:max-w-full justify-between">
//                 {/* Left Section */}
//                 <section className="flex flex-wrap w-[100%] xl:w-[40%] justify-between">
//                   <div className="flex flex-row my-auto max-md:ml-0 max-xl:w-full">
//                     <div className="grow max-lg:max-w-full WWD-slider">
//                       <div className="relative w-[420px] h-[480px]">
//                         {(() => {
//                           const positions = [
//                             [350, 0, 165],
//                             [180, 80, 165],
//                             [30, 200, 165],
//                             [250, 280, 165],
//                             [400, 180, 165],
//                             [90, 370, 165],
//                           ];

//                           return buttonData2
//                             .slice(0, positions.length)
//                             .map((button, index) => {
//                               const [left, top, size] = positions[index];

//                               return (
//                                 <div
//                                   key={index}
//                                   className="absolute Y-axis-WWD-anm"
//                                   style={{ left, top }}
//                                 >
//                                   <button
//                                     style={{ width: size, height: size }}
//                                     className={`
//               border border-white rounded-full
//               flex items-center justify-center text-center
//               transition-all duration-300 ease-in-out
//               ${
//                 hoveredButtonIndex2 === index
//                   ? "bg-red-500 border-none scale-110"
//                   : "bg-transparent cursor-pointer"
//               }
//             `}
//                                     onMouseEnter={() =>
//                                       setHoveredButtonIndex2(index)
//                                     }
//                                     onMouseLeave={() =>
//                                       setHoveredButtonIndex2(null)
//                                     }
//                                   >
//                                     <span className="text-white text-[55%] uppercase leading-tight px-2">
//                                       {button.text}
//                                     </span>
//                                   </button>
//                                 </div>
//                               );
//                             });
//                         })()}
//                       </div>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Right Section */}
//                 <section className="Y-axis-text lg:w-[50%] xl:w-[40%] lg:ml-[20%] flex flex-col">
//                   {" "}
//                   {/* Ensure the section takes 50% and is aligned to the right */}
//                   <div className="flex flex-col lg:w-full text-xl font-medium leading-10 max-md:max-w-full">
//                     <div className="shrink-0 mt-12 lg:mt-6 border border-red-700 thin-border max-md:max-w-full" />
//                     <h2 className="mt-8 text-white text-sm uppercase tracking-wider max-md:max-w-full">
//                       {buttonData2[hoveredButtonIndex2]?.title ||
//                         "EARTHING STUDIES PROJECTS COMPLETED"}
//                     </h2>
//                   </div>
//                   <div className="mt-12 w-full max-md:max-w-full">
//                     <div className="flex gap-5 max-md:flex-col">
//                       <div className="flex flex-col max-md:ml-0 max-md:w-full">
//                         <div className="flex flex-col  w-full max-md:mt-10 max-md:max-w-full">
//                           <div className="max-w-full w-[80%]">
//                             <div className="flex max-md:flex-col">
//                               <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
//                                 <div className="flex flex-col grow uppercase tracking-[3px] ">
//                                   <h3 className="font-bold text-xs 2xl:text-base items-start self-start text-green-600">
//                                     Total Projects
//                                   </h3>
//                                   <div className="flex flex-col items-start self-start mt-2  text-xs 2xl:text-base text-white whitespace-nowrap">
//                                     <p>
//                                       {buttonData2[hoveredButtonIndex2]
//                                         ?.totalProjects || 165}
//                                     </p>
//                                     <h4 className="self-stretch mt-6 text-xs 2xl:text-base font-bold text-center text-green-600">
//                                       MIDDLE EAST
//                                     </h4>
//                                     <p className="mt-2">
//                                       {buttonData2[hoveredButtonIndex2]?.gcc ||
//                                         42}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex-col">
//                             <p className="self-stretch text-xs 2xl:text-base mt-16 2xl:w-[90%] 2xl:leading-7 text-white ">
//                               {buttonData2[hoveredButtonIndex2]?.description ||
//                                 "Earthing studies assess the performance of grounding systems through soil resistivity testing and resistance measurements. These studies help ensure compliance with safety standards, protect equipment, and prevent electrical hazards."}
//                             </p>
//                             {buttonData2[hoveredButtonIndex2]?.path && (
//                               <Link
//                                 href={buttonData2[hoveredButtonIndex2].path}
//                               >
//                                 <button className="gap-2.5 text-xs 2xl:text-base self-stretch px-5 py-2 mt-12 text-red-700 uppercase bg-white hover:bg-red-700 hover:text-white 2xl:py-3 rounded-[50px] 2xl:px-12">
//                                   Read more
//                                 </button>
//                               </Link>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             )}
//           </div>
//         </section>
//       )}
//     </section>
//   );
// };

function WhatWeDoSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const [background, setBackground] = useState("/HomePageImg/WhatWeDoBg.png");
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [showContent, setShowContent] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !videoStarted) {
          setVideoStarted(true);

          if (videoRef.current) {
            videoRef.current.play();
          }
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [videoStarted]);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();

  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  const services = [
    {
      id: 0,
      title: "EARTHING STUDIES",
      heading: "GROUNDING EARTHING STUDIES",
      description:
        "Earthing is an essential part of any electrical installation, essentialfor the safety from electrical shock, and fire and for operation of most oftheprotective systems of the electrical installation.",
      top: "180px",
      left: "140px",
      width: "280px",
      background: "./HomePageImg/WhatWeDoSection/Solution-1.png",
       x: 290,
  y: 180,
  xmob: 305,
ymob:449,

  labelLeft: "-100px",
  labelTop: "-35px",
  labelWidth: "100px",

  mobileLabelLeft: "-50px",
  mobileLabelTop: "-22px",
  mobileLabelWidth: "50px",

    },

    {
      id: 1,
      title: "LIGHTNING PROTECTION SYSTEM STUDIES",
      heading: "LIGHTNING PROTECTION SYSTEM STUDIES",
      description:
        "The purpose of Lightning Protection Systemaudit is to conduct lightning risk assessment and determine the level of protectionrequired to the structure/facility as per the latest relevant standards. LPS Adequacyaudit helps to manage and mitigate the risk due to lightning and protect the life andassets.",
      top: "290px",
      left: "420px",
      width: "280px",
      background: "./HomePageImg/WhatWeDoSection/Solution-4.png",
       x: 25,
  y: 355,
  xmob: -15,
ymob: 660,
 labelLeft: "-70px",
  labelTop: "-50px",
  labelWidth: "170px",

  mobileLabelLeft: "15px",
  mobileLabelTop: "-22px",
  mobileLabelWidth: "150px",
    },

    {
      id: 2,
      title: "POWER SYSTEM STUDIES",
      heading: "POWER SYSTEM STUDIES",
      description:
        "A Power System Study involves analyzing various aspectsof an electrical power system to identify potential issues and optimize performance. These studies include load flow analysis, short circuit studies, relay coordination, arcflash analysis, and more, all aimed at enhancing system reliability and safety.",
      top: "410px",
      left: "190px",
      width: "300px",
      background: "./HomePageImg/WhatWeDoSection/Solution-3.png",
       x: 140,
  y:500,
  xmob: 130,
ymob: 830,
 labelLeft: "10px",
  labelTop: "50px",
  labelWidth: "150px",

  mobileLabelLeft: "15px",
  mobileLabelTop: "20px",
  mobileLabelWidth: "100px",
    },

    {
      id: 3,
      title: "POWER QUALITY & ROOT CAUSE ANALYSIS",
      heading: "POWER QUALITY & ROOT CAUSE ANALYSIS",
      description:
        "A Power Quality Study involves acomprehensive analysis of your electrical system to identify disturbances anddeviations in voltage, current, and frequency. These studies are essential forensuring that your power supply is stable and free from issues that can lead toequipment malfunction or inefficiencies.",
      top: "490px",
      left: "550px",
      width: "300px",
      background: "./HomePageImg/WhatWeDoSection/Solution-2.png",
        x:250,
  y: 390,
  xmob: 265,
ymob: 700,
 labelLeft: "-00px",
  labelTop: "60px",
  labelWidth: "170px",

  mobileLabelLeft:" 20px",
  mobileLabelTop: "20px",
  mobileLabelWidth: "150px",

    },

    {
      id: 4,
      title: "INSTRUMENTATION EARTHING",
      heading: "INSTRUMENTATION EARTHING",
      description:
        "An Instrumentation Earthing Study involves evaluatingthe earthing system of instrumentation and control systems to ensure propergrounding. This study helps prevent electrical noise, surges, and other issues thatcan affect the accuracy and reliability of instrumentation.",
      top: "580px",
      left: "310px",
      width: "300px",
      background: "./HomePageImg/WhatWeDoSection/Solution-5.png",
        x: 375,
  y: 275,
    xmob: 410,
ymob: 555,
   labelLeft: "-20px",
  labelTop: "30px",
  labelWidth: "170px",

  mobileLabelLeft: "-0px",
  mobileLabelTop: "25px",
  mobileLabelWidth: "100px",

    },
  ];

  const handleCardClick = (service) => {
    setActiveCard(service.id);
    setPanelOpen(true);
    setBackground(service.background);
  };

  const handlePrev = () => {
    const prevIndex = (activeCard - 1 + services.length) % services.length;
    setActiveCard(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (activeCard + 1) % services.length;
    setActiveCard(nextIndex);
  };

  // Lock body scroll when panel is open
  useEffect(() => {
    if (panelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [panelOpen]);

  return (
<section
  ref={sectionRef}
  className="relative w-full min-h-[1150px] md:min-h-[700px] lg:min-h-[850px] overflow-hidden bg-black"
>
  {/* Background Image */}
  <img
    src={background}
    alt="What We Do Background"
    className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ease-in-out ${
      showContent ? "opacity-100 scale-100" : "opacity-0 scale-105"
    } z-0`}
  />

  {/* VIDEO */}
  <video
    ref={videoRef}
    muted
    playsInline
    onEnded={() => setShowContent(true)}
    className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000 ${
      showContent ? "opacity-0" : "opacity-100"
    }`}
  >
    <source src="/HomePageImg/Earthzoom.mp4" type="video/mp4" />
  </video>

  {/* MAIN CONTENT WRAPPER */}
  <div
    className={`
      absolute inset-0
      z-10
      transition-opacity duration-1000
      ${showContent ? "opacity-100" : "opacity-0"}
    `}
  >

    {/* DARK OVERLAY */}
    <div
      className={`
        absolute inset-0
        z-[20]
        transition-all duration-700
        ${
          panelOpen
            ? "bg-black/60"
            : "bg-black/40"
        }
      `}
    />

    {/* J WRAPPER */}
    <div
      className="
        absolute
        inset-0
        z-[50]

        left-1/2
        -translate-x-1/2

        scale-[0.62]
        sm:scale-[0.72]
        md:scale-100

        origin-top-left
        md:origin-center
      "
    >

      {/* J PNG */}
      <img
        src="/HomePageImg/J.png"
        alt="J Path"
        className="
    absolute
    rotate-[46deg]
          top-[400px]
          left-[30px]
          md:top-[145px]
          md:left-[70px]

          w-100px]
          md:w-[100px]
          lg:w-[200px]

          opacity-90
          pointer-events-none
          z-[45]
        "
      />

      {/* INTERACTIVE DOTS */}
      {services.map((service) => {
        const isActive = activeCard === service.id;

        return (
          <div
            key={service.id}
            className="absolute z-[60] group"
            style={{
  top: isMobile ? `${service.ymob}px` : `${service.y}px`,
  left: isMobile ? `${service.xmob}px` : `${service.x}px`,
}}
            onMouseEnter={() => handleCardClick(service)}
            onClick={() => handleCardClick(service)}
          >

            {/* LABEL */}
            <div
             
               className={`
    absolute
    text-[8px] md:text-[11px]
    tracking-[1px] md:tracking-[2px]
    uppercase
    font-medium
    leading-[1.35]
    break-words
    whitespace-normal
    transition-all
    duration-500
    flex
    items-end
    text-center
    ${
      isActive
        ? "text-white"
        : "text-white/70 group-hover:text-white"
    }
  `}
              style={{
  left: isMobile
    ? service.mobileLabelLeft
    : service.labelLeft,

  top: isMobile
    ? service.mobileLabelTop
    : service.labelTop,

  width: isMobile
    ? service.mobileLabelWidth
    : service.labelWidth,
}}
            >
              {service.title}
            </div>

            {/* DOT BUTTON */}
            <button className="relative flex items-center justify-center">

              {/* OUTER RING */}
              <span
                className={`
                  absolute
                  w-[24px]
                  h-[24px]
                  md:w-[34px]
                  md:h-[34px]
                  rounded-full
                  border
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "border-white scale-110 opacity-100"
                      : "border-white/40 opacity-70 group-hover:border-white group-hover:scale-110"
                  }
                `}
              />

              {/* INNER DOT */}
              <span
                className={`
                  w-[12px]
                  h-[12px]
                  md:w-[18px]
                  md:h-[18px]
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "bg-white scale-110"
                      : "bg-[#C61F26] group-hover:bg-white"
                  }
                `}
              />
            </button>
          </div>
        );
      })}
    </div>

    {/* HEADING */}
    <div className="absolute top-[35px] left-[20px] sm:left-[40px] lg:top-[70px] lg:left-[70px] z-[60]">
      <h2 className="font-montserrat font-bold text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-[3px] lg:tracking-[4px] uppercase text-white">
        WHAT WE DO
      </h2>
    </div>

    {/* RIGHT CONTENT PANEL */}
    <div
      className="
        absolute
        z-[60]

        left-0
        right-0

        px-5

        top-[760px]

        md:left-auto
        md:right-[90px]
        md:top-[190px]

        md:max-w-[500px]
        max-w-full
      "
    >

      {/* RED LINE */}
      <div className="w-full h-[2px] bg-[#C61F26] mb-6 md:mb-8 opacity-90" />

      {/* ANIMATED CONTENT */}
      <div
        key={activeCard}
        className="animate-[fadeUp_0.7s_ease]"
      >
        <h3 className="text-white uppercase tracking-[2px] md:tracking-[4px] text-[20px] sm:text-[24px] lg:text-[28px] font-light leading-[1.3] mb-5 md:mb-8">
          {services[activeCard].heading}
        </h3>

        <p className="text-white/90 text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.8] font-light">
          {services[activeCard].description}
        </p>
      </div>
    </div>

  </div>
</section>
  );
}

// Why Choose JEF Section

// function FeatureSection() {
//   const sectionRef0 = useRef();
//   const divRef3 = useRef();
//   const divRef4 = useRef();
//   const imgRef3 = useRef();
//   const imgRef4 = useRef();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: sectionRef0.current,
//             start: "center center", // Animations start when the section's center aligns with the viewport's center
//             end: "bottom bottom", // Ends when the bottom of the section aligns with the bottom of the viewport
//             toggleActions: "play none none reverse",
//             pin: false,
//           },
//         })
//         .fromTo(
//           imgRef3.current,
//           { x: 0, opacity: 1 },
//           { x: "-60vw", opacity: 0, duration: 1, ease: "power2.out" },
//           0,
//         )
//         .fromTo(
//           imgRef4.current,
//           { x: 0, opacity: 0 },
//           { x: "-75vw", opacity: 1, duration: 1, ease: "power2.out" },
//           0,
//         )
//         .fromTo(
//           divRef3.current,
//           { y: 0, opacity: 1 },
//           { y: "20vh", opacity: 0, duration: 0.8, ease: "power2.out" },
//           "0", // Overlap timing with the previous animation
//         )
//         .fromTo(
//           divRef4.current,
//           { y: 0, opacity: 0 },
//           { y: "-40vh", opacity: 1, duration: 0.8, ease: "power2.out" },
//           "0",
//         );
//     }, sectionRef0);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef0} className="lg:hidden mx-auto h-screen ">
//       <h1 className="uppercase tracking-wider sm:tracking-widest text-center mt-[1rem] text-red-600 text-xl">
//         Why choose JEF ?
//       </h1>
//       <div className="my-5 flex gap-8 h-[60%]">
//         <img
//           ref={imgRef3}
//           src={"/HomePageImg/WhyChooseJEFImg/smart-digitization-1.png"}
//           alt="SmartDigitilizationImg"
//           className="h-full "
//         />
//         <img
//           ref={imgRef4}
//           src={"/HomePageImg/WhyChooseJEFImg/our-ld-centre-1.png"}
//           alt="OurL&DImg"
//           className=" h-full"
//         />
//       </div>
//       <div ref={divRef3} className="relative">
//         <h1 className=" text-white -mt-[5rem] font-bold text-center text-3xl uppercase">
//           Smart <br />
//           Digitization
//         </h1>
//         <h3 className=" text-white text-base  text-center font-extralight">
//           Our patented tool that provides end to end digitalisation for
//           conducting system studies gives us a unique leverage to deliver
//           quality & consistency at scale.
//         </h3>
//       </div>
//       <div ref={divRef4} className="relative">
//         <h1 className=" text-white mt-[5rem] font-bold  text-center text-3xl uppercase">
//           Our L&d <br />
//           centre
//         </h1>
//         <h3 className=" text-white text-base text-center font-extralight">
//           Enhancing Value & Quality for Our Clients Through Our Continuous
//           Learning & Development Program.
//         </h3>
//       </div>
//     </section>
//   );
// }

// Our Contact's Input Section

// function FormInput({ label, type }) {
//   const id = label.toLowerCase().replace(" ", "-");

//   return (
//     <div className="mb-6">
//       <label htmlFor={id} className="sr-only">
//         {label}
//       </label>
//       <input
//         type={type}
//         id={id}
//         name={id}
//         placeholder={label}
//         className="overflow-hidden Y-axis-text px-5 py-3 w-full max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
//         required
//       />
//     </div>
//   );
// }

const blogData = [
  {
    id: 2,
    title: "EMI BETWEEN OVERHEAD POWER LINES & BURIED PIPELINES",
    imageSrc: "/BlogImg/Blog 2.png",
    description:
      "The Analysis of electromagnetic interference between high-voltage overhead power transmission lines and nearby gas or oil pipeline has been a topic of growing interest for many years.",
    path: "/blog/blog2",
  },
  {
    id: 1,
    title:
      "PQ SERVICES – ECONOMIC BENEFITS OF POWER FACTOR AND HARMONIC STUDIES",
    imageSrc: "/BlogImg/Blog 1.png",
    path: "/blog/blog1",
  },
  {
    id: 3,
    title: "Ensuring Electrical Safety in Greenfield Projects",
    imageSrc: "/BlogImg/Blog 3.png",
    path: "/blog/blog3",
  },
  {
    id: 4,
    title:
      "Measurement, simulation, validation - The 3 key steps of Power System Studies",
    imageSrc: "/BlogImg/Blog 4.png",
    path: "/blog/blog4",
  },
  {
    id: 5,
    title:
      "Importance of Electrical Safety in Chemical and Pharma Industries: Best Practices for Preventing Workplace Accidents",
    imageSrc: "/BlogImg/Blog 5.png",
    path: "/blog/blog5",
  },
  {
    id: 6,
    title: "Types of Earthing -  Type A and Type B",
    imageSrc: "/BlogImg/Blog 6.png",
    path: "/blog/blog6",
  },
];

function BlogCard({ imageSrc, title, path }) {
  return (
    <article className="w-[484px] ">
      {/* IMAGE */}
      <div className="w-full h-[290px] overflow-hidden">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="mt-[18px]">
        {/* CATEGORY */}
        <span
          className="
            text-[12px]
            uppercase
            font-light
            text-white
          "
        >
          ARTICLE
        </span>

        {/* TITLE */}
        <h2
          className="
            mt-[14px]
            text-[18px]
            leading-[150%]
            uppercase
            text-white
            font-normal
          "
        >
          {title}
        </h2>

        {/* DATE */}
        <p
          className="
            mt-[18px]
            text-[12px]
            font-light
            text-white
          "
        >
          April 2026
        </p>

        {/* READ MORE */}
        <Link href={path}>
          <div
            className="
              mt-[18px]
              flex
              items-center
              gap-[10px]
              cursor-pointer
              group
            "
          >
            <img
              src="./HomePageImg/LeftArrow.png"
              alt="Arrow"
              className="
                w-[25px]
                rotate-180
                brightness-0
                invert-[18%]
                sepia-[90%]
                saturate-[3000%]
                hue-rotate-[340deg]
              "
            />
          </div>
        </Link>
      </div>
    </article>
  );
}

{
  /*OUR INDUSTRIES SECTION */
}
const industries = [
  {
    id: 0,
    title: "Renewable Energy",
    icon: "/AboutUs/RenewableEnergy.png",
    description: [
      "We offer comprehensive solutions for the solar and wind power segments.",
      " Lightning Protection & Grounding: Comprehensive lightning protection and grounding solutions, including Supply and Installation, Testing and Commissioning.",
      " Design Services: Design and detailed engineering for specialized renewable energy infrastructure.",
      " Safety & Analysis: LPS adequacy studies and root cause analysis to ensure plant reliability.",
    ],
  },
  {
    id: 1,
    title: "Power Utilities",
    icon: "/AboutUs/PoweUtilities.png",
    description: [
      "We deliver specialized technical and engineering services to enhance the reliability of power utility systems.",
      " System Studies: Comprehensive power quality and power system studies.",
      " Health Assessments: Grounding system health assessments and risk analysis.",
      " Protection Solutions: Design, engineering, and installation of lightning protection and grounding systems.",
    ],
  },
  {
    id: 2,
    title: "Data Centers",
    icon: "/AboutUs/CBimg.png",
    description: [
      "We provide end-to-end electrical safety and reliability solutions tailored for mission-critical data centre environments.",
      " Uptime Assurance: Power quality studies and monitoring to prevent unexplained equipment failures or process interruptions.",
      " Advanced Protection: Automated lightning protection risk assessment and design using proprietary JEF Shield technology.",
      " Safety Compliance: Comprehensive electrical and fire safety audits to ensure 24/7 operational continuity.",
    ],
  },
  {
    id: 3,
    title: "Manufacturing Plant",
    icon: "/AboutUs/MFplant.png",
    description: [
      "We assist manufacturing facilities in solving complex electrical issues and reducing downtime through innovative technical services.",
      " Operational Reliability: Root cause analysis for sensor/DCS malfunctions and unexplained tripping.",
      " Safety Audits: Electrical & Fire Safety Audits using automated safety audit tool for accurate, real-time safety monitoring.",
      " Earthing & LPS Design: Technically superior grounding and lightning protection designs that meet international standards.",
    ],
  },
  {
    id: 4,
    title: "Process Plant",
    icon: "/AboutUs/ProcessPlant.png",
    description: [
      "Our expertise in high-risk environments ensures that process plants maintain the highest levels of safety and efficiency.",
      " Specialized Studies: EMI/EMC studies to ensure electromagnetic compatibility and prevent interference in sensitive systems.",
      " Risk Mitigation: Root cause analysis and adequacy studies to avoid costly process interruptions.",
      " Engineered Protection: Custom-designed external lightning protection and grounding solutions implemented by domain experts.",
    ],
  },
  {
    id: 5,
    title: "Oil & Gas",
    icon: "/AboutUs/OilandGas.png",
    description: [
      "We offer comprehensive solutions for the oil and gas segment, addressing both safety and corrosion challenges.",
      " Interference Modelling: AC interference studies using computer modelling and simulation for buried pipelines.",
      " Asset Protection: Comprehensive lightning protection and grounding solutions including design, supply, and installation.",
      " Performance Analysis: Detailed adequacy studies and root cause analysis for onshore and offshore facilities.",
    ],
  },
];

function IndustriesSection() {

 const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const currentIndustry = industries[activeIndustry];

  const handleNext = () => {
    setActiveIndustry((prev) => (prev + 1) % industries.length);
  };

  const handlePrev = () => {
    setActiveIndustry((prev) =>
      prev === 0 ? industries.length - 1 : prev - 1,
    );
  };

  // LOCK BODY SCROLL
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const industriesData = [
  {
    id: 0,
    title: "Renewable Energy",
    image: "/HomePageImg/IndustriesWeServe/weServe6.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector1.png",
    description:
      "We offer comprehensive solutions for the solar and wind power segments.",
    points: [
      "Lightning Protection & Grounding: Comprehensive lightning protection and grounding solutions, including Supply and Installation, Testing and Commissioning.",
      "Design Services: Design and detailed engineering for specialized renewable energy infrastructure.",
      "Safety & Analysis: LPS adequacy studies and root cause analysis to ensure plant reliability.",
    ],
  },

  {
    id: 1,
    title: "Power Utilities",
    image: "/HomePageImg/IndustriesWeServe/weServe1.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector2.png",
    description:
      "We deliver specialized technical and engineering services to enhance the reliability of power utility systems.",
    points: [
      "System Studies: Comprehensive power quality and power system studies.",
      "Health Assessments: Grounding system health assessments and risk analysis.",
      "Protection Solutions: Design, engineering and installation of lightning protection and grounding systems.",
    ],
  },

  {
    id: 2,
    title: "Data Centers",
    image: "/HomePageImg/IndustriesWeServe/weServe2.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector3.png",
    description:
      "We provide end-to-end electrical safety and reliability solutions tailored for mission-critical data centre environments.",
    points: [
      "Uptime Assurance: Power quality studies and monitoring to prevent unexplained equipment failures or process interruptions.",
      "Advanced Protection: Automated lightning protection risk assessment and design using proprietary JEF Shield technology.",
      "Safety Compliance: Comprehensive electrical and fire safety audits to ensure 24/7 operational continuity.",
    ],
  },

  {
    id: 3,
    title: "Manufacturing Plant",
    image: "/HomePageImg/IndustriesWeServe/weServe3.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector4.png",
    description:
      "We assist manufacturing facilities in solving complex electrical issues and reducing downtime through innovative technical services.",
    points: [
      "Operational Reliability: Root cause analysis for sensor/DCS malfunctions and unexplained tripping.",
      "Safety Audits: Electrical & Fire Safety Audits using automated safety audit tool for accurate, real-time safety monitoring.",
      "Earthing & LPS Design: Technically superior grounding and lightning protection designs that meet international standards.",
    ],
  },

  {
    id: 4,
    title: "Process Plant",
    image: "/HomePageImg/IndustriesWeServe/weServe4.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector5.png",
    description:
      "Our expertise in high-risk environments ensures that process plants maintain the highest levels of safety and efficiency.",
    points: [
      "Specialized Studies: EMI/EMC studies to ensure electromagnetic compatibility and prevent interference in sensitive systems.",
      "Risk Mitigation: Root cause analysis and adequacy studies to avoid costly process interruptions.",
      "Engineered Protection: Custom-designed external lightning protection and grounding solutions implemented by domain experts.",
    ],
  },

  {
    id: 5,
    title: "Oil & Gas",
    image: "/HomePageImg/IndustriesWeServe/weServe5.png",
    icon: "/HomePageImg/IndustriesWeServe/Vector6.png",
    description:
      "We offer comprehensive solutions for the oil and gas segment, addressing both safety and corrosion challenges.",
    points: [
      "Interference Modelling: AC interference studies using computer modelling and simulation for buried pipelines.",
      "Asset Protection: Comprehensive lightning protection and grounding solutions including design, supply, and installation.",
      "Performance Analysis: Detailed adequacy studies and root cause analysis for onshore and offshore facilities.",
    ],
  },
];
  return (
   <section className="w-full h-auto lg:h-screen bg-black overflow-hidden flex flex-col lg:flex-row">
  {industriesData.map((industry, index) => {
    const isActive = activeIndex === index;

    return (
      <div
        key={industry.id}
        onMouseEnter={() => setActiveIndex(index)}
        className={`
          relative
          overflow-hidden
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          cursor-pointer

          w-full
          min-h-[420px]

          lg:min-h-0
          ${
            isActive
              ? "lg:flex-[3]"
              : "lg:flex-1"
          }
        `}
      >
        {/* BG IMAGE */}
        <img
          src={industry.image}
          alt={industry.title}
          className={`
            absolute inset-0
            w-full h-full
            object-cover
            transition-all
            duration-700
            ${
              isActive
                ? "scale-105"
                : "scale-100"
            }
          `}
        />

        {/* OVERLAY */}
        <div
          className={`
            absolute inset-0
            transition-all
            duration-700
            ${
              isActive
                ? "bg-black/45"
                : "bg-black/60"
            }
          `}
        />

        {/* CONTENT */}
        <div className="relative z-20 h-full px-5 sm:px-8 py-8 sm:py-10 flex flex-col">

          {/* TITLE */}
          <div className="flex items-start gap-4 sm:gap-5">

            <div className="w-[2px] h-[50px] sm:h-[60px] bg-[#C02429] mt-1 shrink-0" />

            <div className="flex items-center gap-3 sm:gap-4">

              {/* ICON */}
              <img
                src={industry.icon}
                alt={industry.title}
                className={`
                  w-[22px] h-[22px]
                  sm:w-[28px] sm:h-[28px]
                  object-contain
                  transition-all
                  duration-700
                  ${
                    isActive
                      ? "opacity-100 scale-100"
                      : "opacity-80 scale-95"
                  }
                `}
              />

              {/* TITLE TEXT */}
              <h2
                className={`
                  text-white
                  whitespace-nowrap
                  text-[16px] sm:text-[25px]
                  tracking-[0.5px]
                  font-light
                  transition-opacity transition-transform
                  duration-1000
                  ease-out
                  ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-90 translate-y-[2px]"
                  }
                `}
              >
                {industry.title}
              </h2>

            </div>
          </div>

          {/* EXPANDABLE CONTENT */}
          <div
            className={`
              mt-10 sm:mt-16 lg:mt-24
              transition-all
              duration-700
              ease-out
              overflow-hidden
              ${
                isActive
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 lg:block hidden"
              }
            `}
          >
            <p className="text-white text-[14px] sm:text-[16px] leading-[1.8] mb-8 sm:mb-10 max-w-[500px]">
              {industry.description}
            </p>

            <ul className="space-y-5 sm:space-y-8 max-w-[520px]">
              {industry.points.map((point, idx) => (
                <li
                  key={idx}
                  className="text-white/95 text-[14px] sm:text-[16px] leading-[1.8] flex gap-3 sm:gap-4"
                >
                  <span>•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    );
  })}
</section>
  )
}

export default Home;
