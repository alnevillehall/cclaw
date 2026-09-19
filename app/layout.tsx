import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The CCLAW Firm | Dedicated Legal Representation. A Clear Path Forward. (Design Prototype)",
  description:
    "Design prototype for client evaluation. The CCLAW Firm — personal injury, criminal defense, and immigration representation founded by Chadayne Clive Lloyd Antonio Walker.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "The CCLAW Firm — Prototype Preview",
    description: "Design concept and prototype for client review. Personal injury, criminal defense, and immigration law.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-[#B8996A] selection:text-white">
        {/* Skip to Main Content Link (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-[#B8996A] focus:text-white focus:font-semibold focus:text-xs focus:uppercase focus:tracking-wider focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white rounded-[2px]"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
