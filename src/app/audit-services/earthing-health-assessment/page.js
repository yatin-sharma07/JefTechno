  import EHA from "./eha";

  export const metadata = {
    title: "Earthing Health Assessment | JEF UAE",
    description:
      "Professional Earthing Health Assessment services by JEF UAE.",
    keywords:
      "earthing health assessment, grounding system audit, electrical safety, JEF UAE",
    alternates: {
      canonical:
        "https://www.jefuae.com/audit-services/earthing-health-assessment",
    },
    openGraph: {
      url: "https://www.jefuae.com/audit-services/earthing-health-assessment",
      description:
        "Expert Earthing Health Assessment services by JEF UAE.",
      siteName: "Earthing Health Assessment | JEF UAE",
    },
  };

  export default function EHAPage() {
    return <EHA />;
  }