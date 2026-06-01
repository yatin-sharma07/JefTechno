import Solution from "./solution";

export const metadata = {
  title: "JEF Shield | JEF",
  description:
    "Explore JEF Shield lightning protection solutions with wide-area coverage, engineered for reliable external lightning protection and electrical safety.",
  keywords:
    "JEF Shield, lightning protection, external lightning protection, lightning rod, electrical safety, lightning protection system, surge protection",
  openGraph: {
    title: "JEF Shield | JEF",
    description:
      "Advanced JEF Shield lightning protection systems for wide-area coverage and engineered safety.",
    url: "https://www.jefuae.com/JEF-shield",
    siteName: "JEF UAE",
    images: [
      {
        url: "/nav-jef-shield.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JEF Shield | JEF",
    description:
      "Advanced JEF Shield lightning protection systems for wide-area coverage and engineered safety.",
    images: ["/nav-jef-shield.png"],
  },
  alternates: {
    canonical: "https://www.jefuae.com/JEF-shield",
  },
};

export default function Page() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "JEF Shield",
    description:
      "Advanced lightning protection systems with wide-area coverage and high lightning current withstand capacity.",
    brand: {
      "@type": "Brand",
      name: "JEF",
    },
    category: "Electrical Safety / Lightning Protection",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Solution />
    </>
  );
}
