import Solution from "./solution";

export const metadata = {
  title: "Surge Protective Devices (SPD) | JEF",
  description: "Protect your sensitive electronic equipment from transient overvoltages with JEF's comprehensive range of Surge Protective Devices (SPD) for power and data lines.",
  keywords: "surge protective devices, SPD, lightning surges, switching transients, electrical safety, IEC 61643",
  openGraph: {
    title: "Surge Protective Devices (SPD) | JEF",
    description: "Advanced surge protection solutions for critical infrastructure.",
    url: "https://www.jefuae.com/surge-protective-devices",
    siteName: "JEF UAE",
    images: [{ url: "/nav-ese.png" }],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <Solution />;
}
