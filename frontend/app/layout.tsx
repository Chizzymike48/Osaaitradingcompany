import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_CONFIG.website),
  title: "OSSAI - Premium Furniture & Interior Design",
  description:
    "Discover beautifully crafted furniture and interior pieces designed to bring comfort and elegance into every space.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BUSINESS_CONFIG.website,
    siteName: "OSSAI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
