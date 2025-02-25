// app/metadata.ts
import { Metadata } from "next";

const siteName = "GreenBeam";
const description = "Melbourne's premier sustainable structural timber solutions. Crafting a greener future for Australian construction with environmentally friendly building materials.";
const url = "https://greenbeam.com.au";

export const siteMetadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${siteName} - Sustainable Timber Solutions Melbourne - Coming Soon`,
    template: `%s | ${siteName} Melbourne`,
  },
  description,
  keywords: [
    "sustainable construction Melbourne",
    "eco-friendly building Australia",
    "structural timber Melbourne",
    "green building materials Victoria",
    "renewable construction Victoria",
    "sustainable architecture Australia",
    "timber solutions Melbourne",
    "carbon-neutral construction",
    "mass timber Melbourne",
    "CLT construction Victoria",
    "engineered timber Australia",
    "FSC certified timber",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url,
    title: `${siteName} - Sustainable Structural Timber Melbourne - Coming Soon`,
    description,
    siteName,
    images: [
      {
        url: `${url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "GreenBeam - Sustainable Structural Timber Solutions Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Sustainable Timber Solutions Melbourne`,
    description,
    images: [`${url}/og-image.jpg`],
    creator: "@greenbeamau",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: url,
  },
  verification: {
    google: "google-site-verification-code",
    // Add other verification codes as needed
  },

};