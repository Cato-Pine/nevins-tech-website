import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nevins Tech | Technology Solutions for Flathead County",
    template: "%s | Nevins Tech",
  },
  description:
    "Workflow automation, AI integration, SaaS consolidation, and custom applications for Flathead County businesses. Local tech consulting without the big-city prices.",
  keywords: [
    "tech consulting",
    "Flathead County",
    "Kalispell",
    "Whitefish",
    "Montana",
    "workflow automation",
    "AI integration",
    "custom applications",
    "small business technology",
  ],
  authors: [{ name: "Nevins Tech" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nevinstech.com",
    siteName: "Nevins Tech",
    title: "Nevins Tech | Technology Solutions for Flathead County",
    description:
      "Workflow automation, AI integration, and custom applications for local businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
