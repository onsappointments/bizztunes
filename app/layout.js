import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AppBoot from "./components/AppBoot";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata = {
  metadataBase: new URL("https://bizztunes.in"),

  title: {
    default: "Business Caller Tune & Jingles for Companies | BizzTunes",
    template: "%s | BizzTunes",
  },

  description:
    "Get professional business caller tunes, custom jingles, and voice branding for your company. One-time payment, lifetime validity, all networks supported across India.",

  keywords: [
    "business caller tune",
    "company caller tune",
    "professional callertune",
    "business jingle",
    "audio branding",
    "corporate caller tune",
    "callertune for business India"
  ],

  alternates: {
    canonical: "https://bizztunes.in/",
  },

  openGraph: {
    type: "website",
    url: "https://bizztunes.in/",
    title: "Business Caller Tune & Professional Jingles | BizzTunes",
    description:
      "Professional business caller tunes and custom jingles with lifetime validity. Build trust and brand identity from the first call.",
    siteName: "BizzTunes",
    images: [
      {
        url: "https://bizztunes.in/Bizz-tunes-logo.png",
        width: 1200,
        height: 630,
        alt: "BizzTunes Business Caller Tune & Audio Branding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Caller Tune & Audio Branding | BizzTunes",
    description:
      "Professional business caller tunes, jingles, and voice branding for companies. One-time payment, lifetime validity.",
    images: ["https://bizztunes.in/Bizz-tunes-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body className={`${dmSans.className} bg-[#05070e] text-white`}>
        {/* Navbar should NOT be gated by loader */}
        <Navbar />

        {/* AppBoot controls loader + page readiness */}
        <AppBoot>
          {children}
        </AppBoot>


        {/* SEO Structured Data */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://bizztunes.in/#organization",
          "name": "BizzTunes",
          "url": "https://bizztunes.in",
          "logo": "https://bizztunes.in/Bizz-tunes-logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7009987733",
            "contactType": "customer support",
            "availableLanguage": ["English", "Hindi"]
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://bizztunes.in/#localbusiness",
          "name": "BizzTunes",
          "image": "https://bizztunes.in/Bizz-tunes-logo.png",
          "telephone": "+91-7009987733",
          "email": "info@bizztunes.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "#24, Aatma Nagar, Mundian Kalan",
            "addressLocality": "Ludhiana",
            "postalCode": "141015",
            "addressRegion": "Punjab",
            "addressCountry": "IN"
          },
          "url": "https://bizztunes.in",
          "priceRange": "₹₹",
          "openingHours": "Mo-Su 00:00-23:59"
        },
        {
          "@type": "Service",
          "@id": "https://bizztunes.in/#service",
          "name": "Business Caller Tune & Audio Branding",
          "provider": {
            "@id": "https://bizztunes.in/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "description": "Professional business caller tunes, custom jingles, and audio branding services for companies."
        },
        {
          "@type": "FAQPage",
          "@id": "https://bizztunes.in/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a business callertune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A business callertune is a professional audio message that plays when someone calls your business number instead of the default ringing tone."
              }
            },
            {
              "@type": "Question",
              "name": "Is there any monthly charge?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, business callertunes are activated with a one-time payment and have lifetime validity."
              }
            },
            {
              "@type": "Question",
              "name": "How long does activation take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most business callertunes are activated within 24 hours after approval."
              }
            }
          ]
        }
      ]
    })
  }}
/>

      </body>
    </html>
  );
}
