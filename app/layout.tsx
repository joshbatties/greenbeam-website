// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./metadata";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4fa800" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
        
        {/* Structured data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GreenBeam",
              "url": "https://greenbeam.com.au",
              "logo": "https://greenbeam.com.au/logo.png",
              "sameAs": [
                "https://facebook.com/greenbeamau",
                "https://twitter.com/greenbeamau",
                "https://linkedin.com/company/greenbeam-australia",
                "https://instagram.com/greenbeamau"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-3-9123-4567",
                "contactType": "customer service",
                "email": "hello@greenbeam.com.au",
                "areaServed": "Victoria, Australia",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "42 Collins Street",
                "addressLocality": "Melbourne",
                "addressRegion": "VIC",
                "postalCode": "3000",
                "addressCountry": "AU"
              },
              "description": "Melbourne's premier sustainable structural timber solutions. Crafting a greener future for Australian construction.",
              "slogan": "Building Australia's sustainable future",
              "keywords": "sustainable timber, structural timber, Melbourne construction, green building, mass timber",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Melbourne",
                  "addressRegion": "VIC",
                  "addressCountry": "AU"
                }
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -37.8136,
                  "longitude": 144.9631
                },
                "geoRadius": "100000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}