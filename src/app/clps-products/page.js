import Solution6 from "./solution6";

export const metadata = {
  title: "Comprehensive Lightning Protection Solutions (CLPS) | JEF",
  description:
    "JEF Group supplies and designs comprehensive lightning protection systems (CLPS) built to the requirements of IEC 62305:2024. Type-tested components for industrial and commercial facilities.",
  keywords:
    "lightning protection, CLPS, IEC 62305:2024, surge protection, earthing system, air termination, down conductors, electrical safety, industrial protection",
  openGraph: {
    title: "Comprehensive Lightning Protection Solutions (CLPS) | JEF",
    description:
      "Advanced lightning protection systems compliant with the latest international standards. Type-tested to 200 kA.",
    url: "https://www.jefuae.com/clps-products",
    siteName: "JEF UAE",
    images: [
      {
        url: "/clps/clpf-logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Lightning Protection Solutions (CLPS) | JEF",
    description: "Advanced lightning protection systems compliant with IEC 62305:2024.",
    images: ["/clps/clpf-logo.png"],
  },
  alternates: {
    canonical: "https://www.jefuae.com/clps-products",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is lightning protection a legal requirement in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For certain building types and uses, yes. The National Building Code 2016 (NBC 2016) requires lightning protection for buildings above defined heights and for buildings that house hazardous, explosive, or particularly sensitive contents."
        }
      },
      {
        "@type": "Question",
        "name": "Should the lightning protection earthing system be kept separate from the electrical system earth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. IS/IEC 62305 requires the LPS earthing system to be interconnected with all other earthing systems in the structure to prevent destructive arcing between equipment connected to different earth references."
        }
      },
      {
        "@type": "Question",
        "name": "How often does a lightning protection system need to be inspected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IEC 62305-3 requires periodic inspection and maintenance. Intervals depend on the Lightning Protection Level (LPL) and environmental conditions. Full inspections are also required after any confirmed lightning strike event."
        }
      },
      {
        "@type": "Question",
        "name": "What changed practically with the 2024 edition of IEC 62305?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2024 revision introduces updated risk assessment methods using ground strike-point density (NSG), specified minimum thicknesses for metal components, and strengthened requirements for SPD dimensioning and electronic system protection."
        }
      },
      {
        "@type": "Question",
        "name": "What does JEF's 200 kA type test mean for a specifier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It means every JEF component has been verified to withstand twice the current magnitude (200 kA) demanded by the IEC 62561 standard (100 kA), providing a significant margin of safety and confidence."
        }
      }
    ]
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Comprehensive Lightning Protection Solutions (CLPS)",
    "description": "A standards-compliant lightning protection system including air termination, down conductors, earthing, equipotential bonding, and surge protective devices.",
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
      <Solution6 />
    </>
  );
}
