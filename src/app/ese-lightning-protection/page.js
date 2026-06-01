import Solution5 from "./solution5";

export const metadata = {
  title: "ESE Lightning Protection | JEF",
  description:
    "JEF offers next-generation ESE (Early Streamer Emission) lightning rods with protection radius up to 120m. Nimbus® and NLP 2200 series for wide-area lightning protection.",
  keywords:
    "ESE lightning protection, early streamer emission, Nimbus lightning rod, NLP 2200, lightning rod protection radius, external lightning protection, electrical safety",
  openGraph: {
    title: "ESE Lightning Protection | JEF",
    description:
      "Advanced ESE lightning protection systems with wide-area coverage and high lightning current withstand capacity.",
    url: "https://www.jefuae.com/ese-lightning-protection",
    siteName: "JEF UAE",
    images: [
      {
        url: "/SerivePage/EMIEMCLogo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESE Lightning Protection | JEF",
    description: "Advanced ESE lightning protection systems with wide-area coverage.",
    images: ["/SerivePage/EMIEMCLogo.png"],
  },
  alternates: {
    canonical: "https://www.jefuae.com/ese-lightning-protection",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Early Streamer Emission (ESE) technology?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ESE technology uses the atmospheric gradient to generate ionization, which effectively increases the protected volume compared to conventional lightning rods. This allows a single ESE rod to protect a much larger area."
        }
      },
      {
        "@type": "Question",
        "name": "Is ESE technology compliant with international standards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ESE systems like Nimbus® and NLP 2200 are designed and tested according to the NFC 17-102 standard."
        }
      }
    ]
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ESE Lightning Protection",
    "description": "Next-generation ESE lightning rods with protection radius up to 120m.",
    "brand": {
      "@type": "Brand",
      "name": "JEF"
    },
    "category": "Electrical Safety / Lightning Protection"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Solution5 />
    </>
  );
}
