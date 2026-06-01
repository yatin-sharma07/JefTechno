import { Montserrat } from 'next/font/google'
import "./globals.css";
import { TranslationProvider } from '../context/TranslationContext';
import Navbar from '../components/Navbar';
import MainFooter from '../components/Footer';
import Script from 'next/script';
import CookieConsentProvider from "../components/cookie/CookieConsentProvider.jsx";
import SmoothScroll from '@/components/SmoothScroll';


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  metadataBase: new URL('https://www.jefuae.com'),
  title: "JEF UAE | Engineering Solutions for Electrical & Safety Systems",
  description:
    "Providing advanced engineering solutions in earthing, lightning protection, power quality, and fire safety across various industries globally.",
  keywords:
    "JEF UAE, lightning protection, grounding system, grounding products, surge protection, UAE, electrical safety, lightning protection, power quality, fire safety, EMI EMC studies, engineering solutions, industrial safety",
  openGraph: {
    url: "https://www.jefuae.com/",
    description:
      "Providing advanced engineering solutions in earthing, lightning protection, power quality, and fire safety across various industries globally.",
    siteName: "JEF UAE | Engineering Solutions for Electrical & Safety Systems",
  },
  icons: {
    icon: "/HomePageImg/NavbarImg/JefTechno_logo_ 2.png",
  },
  verification: {
    google: 'NdAWjzLB8pCxgjiIspNZg8SmkWugCBbH2BsvoqKQjMM',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-53ZRLRWM');
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53ZRLRWM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <TranslationProvider>
          <div id="google_translate_element" style={{ display: "none" }}></div>
          <Navbar />
          <SmoothScroll/>
          {children}
          <MainFooter />
          <CookieConsentProvider />
        </TranslationProvider>
      </body>
    </html>
  );
}