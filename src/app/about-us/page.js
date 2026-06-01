import AboutUsContent from "./AboutUsContent";

export const metadata = {
  title:
    "JEF Group of Companies | Electrical Engineering, Earthing & Lightning Protection Experts",

  description:
    "JEF is a global electrical engineering company specializing in earthing, lightning protection, power system studies, safety audits, EMI/EMC analysis, and critical infrastructure consulting. Operating across 30+ countries with 10K+ customers and 9 patented technologies.",

  keywords: [
    "JEF Group",
    "JEF Techno",
    "Electrical Engineering",
    "Earthing Studies",
    "Lightning Protection System",
    "Power System Studies",
    "Power Quality Analysis",
    "Instrumentation Earthing",
    "EMI EMC Studies",
    "Electrical Safety Audit",
    "Fire Safety Audit",
    "JEF Shield",
    "Power Utilities",
    "Renewable Energy",
    "Data Centers",
    "Oil and Gas Engineering",
    "Grounding Solutions",
    "Surge Protection",
    "Critical Infrastructure",
    "Electrical Consultancy",
    "Engineering Audits",
    "Industrial Safety",
    "Substation Earthing",
    "Arc Flash Analysis",
    "Global Engineering Company",
    "India Engineering Company",
    "UAE Engineering Services",
    "USA Electrical Engineering",
  ],

  authors: [{ name: "JEF Group" }],

  creator: "JEF Group",

  publisher: "JEF Group",

  metadataBase: new URL("https://yourdomain.com"),

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "JEF Group | Global Leaders in Electrical Engineering & Safety",

    description:
      "Specialists in earthing, lightning protection, electrical safety audits, power system studies, and patented engineering technologies serving 30+ countries globally.",

    url: "https://yourdomain.com/about",

    siteName: "JEF Group",

    images: [
      {
        url: "/AboutUs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JEF Group of Companies",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "JEF Group | Electrical Engineering & Safety Specialists",

    description:
      "Global engineering expertise in earthing, lightning protection, safety audits, power system studies, and industrial reliability.",

    images: ["/AboutUs/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Engineering",
};

export default function AboutUsPage() {
    return <AboutUsContent />;
}