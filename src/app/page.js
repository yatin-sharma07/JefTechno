import HomeClient from "./HomeClient";

export const metadata = {
  title: "JEF UAE | Engineering Solutions for Electrical & Safety Systems",
  description:
    "JEF UAE provides advanced engineering solutions in earthing, lightning protection, power quality, and fire safety. Expertise from low voltage to extra high voltage.",
  keywords:
    "JEF UAE, lightning protection, grounding system, electrical safety, power quality, fire safety, EMI EMC studies, engineering solutions, industrial safety",
  openGraph: {
    title: "JEF UAE | Engineering Solutions for Electrical & Safety Systems",
    description:
      "Providing advanced engineering solutions in earthing, lightning protection, power quality, and fire safety across various industries globally.",
    url: "https://www.jefuae.com",
    siteName: "JEF UAE",
    images: [
      {
        url: "/HomePageImg/NavbarImg/JefTechno_logo_ 2.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JEF UAE | Engineering Solutions for Electrical & Safety Systems",
    description: "Providing advanced engineering solutions in earthing, lightning protection, power quality, and fire safety.",
    images: ["/HomePageImg/NavbarImg/JefTechno_logo_ 2.png"],
  },
  alternates: {
    canonical: "https://www.jefuae.com",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JEF UAE",
    "url": "https://www.jefuae.com",
    "logo": "https://www.jefuae.com/HomePageImg/NavbarImg/JefTechno_logo_ 2.png",
    "description": "Providing advanced engineering solutions in earthing, lightning protection, power quality, and fire safety across various industries globally.",
    "sameAs": [
      "https://www.linkedin.com/company/jef-techno-solutions-pvt-ltd/",
      "https://www.facebook.com/jeftechnosolutions/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-4-1234567",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": "en"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
