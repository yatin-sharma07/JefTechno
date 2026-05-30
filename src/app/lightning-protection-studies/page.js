import Solution from "./solution";

export const metadata = {
  title: "Lightning Protection System Studies | JEF",
  description: "Scientific lightning protection system studies and design. Compliance with IS/IEC 62305 standards using advanced rolling sphere and risk assessment methodologies.",
  keywords: "lightning protection studies, LPS design, IEC 62305, rolling sphere method, risk assessment, external lightning protection, surge protection coordination",
  openGraph: {
    title: "Lightning Protection System Studies | JEF",
    description: "Expert lightning protection system analysis and scientific design services.",
    url: "https://www.jefuae.com/lightning-protection-studies",
    siteName: "JEF UAE",
    images: [{ url: "/SerivePage/LightningStudiesLogo.png" }],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <Solution />;
}
